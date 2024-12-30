import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });
  const [role, setRole] = useState('student'); // Default role

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // const handleLogin = async () => {
  //   if (!formData.email || !formData.password) {
  //     toast.error('Please fill in all fields.', {
  //       autoClose: 3000,
  //       progress: undefined, // Hide progress bar
  //     });
  //     return;
  //   }

  //   try {
  //     const res = await axios.post('http://localhost:5000/api/auth/login', formData);
  //     localStorage.setItem('token', res.data.token);
  //     localStorage.setItem('user', JSON.stringify(res.data.user));
  //     if (res.data.user.role === 'student') {
  //       navigate('/student/home');
  //     } else {
  //       navigate('/teacher/dashboard');
  //     }
      
  //     // Toast success without progress bar
  //     toast.success('Login successful!', {
  //       autoClose: 3000, // Optional: duration in ms
  //       progress: undefined, // This hides the progress bar
  //     });
  //   } catch (error) {
  //     toast.error('Don\'t have an account to log in. Please sign up.', {
  //       autoClose: 3000, // Optional: duration in ms
  //       progress: undefined, // This hides the progress bar
  //     });
  //     console.error(error.response.data);
  //   }
  // };


  // const handleLogin = async () => {
  //   if (!formData.email || !formData.password) {
  //     toast.error('Please fill in all fields.', {
  //       autoClose: 3000,
  //       progress: undefined, // Hide progress bar
  //     });
  //     return;
  //   }
  
  //   try {
  //     const res = await axios.post('http://localhost:5000/api/auth/login', formData);
  //     localStorage.setItem('token', res.data.token);
  //     localStorage.setItem('user', JSON.stringify(res.data.user));
  
  //     if (res.data.user.role === 'student') {
  //       navigate('/student/home');
  //     } else {
  //       navigate('/teacher/dashboard');
  //     }
  
  //     toast.success('Login successful!', {
  //       autoClose: 3000, // Optional: duration in ms
  //       progress: undefined, // This hides the progress bar
  //     });
  //   } catch (error) {
  //     if (error.response && error.response.data.message) {
  //       // Use backend-provided error message
  //       toast.error(error.response.data.message, {
  //         autoClose: 3000,
  //         progress: undefined,
  //       });
  //     } else {
  //       // Handle network or unexpected errors
  //       toast.error('An unexpected error occurred. Please try again.', {
  //         autoClose: 3000,
  //         progress: undefined,
  //       });
  //     }
  //     console.error('Login error:', error);
  //   }
  // };

  const handleLogin = async () => {
    if (!formData.email || !formData.password) {
      toast.error('Please fill in all fields.', {
        autoClose: 3000,
        progress: undefined, // Hide progress bar
      });
      return;
    }
  
    try {
      const res = await axios.post('http://localhost:5000/api/auth/login', formData);
  
      // Save user details in localStorage
      localStorage.setItem('token', res.data.token);
      localStorage.setItem('user', JSON.stringify(res.data.user));
  
      // Navigate based on user role
      if (res.data.user.role === 'student') {
        navigate('/student/home');
      } else {
        navigate('/teacher/dashboard');
      }
  
      toast.success('Login successful!', {
        autoClose: 3000, // Optional: duration in ms
        progress: undefined, // This hides the progress bar
      });
    } catch (error) {
      if (error.response) {
        // Handle specific backend errors
        if (error.response.status === 400 && error.response.data.message === 'User not found') {
          toast.error('No account found with this email. Please sign up.', {
            autoClose: 3000,
            progress: undefined,
          });
        } else if (error.response.status === 400 && error.response.data.message === 'Invalid password') {
          toast.error('Incorrect password. Please try again.', {
            autoClose: 3000,
            progress: undefined,
          });
        } else {
          toast.error(error.response.data.message || 'Failed to log in. Please try again.', {
            autoClose: 3000,
            progress: undefined,
          });
        }
      } else if (error.request) {
        // Handle network errors
        toast.error('Network error. Please check your connection and try again.', {
          autoClose: 3000,
          progress: undefined,
        });
      } else {
        // Handle unexpected errors
        toast.error('An unexpected error occurred. Please try again.', {
          autoClose: 3000,
          progress: undefined,
        });
      }
      console.error('Login error:', error);
    }
  };
  

  
  const toggleRole = () => {
    setRole(role === 'student' ? 'teacher' : 'student');
  };

  const handleSignupRedirect = () => {
    navigate('/signup');
  };

  return (
    <div className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-white to-green-100">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 w-full max-w-md">
        {/* Role Header */}
        <h1 className="text-3xl font-bold text-gray-800 mb-8 text-center">
          Login as{' '}
          <span className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent">
            {role.toUpperCase()}
          </span>
        </h1>

        {/* Decorative Illustration */}
        <div className="mb-8 flex justify-center">
          <img
            src="https://img.freepik.com/free-vector/tablet-login-concept-illustration_114360-7863.jpg?ga=GA1.1.90701070.1717571865&semt=ais_hybrid"
            alt="Login Illustration"
            className="w-2/3 rounded-lg shadow-md"
            loading="lazy"
          />
        </div>

        {/* Input Fields */}
        <div className="space-y-6">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
            onChange={handleChange}
            required
          />
        </div>

        {/* Login Button */}
        <button
          onClick={handleLogin}
          className="mt-6 w-full bg-gradient-to-r from-blue-500 to-cyan-600 hover:from-blue-600 hover:to-cyan-700 text-white py-3 rounded-full shadow-md transition-transform duration-300"
        >
          Login
        </button>

        {/* Toggle Role */}
        <p className="mt-6 text-center text-gray-700">
          {role === 'student' ? (
            <>
              Are you a{' '}
              <button
                onClick={toggleRole}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent font-medium hover:underline"
              >
                Teacher?
              </button>
            </>
          ) : (
            <>
              Are you a{' '}
              <button
                onClick={toggleRole}
                className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent font-medium hover:underline"
              >
                Student?
              </button>
            </>
          )}
        </p>

        {/* Signup Section */}
        <p className="mt-6 text-center text-gray-700">
          Don't have an account?{' '}
          <button
            onClick={handleSignupRedirect}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>

      {/* Toast Notification Container */}
      <ToastContainer />
    </div>
  );
};

export default Login;
