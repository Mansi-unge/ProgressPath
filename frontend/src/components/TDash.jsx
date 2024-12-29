// src/components/Teacher/TDash.jsx
import React from "react";

const TDash = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Teacher Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="p-4 bg-blue-100 rounded-md text-center">
          <span className="font-semibold">Total Courses:</span> 10
        </div>
        <div className="p-4 bg-green-100 rounded-md text-center">
          <span className="font-semibold">Total Assignments:</span> 20
        </div>
        <div className="p-4 bg-yellow-100 rounded-md text-center">
          <span className="font-semibold">Active Students:</span> 150
        </div>
      </div>
    </div>
  );
};

export default TDash;
