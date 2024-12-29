import React from 'react';
import { useNavigate } from 'react-router-dom';

const LandingPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-4xl font-bold mb-8">Welcome to ProgressPath LMS</h1>
      <div className="flex gap-4">
        <button
          onClick={() => navigate('/login?role=student')}
          className="bg-blue-500 text-white px-4 py-2 rounded-md"
        >
          Login as Student
        </button>
        <button
          onClick={() => navigate('/login?role=teacher')}
          className="bg-green-500 text-white px-4 py-2 rounded-md"
        >
          Login as Teacher
        </button>
      </div>
      <p className="mt-4">
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

export default LandingPage;
