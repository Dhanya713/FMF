import mongoose from 'mongoose';

const questionOptionSchema = new mongoose.Schema({
  text: { type: String, required: true },
  weights: {
    type: mongoose.Schema.Types.Mixed,
    default: {}
  }
}, { _id: false });

const questionSchema = new mongoose.Schema({
  id: { type: Number, required: true, unique: true },
  question: { type: String, required: true },
  dimension: { type: String, default: 'General' },
  category: { type: String, default: 'Scenario' },
  options: [questionOptionSchema]
}, {
  timestamps: true
});

export const Question = mongoose.models.Question || mongoose.model('Question', questionSchema);
