// /backend/routes/contactRoutes.js

import express from 'express';
import { submitContact } from '../controllers/contactController.js';

const router = express.Router();

router.route('/').post(submitContact);

export default router;
