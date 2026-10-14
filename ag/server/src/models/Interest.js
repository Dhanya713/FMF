import mongoose from 'mongoose';

const interestSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  name: { type: String, required: true },
  icon: { type: String, default: 'Sparkles' },
  category: { type: String, required: true },
  description: { type: String, required: true }
}, {
  timestamps: true
});

export const Interest = mongoose.models.Interest || mongoose.model('Interest', interestSchema);
