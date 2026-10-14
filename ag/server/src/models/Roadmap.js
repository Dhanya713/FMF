import mongoose from 'mongoose';

const roadmapItemSchema = new mongoose.Schema({
  id: { type: String, required: true },
  title: { type: String, required: true },
  description: { type: String, required: true },
  estimatedTime: { type: String, default: '15 hours' },
  resource: { type: String, default: '' },
  type: { type: String, default: 'concept' }, // concept, project, book, milestone, cert
  completed: { type: Boolean, default: false }
}, { _id: false });

const roadmapStageSchema = new mongoose.Schema({
  stage: { type: String, enum: ['Beginner', 'Intermediate', 'Advanced', 'Professional'], required: true },
  badge: { type: String, default: 'Foundation' },
  color: { type: String, default: 'emerald' },
  description: { type: String, required: true },
  milestone: { type: String, default: '' },
  items: [roadmapItemSchema]
}, { _id: false });

const roadmapSchema = new mongoose.Schema({
  careerId: { type: String, required: true, unique: true },
  careerTitle: { type: String },
  stages: [roadmapStageSchema]
}, {
  timestamps: true
});

export const Roadmap = mongoose.models.Roadmap || mongoose.model('Roadmap', roadmapSchema);
