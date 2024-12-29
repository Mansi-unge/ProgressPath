// src/components/Teacher/StudentProgress.jsx
import React, { Suspense, lazy, useState, useEffect } from 'react';

// Lazy load the actual content
const StudentAnalytics = lazy(() => import('./StudentAnalytics'));

// Skeleton loader component
const SkeletonLoader = () => (
  <div className="animate-pulse space-y-4">
    <div className="h-8 bg-gray-300 rounded w-full"></div>
    <div className="h-6 bg-gray-300 rounded w-3/4"></div>
    <div className="h-6 bg-gray-300 rounded w-1/2"></div>
  </div>
);

const StudentProgress = () => {
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Simulate lazy loading
    setTimeout(() => setIsLoading(false), 1000);
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Student Progress</h2>
      {isLoading ? (
        <SkeletonLoader />
      ) : (
        <Suspense fallback={<SkeletonLoader />}>
          <StudentAnalytics />
        </Suspense>
      )}
    </div>
  );
};

export default StudentProgress;
