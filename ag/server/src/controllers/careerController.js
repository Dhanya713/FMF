import { store } from '../services/store.js';

export function getCareers(req, res) {
  try {
    const careers = store.getCareers();
    return res.json({ careers });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch careers.' });
  }
}

export function getCareerById(req, res) {
  try {
    const { id } = req.params;
    const career = store.getCareerById(id);
    if (!career) {
      return res.status(404).json({ error: 'Career not found.' });
    }
    return res.json({ career });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch career details.' });
  }
}

export async function getRecommendations(req, res) {
  try {
    const user = await store.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    if (user.recommendations && user.recommendations.length > 0) {
      // Re-hydrate full career details
      const populated = user.recommendations.map(rec => {
        const fullCareer = store.getCareerById(rec.careerId);
        return {
          ...rec,
          career: fullCareer
        };
      }).filter(r => Boolean(r.career));

      // If populated is healthy, return it
      if (populated.length > 0) {
        return res.json({ recommendations: populated });
      }
    }

    // If user has not completed assessment yet, provide weighted preview based on interests
    const defaultRecs = store.calculateRecommendations([], user.interests || []);
    return res.json({ recommendations: defaultRecs, isPreliminary: true });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to get career recommendations.' });
  }
}
