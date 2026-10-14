import { Router } from 'express';
import { signup, login, getMe, updateProfile, verifyEmail, resendVerification } from '../controllers/authController.js';
import { authenticate } from '../middleware/auth.js';

const router = Router();

router.post('/signup', signup);
router.post('/login', login);
router.get('/verify-email', verifyEmail);
router.post('/verify-email', verifyEmail);
router.post('/resend-verification', resendVerification);
router.get('/me', authenticate, getMe);
router.put('/profile', authenticate, updateProfile);

export default router;
