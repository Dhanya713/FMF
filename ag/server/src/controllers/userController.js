import { store } from '../services/store.js';

export function getInterests(req, res) {
  try {
    const interests = store.getInterests();
    return res.json({ interests });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch interests.' });
  }
}

export async function updateUserInterests(req, res) {
  try {
    const { interests } = req.body;
    if (!Array.isArray(interests)) {
      return res.status(400).json({ error: 'Interests must be an array of IDs.' });
    }

    const updatedUser = await store.updateUser(req.user.id, {
      interests
    });

    const safeUser = { ...updatedUser };
    delete safeUser.passwordHash;

    return res.json({
      message: 'Interests updated successfully!',
      user: safeUser
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update interests.' });
  }
}

export async function getDashboard(req, res) {
  try {
    const user = await store.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    // For new users with no active career selected, use null — do NOT fall back
    // to a hardcoded career (e.g. 'singer_vocalist') which would show another user's career
    const activeCareerId = user.activeCareerId || user.topCareerId || null;
    const topCareer = user.topCareerId ? store.getCareerById(user.topCareerId) : null;
    const activeCareer = activeCareerId ? store.getCareerById(activeCareerId) : null;

    const userCompleted = (activeCareerId && user.completedRoadmapItems?.[activeCareerId]) || [];
    const roadmap = activeCareerId ? store.getRoadmapByCareer(activeCareerId, userCompleted) : null;

    // Calculate total completed topics across all careers
    let totalCompletedTopics = 0;
    if (user.completedRoadmapItems) {
      const itemsObj = user.completedRoadmapItems instanceof Map ? Object.fromEntries(user.completedRoadmapItems) : user.completedRoadmapItems;
      for (const list of Object.values(itemsObj)) {
        if (Array.isArray(list)) {
          totalCompletedTopics += list.length;
        }
      }
    }

    const quote = store.getRandomQuote();

    const dashboardData = {
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        avatar: user.avatar,
        education: user.education,
        bio: user.bio,
        interests: user.interests || []
      },
      assessmentStatus: {
        completed: Boolean(user.assessmentCompleted),
        topCareerId: user.topCareerId,
        totalInterestsSelected: (user.interests || []).length
      },
      topCareer: topCareer || null,
      activeCareer: activeCareer || null,
      roadmapProgress: {
        careerId: activeCareerId,
        careerTitle: activeCareer?.title || 'Selected Career',
        percentage: roadmap ? roadmap.progressPercentage : 0,
        completedCount: roadmap ? roadmap.completedItems : 0,
        totalCount: roadmap ? roadmap.totalItems : 0
      },
      completedTopicsCount: totalCompletedTopics,
      quote,
      recommendationsCount: (user.recommendations || []).length
    };

    return res.json(dashboardData);
  } catch (error) {
    console.error('Dashboard error:', error);
    return res.status(500).json({ error: 'Failed to load dashboard data.' });
  }
}
