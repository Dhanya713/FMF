import { Router } from 'express';
import { getRoadmap, toggleRoadmapItem, setActiveCareer } from '../controllers/roadmapController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/', authenticate, getRoadmap);
router.get('/:careerId', authenticate, getRoadmap);
router.post('/toggle-item', authenticate, toggleRoadmapItem);
router.post('/set-active', authenticate, setActiveCareer);

export default router;
