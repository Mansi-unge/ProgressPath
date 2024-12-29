import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const initialRole = new URLSearchParams(location.search).get('role') || 'student';

  // States
  const [isLoading, setIsLoading] = useState(true);
  const [role, setRole] = useState(initialRole); // Role state for toggling

  useEffect(() => {
    // Simulate lazy loading
    const timeout = setTimeout(() => setIsLoading(false), 500);

    // Redirect to homepage if no role is provided
    if (!initialRole) {
      navigate('/');
    }

    return () => clearTimeout(timeout);
  }, [initialRole, navigate]);

  const handleLogin = () => {
    localStorage.setItem('token', 'dummy-token');
    if (role === 'student') {
      navigate('/student/home');
    } else if (role === 'teacher') {
      navigate('/teacher/dashboard');
    }
  };

  const toggleRole = () => {
    setRole(role === 'student' ? 'teacher' : 'student');
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center p-4 bg-gradient-to-br from-indigo-100 via-white to-green-100"
    >
      <div
        className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 w-full max-w-md"
      >
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
            type="text"
            placeholder="Username"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
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
            onClick={() => navigate('/signup')}
            className="bg-gradient-to-r from-blue-500 to-cyan-600 bg-clip-text text-transparent font-medium hover:underline"
          >
            Sign Up
          </button>
        </p>
      </div>
    </div>
  );
};

export default Login;
