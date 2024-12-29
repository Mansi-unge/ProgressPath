import React, { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

const Login = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const role = new URLSearchParams(location.search).get('role');

  useEffect(() => {
    if (!role) {
      navigate('/');
    }
  }, [role, navigate]);

  const handleLogin = () => {
    localStorage.setItem('token', 'dummy-token');
    if (role === 'student') {
      navigate('/student/home');
    } else if (role === 'teacher') {
      navigate('/teacher/dashboard');
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">
        Login as {role?.toUpperCase() || 'Guest'}
      </h1>
      <input
        type="text"
        placeholder="Username"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleLogin}
        className="bg-blue-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Login
      </button>
      <p>
        Don't have an account?{' '}
        <button
          onClick={() => navigate('/signup')}
          className="underline text-blue-500"
        >
          Sign Up
        </button>
      </p>
    </div>
  );
};

export default Login;
