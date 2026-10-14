import mongoose from 'mongoose';

const assessmentResultSchema = new mongoose.Schema({
  userId: { type: String, required: true, index: true },
  answers: [{
    questionId: Number,
    optionIndex: Number
  }],
  scores: {
    type: Map,
    of: Number,
    default: {}
  },
  topCareerId: { type: String, required: true },
  recommendations: [{
    careerId: String,
    suitability: Number,
    whyItMatches: String
  }]
}, {
  timestamps: true
});

export const AssessmentResult = mongoose.models.AssessmentResult || mongoose.model('AssessmentResult', assessmentResultSchema);
