// src/middleware/authMiddleware.js
import jwt from 'jsonwebtoken';

export const authenticate = (req, res, next) => {
  const token = req.cookies.token;
  console.log(req.cookies.token)
  if (!token) {
    return res.status(401).json({ message: 'Authentication required' });
  }

  
  
  if (!token) {
    return res.status(401).json({ message: 'Token not found in Authorization header' });
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_SECRET);
    req.user = decoded;
    next();
  } catch (error) {
    console.error(error);
    res.status(401).json({ message: 'Authentication failed' });
  }
};
