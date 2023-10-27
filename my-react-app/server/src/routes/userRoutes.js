// src/routes/userRoutes.js
// src/routes/userRoutes.js
import express from 'express';
import { getUserProfile } from '../controllers/userController.js';
import {authenticate} from '../middlewares/authMiddleware.js'

const router = express.Router();

// Apply the authenticate middleware to protect this route
router.get('/current_user', authenticate, getUserProfile);

export default router;
