import { store } from '../services/store.js';

export async function getRoadmap(req, res) {
  try {
    const user = await store.findUserById(req.user.id);
    const careerId = req.params.careerId || user?.activeCareerId || user?.topCareerId || 'singer_vocalist';

    const userCompleted = user?.completedRoadmapItems?.[careerId] || [];
    const roadmap = store.getRoadmapByCareer(careerId, userCompleted);

    if (!roadmap) {
      return res.status(404).json({ error: 'Roadmap not found for this career.' });
    }

    const career = store.getCareerById(careerId);

    return res.json({
      roadmap,
      career
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to fetch roadmap.' });
  }
}

export async function toggleRoadmapItem(req, res) {
  try {
    const { careerId, itemId, completed } = req.body;

    if (!careerId || !itemId || completed === undefined) {
      return res.status(400).json({ error: 'careerId, itemId, and completed boolean are required.' });
    }

    const updatedRoadmap = await store.toggleRoadmapItem(req.user.id, careerId, itemId, completed);
    const user = await store.findUserById(req.user.id);

    return res.json({
      message: 'Item status updated',
      roadmap: updatedRoadmap,
      progressPercentage: updatedRoadmap.progressPercentage
    });
  } catch (error) {
    console.error('Toggle roadmap item error:', error);
    return res.status(500).json({ error: 'Failed to update roadmap item.' });
  }
}

export async function setActiveCareer(req, res) {
  try {
    const { careerId } = req.body;
    if (!careerId) {
      return res.status(400).json({ error: 'careerId is required.' });
    }

    const career = store.getCareerById(careerId);
    if (!career) {
      return res.status(404).json({ error: 'Career does not exist.' });
    }

    await store.updateUser(req.user.id, { activeCareerId: careerId });
    return res.json({ message: 'Active roadmap career updated.', activeCareerId: careerId });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update active career.' });
  }
}
