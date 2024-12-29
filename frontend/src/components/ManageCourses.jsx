// src/components/Teacher/ManageCourses.jsx
import React from "react";

const ManageCourses = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg mb-6">
      <h2 className="text-2xl font-bold mb-4">Manage Courses</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4 hover:bg-blue-600 transition-colors">
        Add Course
      </button>
      <ul>
        <li className="flex justify-between p-2 border-b">
          <span>Course 1</span>
          <div>
            <button className="text-blue-500 mr-2">Edit</button>
            <button className="text-red-500">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ManageCourses;
