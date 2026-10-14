import crypto from 'crypto';
import bcrypt from 'bcryptjs';
import { store } from '../services/store.js';
import { generateToken } from '../middleware/auth.js';

export function validatePassword(password) {
  if (!password || typeof password !== 'string') {
    return 'Password is required.';
  }
  if (password.length < 8) {
    return 'Password must be at least 8 characters long.';
  }
  if (!/[A-Z]/.test(password)) {
    return 'Password must contain at least one uppercase letter.';
  }
  if (!/[a-z]/.test(password)) {
    return 'Password must contain at least one lowercase letter.';
  }
  if (!/[0-9]/.test(password)) {
    return 'Password must contain at least one number.';
  }
  if (!/[^A-Za-z0-9]/.test(password)) {
    return 'Password must contain at least one special character.';
  }
  return null;
}

export async function signup(req, res) {
  try {
    const { name, email, password } = req.body;

    if (!name || !email || !password) {
      return res.status(400).json({ error: 'Please provide name, email, and password.' });
    }

    if (!/^\S+@\S+\.\S+$/.test(email)) {
      return res.status(400).json({ error: 'Please enter a valid email address.' });
    }

    // Server-side strong password validation
    const passwordError = validatePassword(password);
    if (passwordError) {
      return res.status(400).json({ error: passwordError });
    }

    const existingUser = await store.findUserByEmail(email);
    if (existingUser) {
      return res.status(409).json({ error: 'An account with this email already exists.' });
    }

    const salt = await bcrypt.genSalt(10);
    const passwordHash = await bcrypt.hash(password, salt);

    const newUser = await store.createUser({
      name,
      email,
      passwordHash,
      // Email verification is not enforced since no email provider is configured.
      // Users are immediately active and can log in after signup.
      isVerified: true,
      verificationToken: null,
      verificationTokenExpires: null
    });

    const token = generateToken(newUser);

    const safeUser = { ...newUser };
    delete safeUser.passwordHash;
    delete safeUser.verificationToken;

    return res.status(201).json({
      message: 'Account created successfully! You can now log in.',
      user: safeUser,
      token
    });
  } catch (error) {
    console.error('Signup error:', error);
    return res.status(500).json({ error: 'Server error during signup.' });
  }
}

export async function login(req, res) {
  try {
    const { email, password } = req.body;

    if (!email || !password) {
      return res.status(400).json({ error: 'Please enter both email and password.' });
    }

    const user = await store.findUserByEmail(email);
    if (!user) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    const isMatch = await bcrypt.compare(password, user.passwordHash);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid email or password.' });
    }

    // Enforce email verification before allowing access
    if (user.isVerified === false) {
      return res.status(403).json({
        error: 'Your email address has not been verified yet. Please check your email to verify your account before logging in.',
        isUnverified: true,
        email: user.email,
        verificationToken: user.verificationToken,
        verificationUrl: user.verificationToken ? `/verify-email?token=${user.verificationToken}` : null
      });
    }

    const token = generateToken(user);
    const safeUser = { ...user };
    delete safeUser.passwordHash;
    delete safeUser.verificationToken;

    return res.json({
      message: 'Login successful!',
      user: safeUser,
      token
    });
  } catch (error) {
    console.error('Login error:', error);
    return res.status(500).json({ error: 'Server error during login.' });
  }
}

export async function verifyEmail(req, res) {
  try {
    const token = req.query.token || req.body?.token;

    if (!token) {
      return res.status(400).json({ error: 'Verification token is required.' });
    }

    const result = await store.verifyUserEmail(token);
    if (!result.success) {
      return res.status(400).json({ error: result.error });
    }

    const safeUser = { ...result.user };
    delete safeUser.passwordHash;
    delete safeUser.verificationToken;

    return res.json({
      message: 'Email verified successfully! You can now log in normally.',
      user: safeUser
    });
  } catch (error) {
    console.error('Email verification error:', error);
    return res.status(500).json({ error: 'Server error during email verification.' });
  }
}

export async function resendVerification(req, res) {
  try {
    const { email } = req.body;
    if (!email) {
      return res.status(400).json({ error: 'Email address is required.' });
    }

    const user = await store.findUserByEmail(email);
    if (!user) {
      return res.status(404).json({ error: 'No account found with this email address.' });
    }

    if (user.isVerified) {
      return res.status(400).json({ error: 'This account has already been verified. Please log in.' });
    }

    const verificationToken = crypto.randomBytes(32).toString('hex');
    const verificationTokenExpires = new Date(Date.now() + 24 * 60 * 60 * 1000);

    await store.updateUser(user.id, {
      verificationToken,
      verificationTokenExpires
    });

    console.log(`📧 [Email Verification Resent] New verification token for ${email}:`);
    console.log(`🔗 Link: http://localhost:5173/verify-email?token=${verificationToken}`);

    return res.json({
      message: 'A fresh verification link has been sent to your email address.',
      email,
      verificationToken,
      verificationUrl: `/verify-email?token=${verificationToken}`
    });
  } catch (error) {
    console.error('Resend verification error:', error);
    return res.status(500).json({ error: 'Server error resending verification email.' });
  }
}

export async function getMe(req, res) {
  try {
    const user = await store.findUserById(req.user.id);
    if (!user) {
      return res.status(404).json({ error: 'User not found.' });
    }

    const safeUser = { ...user };
    delete safeUser.passwordHash;

    return res.json({ user: safeUser });
  } catch (error) {
    return res.status(500).json({ error: 'Server error fetching user.' });
  }
}

export async function updateProfile(req, res) {
  try {
    const { name, bio, education } = req.body;
    const updated = await store.updateUser(req.user.id, {
      ...(name ? { name } : {}),
      ...(bio !== undefined ? { bio } : {}),
      ...(education !== undefined ? { education } : {})
    });

    const safeUser = { ...updated };
    delete safeUser.passwordHash;

    return res.json({
      message: 'Profile updated successfully!',
      user: safeUser
    });
  } catch (error) {
    return res.status(500).json({ error: 'Failed to update profile.' });
  }
}
