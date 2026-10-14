import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  email: { type: String, required: true, unique: true, lowercase: true, trim: true },
  passwordHash: { type: String, required: true },
  avatar: { type: String, default: '' },
  bio: { type: String, default: '' },
  education: { type: String, default: 'Student' },
  interests: [{ type: String }],
  assessmentCompleted: { type: Boolean, default: false },
  topCareerId: { type: String, default: null },
  activeCareerId: { type: String, default: null },
  isVerified: { type: Boolean, default: false },
  verificationToken: { type: String, default: null },
  verificationTokenExpires: { type: Date, default: null },
  lastActiveDate: { type: String, default: () => new Date().toISOString().split('T')[0] },
  completedRoadmapItems: {
    type: Map,
    of: [String],
    default: {}
  },
  savedCareers: [{ type: String }],
  recommendations: [{
    careerId: { type: String, required: true },
    suitability: { type: Number, required: true },
    whyItMatches: { type: String, default: '' }
  }],
  assessmentHistory: [{
    completedAt: { type: Date, default: Date.now },
    topCareerId: String,
    suitabilityScore: Number,
    answers: [{
      questionId: Number,
      optionIndex: Number
    }]
  }]
}, {
  timestamps: true,
  toJSON: {
    transform: function (doc, ret) {
      delete ret.passwordHash;
      delete ret._id;
      delete ret.__v;
      return ret;
    }
  }
});

export const User = mongoose.models.User || mongoose.model('User', userSchema);
