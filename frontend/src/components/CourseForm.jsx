// src/components/Teacher/CourseForm.jsx
import React, { useState, useEffect } from 'react';

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-300 rounded w-full"></div>
    <div className="h-12 bg-gray-300 rounded w-full"></div>
    <div className="h-10 bg-gray-300 rounded w-full"></div>
  </div>
);

const CourseForm = () => {
  const [courseName, setCourseName] = useState('');
  const [loading, setLoading] = useState(false);
  const [isFormReady, setIsFormReady] = useState(false);

  useEffect(() => {
    // Simulate lazy loading of the form
    setTimeout(() => setIsFormReady(true), 500); // Mock a delay
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate form submission
    setTimeout(() => {
      setLoading(false);
      setCourseName('');
    }, 1500);
  };

  if (!isFormReady) {
    return <SkeletonLoader />;
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6 transition-all duration-300">
      <div className="mb-4">
        <label htmlFor="course-name" className="block text-gray-800 font-semibold mb-2">Course Name:</label>
        <input
          id="course-name"
          type="text"
          value={courseName}
          onChange={(e) => setCourseName(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
          placeholder="Enter course name"
        />
      </div>

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-md text-white font-semibold transition-all ${loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400'}`}
      >
        {loading ? 'Saving...' : 'Save Course'}
      </button>
    </form>
  );
};

export default React.memo(CourseForm); // Optimize with React.memo
