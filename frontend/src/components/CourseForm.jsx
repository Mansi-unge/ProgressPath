// src/components/Teacher/CourseForm.jsx
import React from 'react';

const CourseForm = () => {
  return (
    <form className="p-4 bg-gray-100 rounded-md">
      <label>Course Name:</label>
      <input type="text" className="w-full p-2 border rounded mb-2" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default CourseForm;
