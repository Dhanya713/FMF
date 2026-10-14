import { Router } from 'express';
import { getQuestions, submitAssessment } from '../controllers/assessmentController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/questions', getQuestions);
router.post('/submit', authenticate, submitAssessment);

export default router;
