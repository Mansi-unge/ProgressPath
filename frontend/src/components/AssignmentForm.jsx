// src/components/Teacher/AssignmentForm.jsx
import React from 'react';

const AssignmentForm = () => {
  return (
    <form className="p-4 bg-gray-100 rounded-md">
      <label>Assignment Title:</label>
      <input type="text" className="w-full p-2 border rounded mb-2" />
      <button className="bg-green-500 text-white px-4 py-2 rounded">Save</button>
    </form>
  );
};

export default AssignmentForm;
