// src/controllers/userController.js
import User from "../models/User.js"

export const getUserProfile = async (req, res) => {
  try {
    console.log("Inside getUserProfile");
    console.log("User ID from request:", req.user.userId);

    const user = await User.findById(req.user.userId).select('-password'); 
    console.log("Fetched user from database:", user);

    if (!user) {
      return res.status(404).json({ message: 'User not found' });
    }

    res.json(user);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Internal server error' });
  }
};