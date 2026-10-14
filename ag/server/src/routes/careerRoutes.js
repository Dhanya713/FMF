import { Router } from 'express';
import { getCareers, getCareerById, getRecommendations } from '../controllers/careerController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/', getCareers);
router.get('/recommendations', authenticate, getRecommendations);
router.get('/:id', getCareerById);

export default router;
