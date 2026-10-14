import { Router } from 'express';
import { getInterests, updateUserInterests, getDashboard } from '../controllers/userController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.get('/interests', getInterests);
router.post('/interests', authenticate, updateUserInterests);
router.get('/dashboard', authenticate, getDashboard);
router.get('/profile', authenticate, getDashboard);

export default router;
