import mongoose from 'mongoose';

const careerSchema = new mongoose.Schema({
  id: { type: String, required: true, unique: true },
  title: { type: String, required: true },
  category: { type: String, required: true },
  tagline: { type: String, required: true },
  description: { type: String, required: true },
  overview: { type: String, default: '' },
  suitability: { type: Number, default: 85 },
  whyItMatches: { type: String, default: '' },
  salaryRange: { type: String, required: true },
  growth: { type: String, required: true },
  difficulty: { type: String, required: true },
  rating: { type: String, default: '4.8' },
  badge: { type: String, default: '' },
  icon: { type: String, default: 'Compass' },
  accentColor: { type: String, default: 'indigo' },
  demandLevel: { type: String, default: 'High Demand' },
  estimatedLearningTime: { type: String, default: '6 – 18 Months' },
  requiredSkills: [{ type: String }],
  keyResponsibilities: [{ type: String }],
  specializations: [{ type: String }],
  industries: [{ type: String }],
  pros: [{ type: String }],
  challenges: [{ type: String }],
  certifications: [{ type: String }],
  projects: [{ type: String }],
  communities: [{ type: String }],
  learningResources: [{
    title: { type: String },
    type: { type: String },
    url: { type: String },
    free: { type: Boolean }
  }],
  relatedCareers: [{ type: String }]
}, {
  timestamps: true
});

export const Career = mongoose.models.Career || mongoose.model('Career', careerSchema);
