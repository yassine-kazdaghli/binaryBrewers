// auth.js
import axios from 'axios';
import Cookies from 'js-cookie';

const API_BASE_URL = 'http://localhost:5002/api/auth'; // Replace with your backend API URL

// Function to log in a user
export const login = async (username, password) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/login`, {
      username,
      password,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to register a new user
export const signup = async (username, password, fullName, email) => {
  try {
    const response = await axios.post(`${API_BASE_URL}/signup`, {
      username,
      password,
      fullName,
      email,
    });
    return response.data;
  } catch (error) {
    throw error;
  }
};

// Function to log out a user (optional, depending on your application's requirements)
export const logout = () => {
  // You can implement logout functionality here, such as clearing the JWT token from cookies.
};

// Function to check if a user is authenticated (optional, depending on your application's requirements)

