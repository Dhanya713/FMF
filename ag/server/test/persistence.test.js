import dotenv from 'dotenv';
dotenv.config();

import mongoose from 'mongoose';
import bcrypt from 'bcryptjs';
import { connectDB } from '../src/config/db.js';
import { store } from '../src/services/store.js';
import { User, AssessmentResult, Career, Roadmap } from '../src/models/index.js';
import { validatePassword } from '../src/controllers/authController.js';

let failedTests = 0;
let passedTests = 0;

function assert(condition, message) {
  if (!condition) {
    console.error(`❌ FAIL: ${message}`);
    failedTests++;
    throw new Error(message);
  } else {
    console.log(`✅ PASS: ${message}`);
    passedTests++;
  }
}

async function runTestSuite() {
  console.log('\n==================================================');
  console.log('🧪 Starting FindMyFlow Verification & Persistence Test Suite');
  console.log('==================================================\n');

  // 1. DATABASE CONNECTION TEST
  console.log('\n--- 1. Testing MongoDB Connection & Logging ---');
  const dbResult = await connectDB();
  assert(dbResult.connected === true, 'Database connects successfully without silent fallbacks');
  assert(mongoose.connection.readyState === 1, 'Mongoose connection readyState is 1 (connected)');
  const isAtlas = (process.env.MONGODB_URI || '').includes('mongodb+srv://') || (process.env.MONGODB_URI || '').includes('.mongodb.net');
  console.log(`ℹ️ [Database Status] Mode: ${isAtlas ? 'MongoDB Atlas Cluster' : 'MongoDB Instance'}, Host: ${mongoose.connection.host}, DB: ${mongoose.connection.name}`);

  // 2. STRONG PASSWORD VALIDATION TEST
  console.log('\n--- 2. Testing Strong Password Requirements ---');
  assert(validatePassword('short') !== null, 'Password under 8 chars is rejected');
  assert(validatePassword('nouppercase123!') !== null, 'Password missing uppercase is rejected');
  assert(validatePassword('NOLOWERCASE123!') !== null, 'Password missing lowercase is rejected');
  assert(validatePassword('NoNumberSpecial!') !== null, 'Password missing number is rejected');
  assert(validatePassword('NoSpecialChar123') !== null, 'Password missing special character is rejected');
  assert(validatePassword('StrongPass123!') === null, 'Valid strong password (8+ chars, upper, lower, num, special) is accepted');

  // 3. EMAIL VERIFICATION & AUTHENTICATION TEST
  console.log('\n--- 3. Testing Email Verification & Authentication ---');
  const testEmail = `student_${Date.now()}@example.com`;
  const plainPassword = 'SuperSecret123!';
  const salt = await bcrypt.genSalt(10);
  const passwordHash = await bcrypt.hash(plainPassword, salt);
  const verificationToken = 'token_' + Date.now();

  // Create user in MongoDB
  const newUser = await store.createUser({
    name: 'Taylor Swift',
    email: testEmail,
    passwordHash,
    isVerified: false,
    verificationToken,
    verificationTokenExpires: new Date(Date.now() + 24 * 3600 * 1000)
  });

  // Verify stored in MongoDB
  const mongoUserDoc = await User.findOne({ email: testEmail });
  assert(mongoUserDoc !== null, 'New user document exists in MongoDB');
  assert(mongoUserDoc.isVerified === false, 'New user is unverified by default');
  assert(mongoUserDoc.verificationToken === verificationToken, 'Verification token stored in MongoDB');
  assert(mongoUserDoc.passwordHash !== plainPassword, 'Password is NOT stored in plain text');
  assert(bcrypt.compareSync(plainPassword, mongoUserDoc.passwordHash), 'Password hash verified via bcrypt');

  // Unverified user login check
  const unverifiedCheck = await store.findUserByEmail(testEmail);
  assert(unverifiedCheck.isVerified === false, 'User retrieved from DB has isVerified: false');

  // Verify email via token
  const verifyResult = await store.verifyUserEmail(verificationToken);
  assert(verifyResult.success === true, 'store.verifyUserEmail successfully verifies account');
  assert(verifyResult.user.isVerified === true, 'User is now verified in database');

  // Double check directly in MongoDB
  const updatedMongoDoc = await User.findOne({ email: testEmail });
  assert(updatedMongoDoc.isVerified === true, 'Direct MongoDB query confirms user.isVerified is true');
  assert(updatedMongoDoc.verificationToken === null, 'Verification token cleared after activation');

  // 4. PERSISTENCE ACROSS RESTART TEST (INTERESTS, ASSESSMENT, ROADMAP)
  console.log('\n--- 4. Testing Multi-Field Data Persistence ---');
  // Update interests
  await store.updateUser(newUser.id, {
    interests: ['coding_tech', 'visual_design']
  });

  // Update roadmap items
  await store.toggleRoadmapItem(newUser.id, 'software_engineer', 'software_engineer-1', true);
  await store.toggleRoadmapItem(newUser.id, 'software_engineer', 'software_engineer-2', true);

  // Submit assessment and save results
  const mockAnswers = [
    { questionId: 1, optionIndex: 0 },
    { questionId: 2, optionIndex: 1 }
  ];
  const recs = store.calculateRecommendations(mockAnswers, ['coding_tech', 'visual_design']);
  const topCareer = recs[0];

  await AssessmentResult.create({
    userId: newUser.id,
    answers: mockAnswers,
    topCareerId: topCareer.careerId,
    recommendations: recs.map(r => ({
      careerId: r.careerId,
      suitability: r.suitability,
      whyItMatches: r.whyItMatches
    }))
  });

  await store.updateUser(newUser.id, {
    assessmentCompleted: true,
    topCareerId: topCareer.careerId,
    activeCareerId: topCareer.careerId,
    recommendations: recs.map(r => ({
      careerId: r.careerId,
      suitability: r.suitability,
      whyItMatches: r.whyItMatches
    }))
  });

  // Simulate complete backend restart / disconnection & reconnection
  console.log('\n🔄 Simulating Backend Restart (disconnecting and reconnecting MongoDB)...');
  await mongoose.disconnect();
  assert(mongoose.connection.readyState === 0, 'MongoDB connection cleanly closed');

  // Reconnect
  await connectDB();
  assert(mongoose.connection.readyState === 1, 'MongoDB successfully reconnected after restart');

  // Retrieve user fresh from database
  const restoredUser = await store.findUserById(newUser.id);
  assert(restoredUser !== null, 'User successfully retrieved from MongoDB after backend restart');
  assert(restoredUser.email === testEmail, 'Email preserved after restart');
  assert(restoredUser.isVerified === true, 'Verified status preserved after restart');
  assert(Array.isArray(restoredUser.interests) && restoredUser.interests.includes('coding_tech'), 'Interests persisted across restart');
  assert(restoredUser.completedRoadmapItems['software_engineer']?.includes('software_engineer-1'), 'Roadmap progress item 1 persisted across restart');
  assert(restoredUser.completedRoadmapItems['software_engineer']?.includes('software_engineer-2'), 'Roadmap progress item 2 persisted across restart');
  assert(restoredUser.assessmentCompleted === true, 'Assessment completion status persisted across restart');
  assert(restoredUser.topCareerId === topCareer.careerId, 'Top career recommendation persisted across restart');

  // Verify AssessmentResult document in MongoDB
  const assessmentDoc = await AssessmentResult.findOne({ userId: newUser.id });
  assert(assessmentDoc !== null, 'AssessmentResult document exists in MongoDB collection');
  assert(assessmentDoc.answers.length === 2, 'Assessment answers count matches in MongoDB collection');

  // 5. STREAK REMOVAL VERIFICATION
  console.log('\n--- 5. Verifying Streak Removal ---');
  assert(restoredUser.streak === undefined, 'No streak property in restored user');
  assert(!('streak' in restoredUser), 'streak key does not exist on user object');

  // 6. USER DATA ISOLATION TEST
  console.log('\n--- 6. Testing User Data Isolation ---');
  const secondEmail = `other_student_${Date.now()}@example.com`;
  const secondUser = await store.createUser({
    name: 'Jordan Lee',
    email: secondEmail,
    passwordHash: 'hash',
    isVerified: true
  });
  const secondRestored = await store.findUserById(secondUser.id);
  assert(secondRestored.interests.length === 0, 'Second user has isolated empty interests');
  assert(Object.keys(secondRestored.completedRoadmapItems || {}).length === 0, 'Second user has isolated empty roadmap items');

  // Clean up test documents
  await User.deleteMany({ email: { $in: [testEmail, secondEmail] } });
  await AssessmentResult.deleteMany({ userId: { $in: [newUser.id, secondUser.id] } });
  console.log('🧹 Cleaned up test documents in MongoDB.');

  console.log('\n==================================================');
  console.log(`🎉 TEST SUMMARY: ${passedTests} PASSED, ${failedTests} FAILED`);
  console.log('==================================================\n');

  if (failedTests > 0) {
    process.exit(1);
  } else {
    process.exit(0);
  }
}

runTestSuite().catch(err => {
  console.error('Fatal test error:', err);
  process.exit(1);
});
