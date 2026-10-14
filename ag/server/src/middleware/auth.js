import jwt from 'jsonwebtoken';
import { store } from '../services/store.js';

const JWT_SECRET = process.env.JWT_SECRET || 'findmyflow-super-secret-production-key-2026';

export async function authenticate(req, res, next) {
  try {
    const authHeader = req.headers.authorization;
    if (!authHeader || !authHeader.startsWith('Bearer ')) {
      return res.status(401).json({ error: 'Access denied. No token provided.' });
    }

    const token = authHeader.split(' ')[1];
    const decoded = jwt.verify(token, JWT_SECRET);
    const user = await store.findUserById(decoded.id);

    if (!user) {
      return res.status(401).json({ error: 'User associated with token no longer exists.' });
    }

    if (user.isVerified === false) {
      return res.status(403).json({ error: 'Your email address has not been verified yet. Please check your email to activate your account.' });
    }

    req.user = user;
    next();
  } catch (error) {
    return res.status(401).json({ error: 'Invalid or expired token.' });
  }
}

export function generateToken(user) {
  return jwt.sign(
    { id: user.id, email: user.email, name: user.name },
    JWT_SECRET,
    { expiresIn: '7d' }
  );
}
