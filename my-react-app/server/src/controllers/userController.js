// src/controllers/userController.js
export const getUserProfile = (req, res) => {
    // You can access user information from req.user (set in authMiddleware)
    res.json({ message: `Welcome, ${req.user.username}!` });
  };
  