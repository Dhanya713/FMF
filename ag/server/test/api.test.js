import dotenv from 'dotenv';
dotenv.config();

import http from 'http';
import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import { connectDB } from '../src/config/db.js';
import authRoutes from '../src/routes/authRoutes.js';
import careerRoutes from '../src/routes/careerRoutes.js';
import assessmentRoutes from '../src/routes/assessmentRoutes.js';
import roadmapRoutes from '../src/routes/roadmapRoutes.js';
import userRoutes from '../src/routes/userRoutes.js';

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

async function runApiTests() {
  console.log('\n==================================================');
  console.log('🚀 Running Full HTTP API Integration Test');
  console.log('==================================================\n');

  await connectDB();

  const app = express();
  app.use(cors());
  app.use(express.json());

  app.use('/api/auth', authRoutes);
  app.use('/api/careers', careerRoutes);
  app.use('/api/assessment', assessmentRoutes);
  app.use('/api/roadmap', roadmapRoutes);
  app.use('/api/user', userRoutes);

  const server = http.createServer(app);
  await new Promise(r => server.listen(5099, r));
  const baseUrl = 'http://localhost:5099/api';

  try {
    // 1. SIGNUP WITH WEAK PASSWORD -> SHOULD FAIL (400)
    console.log('\n--- Test 1: Weak Password Signup Rejection ---');
    const weakRes = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Test Weak',
        email: `weak_${Date.now()}@example.com`,
        password: 'weak'
      })
    });
    assert(weakRes.status === 400, 'Signup with weak password returns 400 Bad Request');
    const weakJson = await weakRes.json();
    assert(weakJson.error.includes('8 characters'), 'Error explains minimum 8 characters requirement');

    // 2. SIGNUP WITH STRONG PASSWORD -> REQUIRES VERIFICATION (201)
    console.log('\n--- Test 2: Strong Password Signup & Email Verification Requirement ---');
    const validEmail = `verify_user_${Date.now()}@example.com`;
    const strongPassword = 'MySecretPassword1!';
    const signupRes = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name: 'Verification Student',
        email: validEmail,
        password: strongPassword
      })
    });
    assert(signupRes.status === 201, 'Signup with strong password returns 201 Created');
    const signupJson = await signupRes.json();
    assert(signupJson.requiresVerification === true, 'Signup response indicates requiresVerification: true');
    assert(Boolean(signupJson.verificationToken), 'Verification token is generated');
    assert(signupJson.token === undefined, 'No auth token is issued before email verification');

    // 3. ATTEMPT LOGIN WITH UNVERIFIED ACCOUNT -> SHOULD BE REJECTED (403)
    console.log('\n--- Test 3: Unverified Account Login Attempt ---');
    const unverifiedLoginRes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: validEmail,
        password: strongPassword
      })
    });
    assert(unverifiedLoginRes.status === 403, 'Unverified login returns 403 Forbidden');
    const unverifiedLoginJson = await unverifiedLoginRes.json();
    assert(unverifiedLoginJson.isUnverified === true, 'Response identifies isUnverified: true');
    assert(unverifiedLoginJson.error.includes('verified'), 'Error message clearly informs user about verification');

    // 4. VERIFY EMAIL USING VERIFICATION TOKEN
    console.log('\n--- Test 4: Email Verification via Link/Token ---');
    const verifyRes = await fetch(`${baseUrl}/auth/verify-email?token=${signupJson.verificationToken}`);
    assert(verifyRes.status === 200, 'Email verification endpoint returns 200 OK');
    const verifyJson = await verifyRes.json();
    assert(verifyJson.message.includes('verified successfully'), 'Confirmation message returned');

    // 5. LOGIN AFTER EMAIL VERIFICATION -> SHOULD SUCCEED (200)
    console.log('\n--- Test 5: Login After Verification ---');
    const verifiedLoginRes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: validEmail,
        password: strongPassword
      })
    });
    assert(verifiedLoginRes.status === 200, 'Verified login succeeds with 200 OK');
    const verifiedLoginJson = await verifiedLoginRes.json();
    assert(Boolean(verifiedLoginJson.token), 'JWT authentication token received');
    const authToken = verifiedLoginJson.token;

    // 6. PROTECTED ROUTE ACCESS WITH AUTH TOKEN
    console.log('\n--- Test 6: Access Dashboard & Verify Streak is Completely Removed ---');
    const dashRes = await fetch(`${baseUrl}/user/dashboard`, {
      headers: { Authorization: `Bearer ${authToken}` }
    });
    assert(dashRes.status === 200, 'Dashboard loaded successfully for verified user');
    const dashJson = await dashRes.json();
    assert(dashJson.streak === undefined, 'Dashboard has NO streak property');
    assert(!('streak' in dashJson), 'streak key does not exist in dashboard data');

    // 7. ROADMAP PROGRESS TOGGLE & PERSISTENCE
    console.log('\n--- Test 7: Roadmap Item Toggle & No Streak Returned ---');
    const toggleRes = await fetch(`${baseUrl}/roadmap/toggle-item`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        Authorization: `Bearer ${authToken}`
      },
      body: JSON.stringify({
        careerId: 'software_engineer',
        itemId: 'software_engineer-1',
        completed: true
      })
    });
    assert(toggleRes.status === 200, 'Roadmap item toggled successfully');
    const toggleJson = await toggleRes.json();
    assert(toggleJson.streak === undefined, 'No streak in toggle roadmap response');
    assert(!('streak' in toggleJson), 'streak key does not exist in roadmap response');

    // 8. DEMO ACCOUNT LOGIN REMAINS WORKING
    console.log('\n--- Test 8: Pre-Configured Demo Account Login ---');
    const demoLoginRes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        email: 'demo@findmyflow.com',
        password: 'password123'
      })
    });
    assert(demoLoginRes.status === 200, 'Demo account logs in seamlessly (isVerified: true)');

    // 9. CROSS-USER DATA ISOLATION TEST
    console.log('\n--- Test 9: Cross-User Data Isolation ---');

    // Create and verify User A
    const userAEmail = `user_a_${Date.now()}@isolationtest.com`;
    const userAPassword = 'IsolationTestA1!';
    const signupARes = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'User A Isolation', email: userAEmail, password: userAPassword })
    });
    const signupAJson = await signupARes.json();
    assert(signupARes.status === 201, 'User A signup succeeds');
    // Verify User A email
    await fetch(`${baseUrl}/auth/verify-email?token=${signupAJson.verificationToken}`);
    const loginARes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userAEmail, password: userAPassword })
    });
    const loginAJson = await loginARes.json();
    assert(loginARes.status === 200, 'User A logs in after verification');
    const tokenA = loginAJson.token;

    // User A selects interests
    const interestsARes = await fetch(`${baseUrl}/user/interests`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokenA}` },
      body: JSON.stringify({ interests: ['coding_tech', 'science_research'] })
    });
    assert(interestsARes.status === 200, 'User A interests saved successfully');

    // User A marks a roadmap item
    const toggleARes = await fetch(`${baseUrl}/roadmap/toggle-item`, {
      method: 'POST', headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${tokenA}` },
      body: JSON.stringify({ careerId: 'software_engineer', itemId: 'software_engineer-1', completed: true })
    });
    assert(toggleARes.status === 200, 'User A roadmap item toggled');

    // Create and verify User B
    const userBEmail = `user_b_${Date.now()}@isolationtest.com`;
    const userBPassword = 'IsolationTestB1!';
    const signupBRes = await fetch(`${baseUrl}/auth/signup`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name: 'User B Isolation', email: userBEmail, password: userBPassword })
    });
    const signupBJson = await signupBRes.json();
    assert(signupBRes.status === 201, 'User B signup succeeds');
    await fetch(`${baseUrl}/auth/verify-email?token=${signupBJson.verificationToken}`);
    const loginBRes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userBEmail, password: userBPassword })
    });
    const loginBJson = await loginBRes.json();
    assert(loginBRes.status === 200, 'User B logs in after verification');
    const tokenB = loginBJson.token;

    // User B fetches their own dashboard — must NOT see User A's data
    const dashBRes = await fetch(`${baseUrl}/user/dashboard`, { headers: { Authorization: `Bearer ${tokenB}` } });
    assert(dashBRes.status === 200, 'User B dashboard loads successfully');
    const dashBJson = await dashBRes.json();
    assert(dashBJson.user.email === userBEmail, 'User B dashboard contains User B email, not User A');
    assert(!dashBJson.user.interests || dashBJson.user.interests.length === 0, 'User B has no interests (isolated from User A)');
    assert(dashBJson.completedTopicsCount === 0, 'User B has 0 completed topics (isolated from User A)');

    // User B fetches roadmap — must show 0 progress (not User A's progress)
    const roadmapBRes = await fetch(`${baseUrl}/roadmap/software_engineer`, { headers: { Authorization: `Bearer ${tokenB}` } });
    assert(roadmapBRes.status === 200, 'User B roadmap loads successfully');
    const roadmapBJson = await roadmapBRes.json();
    assert(roadmapBJson.roadmap.progressPercentage === 0, 'User B roadmap shows 0% progress (isolated from User A)');
    assert(roadmapBJson.roadmap.completedItems === 0, 'User B has no completed roadmap items (isolated from User A)');

    // User A logs back in — must still see their own data
    const reloginARes = await fetch(`${baseUrl}/auth/login`, {
      method: 'POST', headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email: userAEmail, password: userAPassword })
    });
    const reloginAJson = await reloginARes.json();
    assert(reloginARes.status === 200, 'User A can re-login successfully');
    const retokenA = reloginAJson.token;
    const dashARes = await fetch(`${baseUrl}/user/dashboard`, { headers: { Authorization: `Bearer ${retokenA}` } });
    const dashAJson = await dashARes.json();
    assert(dashAJson.user.email === userAEmail, 'User A still sees their own email after User B session');
    assert(dashAJson.completedTopicsCount === 1, 'User A still sees their 1 completed topic (data not overwritten by User B)');

    console.log('\n==================================================');
    console.log(`🎉 ALL ${passedTests} API TESTS PASSED!`);
    console.log('==================================================\n');
  } finally {
    server.close();
    await mongoose.disconnect();
    process.exit(0);
  }
}

runApiTests().catch(err => {
  console.error('API Test Error:', err);
  process.exit(1);
});
