// src/api.js
import axios from 'axios';

const api = axios.create({
  baseURL: 'http://localhost:5000/api',  // Adjust with your backend URL
  timeout: 1000,
  headers: { 'Content-Type': 'application/json' },
});

export default api;
