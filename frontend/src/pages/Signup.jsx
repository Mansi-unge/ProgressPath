import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role is 'student'

  const toggleRole = () => {
    setRole(role === 'student' ? 'teacher' : 'student');
  };

  const handleSignup = () => {
    // Signup logic here (e.g., API call)
    alert(`Account created successfully as ${role.toUpperCase()}! Please login.`);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen flex items-center justify-center px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-100 via-white to-green-100">
      <div className="bg-white border border-gray-200 shadow-lg rounded-lg p-6 sm:p-8 w-full max-w-md mb-2">
        {/* Role Header */}
        <h1 className="text-2xl sm:text-3xl font-bold text-gray-800 mb-4 text-center">
          Sign Up as{' '}
          <span className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300">{role.toUpperCase()}</span>
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
            placeholder="Username"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
          />
          <input
            type="email"
            placeholder="Email"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
          />
          <input
            type="password"
            placeholder="Password"
            className="w-full bg-transparent border-b border-gray-300 text-gray-700 p-2 focus:outline-none focus:border-indigo-500 placeholder-gray-500"
          />
        </div>

        {/* Signup Button */}
        <button
          onClick={handleSignup}
          className="mt-6 w-full bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 text-white py-3 rounded-full shadow-md transition-transform duration-300"
        >
          Sign Up as {role.toUpperCase()}
        </button>

        {/* Role Toggle */}
        <p className="text-center text-gray-700 mt-4">
          {role === 'student' ? (
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
        <p className="mt-4  text-center text-gray-700">
          Already have an account?{' '}
          <button
            onClick={() => navigate('/login')}
            className="bg-gradient-to-r from-green-500 to-teal-600 hover:from-green-600 hover:to-teal-700 bg-clip-text text-transparent transition-colors duration-300 font-medium hover:underline"
          >
            Login
          </button>
        </p>
      </div>
    </div>
  );
};

export default Signup;
