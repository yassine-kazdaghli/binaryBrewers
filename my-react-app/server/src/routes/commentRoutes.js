import express from 'express';
import { postComment } from '../controllers/commentController.js';
import { authenticate } from '../middlewares/authMiddleware.js';

const router = express.Router();

//router.get('/', getComments);
router.post('/', authenticate, postComment);

export default router;