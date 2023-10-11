
// /backend/middleware/errorHandler.js

// errorMiddleware.js
export const errorHandler = (err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ message: 'Something went wrong!' });
};
