// /backend/controllers/contactController.js

import asyncHandler from 'express-async-handler';  // You might need to install this
import Contact from '../models/contactModel.js';

// @desc    Submit contact form
// @route   POST /api/contact
// @access  Public
const submitContact = asyncHandler(async (req, res) => {
  const { name, email, message } = req.body;

  const contactMessage = new Contact({
    name,
    email,
    message,
  });

  const savedMessage = await contactMessage.save();

  if (savedMessage) {
    res.status(201).json({ message: 'Form submitted successfully' });
  } else {
    res.status(400);
    throw new Error('Failed to submit form');
  }
});

export { submitContact };
