import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [role, setRole] = useState('student'); // Default role is 'student'

  const handleSignup = () => {
    // Signup logic here (e.g., API call)
    alert(`Account created successfully as ${role.toUpperCase()}! Please login.`);
    navigate(`/login?role=${role}`);
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-3xl font-bold mb-6">Sign Up</h1>

      {/* Role Selection */}
      <div className="flex mb-4 space-x-4">
        <button
          onClick={() => setRole('student')}
          className={`px-4 py-2 rounded-md ${
            role === 'student' ? 'bg-blue-500 text-white' : 'bg-gray-200'
          }`}
        >
          Student
        </button>
        <button
          onClick={() => setRole('teacher')}
          className={`px-4 py-2 rounded-md ${
            role === 'teacher' ? 'bg-green-500 text-white' : 'bg-gray-200'
          }`}
        >
          Teacher
        </button>
      </div>

      {/* Signup Form */}
      <input
        type="text"
        placeholder="Username"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <input
        type="email"
        placeholder="Email"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <input
        type="password"
        placeholder="Password"
        className="mb-4 p-2 border border-gray-300 rounded-md"
      />
      <button
        onClick={handleSignup}
        className="bg-green-500 text-white px-4 py-2 rounded-md mb-4"
      >
        Sign Up as {role.toUpperCase()}
      </button>

      <p>
        Already have an account?{' '}
        <button
          onClick={() => navigate('/login')}
          className="underline text-blue-500"
        >
          Login
        </button>
      </p>
    </div>
  );
};

export default Signup;
