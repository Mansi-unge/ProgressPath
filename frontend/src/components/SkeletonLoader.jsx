import React from 'react';

const SkeletonLoader = () => {
  return (
    <div className="animate-pulse space-y-4">
      <div className="bg-gray-200 h-6 rounded w-1/3"></div>
      <div className="bg-gray-200 h-10 rounded"></div>
      <div className="bg-gray-200 h-10 rounded w-2/3"></div>
    </div>
  );
};

export default SkeletonLoader;
