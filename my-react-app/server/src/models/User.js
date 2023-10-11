// models/User.js
import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  username: {
    type: String,
    required: true,
    unique: true,
  },
  password: {
    type: String,
    required: true,
  },
  fullName: {
    type: String,
    
  },
  email: {
    type: String,
    required: true,
    unique: true,
  },
  // Other user properties as needed
});

const User = mongoose.model('User', userSchema);

export default User;
