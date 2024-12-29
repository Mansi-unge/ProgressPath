// src/components/Teacher/AssignmentForm.jsx
import React, { useState, useEffect } from 'react';

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-300 rounded w-full"></div>
    <div className="h-12 bg-gray-300 rounded w-full"></div>
    <div className="h-10 bg-gray-300 rounded w-full"></div>
  </div>
);

const AssignmentForm = () => {
  const [title, setTitle] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [isFormReady, setIsFormReady] = useState(false);

  useEffect(() => {
    // Simulate lazy loading of the form
    setTimeout(() => setIsFormReady(true), 500);
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title) {
      setError('Assignment title is required.');
      return;
    }

    setLoading(true);
    setError('');
    setSuccess('');

    // Simulate form submission (replace with actual API call)
    setTimeout(() => {
      setLoading(false);
      setSuccess('Assignment saved successfully!');
      setTitle(''); // Reset form after successful submission
    }, 1500);
  };

  if (!isFormReady) {
    return <SkeletonLoader />;
  }

  return (
    <form onSubmit={handleSubmit} className="p-6 bg-white rounded-lg shadow-lg max-w-lg mx-auto space-y-6 transition-all duration-300">
      <div className="mb-4">
        <label htmlFor="assignment-title" className="block text-gray-800 font-semibold mb-2">Assignment Title:</label>
        <input
          id="assignment-title"
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500 transition-all"
          placeholder="Enter assignment title"
        />
      </div>

      {error && <p className="text-red-500 text-sm">{error}</p>}
      {success && <p className="text-green-500 text-sm">{success}</p>}

      <button
        type="submit"
        disabled={loading}
        className={`w-full py-3 rounded-md text-white font-semibold transition-all ${loading ? 'bg-gray-400' : 'bg-green-500 hover:bg-green-600 focus:ring-2 focus:ring-green-400'}`}
      >
        {loading ? 'Saving...' : 'Save Assignment'}
      </button>
    </form>
  );
};

export default React.memo(AssignmentForm); // Use React.memo for optimization
