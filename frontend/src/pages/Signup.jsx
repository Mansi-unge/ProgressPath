import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Signup = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    role: 'student', // Default role
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSignup = async () => {
    try {
      await axios.post('http://localhost:5000/api/auth/signup', formData);
      toast.success('Signup successful! Please login.');
      navigate('/login');
    } catch (error) {
      toast.error('Signup failed. Please try again.');
      console.error(error.response.data);
    }
  };

  const toggleRole = () => {
    setFormData({ ...formData, role: formData.role === 'student' ? 'teacher' : 'student' });
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-green-100">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md mb-2">
        {/* Role Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
          Sign Up as{' '}
          <span className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300">
            {formData.role.toUpperCase()}
          </span>
        </h1>

        {/* Decorative Illustration */}
        <div className="mb-4 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/secure-login-concept-illustration_114360-4685.jpg?ga=GA1.1.90701070.1717571865&semt=ais_hybrid"
            alt="Signup Illustration"
            className="w-full max-w-[12rem] sm:max-w-[16rem] rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-4 sm:space-y-6">
          <input
            type="text"
            name="username"
            placeholder="Username"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
            onChange={handleChange}
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
            onChange={handleChange}
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="mt-6 w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-full shadow-md transition-transform duration-300"
        >
          Sign Up as {formData.role.toUpperCase()}
        </button>

        {/* Role Toggle */}
        <p className="text-center text-gray-700 mt-4">
          {formData.role === 'student' ? (
            <>
              Are you a{' '}
              <button
                onClick={toggleRole}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300 font-medium hover:underline"
              >
                Teacher?
              </button>
            </>
          ) : (
            <>
              Are you a{' '}
              <button
                onClick={toggleRole}
                className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300 font-medium hover:underline"
              >
                Student?
              </button>
            </>
          )}
        </p>

        {/* Login Link */}
        <p className="mt-4 text-center text-gray-700">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Signup;
