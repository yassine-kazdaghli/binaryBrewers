import express from 'express';
import { body, validationResult } from 'express-validator';
import { signup, login } from '../controllers/authController.js';

const router = express.Router();

// Define the signup route with validation
router.post(
  '/signup',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
    body('fullName').notEmpty().withMessage('Full name is required'),
    body('email').isEmail().withMessage('Invalid email format'),
  ],
  signup
);

// Define the login route with validation
router.post(
  '/login',
  [
    body('username').notEmpty().withMessage('Username is required'),
    body('password').notEmpty().withMessage('Password is required'),
  ],
  login
);

export default router;
