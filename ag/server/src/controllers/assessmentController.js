import { store } from '../services/store.js';

export function getQuestions(req, res) {
  try {
    const questions = store.getQuestions();
    return res.json({ questions });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch assessment questions.' });
  }
}

export async function submitAssessment(req, res) {
  try {
    const { answers } = req.body;
    if (!answers || !Array.isArray(answers) || answers.length === 0) {
      return res.status(400).json({ error: 'Answers must be provided as a non-empty array.' });
    }

    const user = await store.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // Dynamic programmatic scoring across all ~38 diverse careers
    const recommendations = store.calculateRecommendations(answers, user.interests || []);

    const topCareer = recommendations[0];

    // Persist assessment result document in MongoDB
    try {
      const { AssessmentResult } = await import('../models/index.js');
      await AssessmentResult.create({
        userId: user.id,
        answers,
        topCareerId: topCareer ? topCareer.careerId : 'singer_vocalist',
        recommendations: recommendations.map(r => ({
          careerId: r.careerId,
          suitability: r.suitability,
          whyItMatches: r.whyItMatches
        }))
      });
    } catch (dbErr) {
      console.warn('Note on AssessmentResult document creation:', dbErr.message);
    }

    // Save recommendations and top career to user profile
    await store.updateUser(user.id, {
      assessmentCompleted: true,
      topCareerId: topCareer ? topCareer.careerId : 'singer_vocalist',
      activeCareerId: user.activeCareerId || (topCareer ? topCareer.careerId : 'singer_vocalist'),
      recommendations: recommendations.map(r => ({
        careerId: r.careerId,
        suitability: r.suitability,
        whyItMatches: r.whyItMatches
      })),
      assessmentHistory: [
        ...(user.assessmentHistory || []),
        {
          completedAt: new Date(),
          topCareerId: topCareer ? topCareer.careerId : 'singer_vocalist',
          suitabilityScore: topCareer ? topCareer.suitability : 90,
          answers
        }
      ]
    });

    return res.json({
      message: 'Assessment completed and multi-dimensional recommendations generated!',
      recommendations,
      topCareer
    });
  } catch (error) {
    console.error('Submit assessment error:', error);
    return res.status(500).json({ error: 'Failed to submit assessment.' });
  }
}
