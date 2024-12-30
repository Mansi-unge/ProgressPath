import React, { useState } from 'react';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const AssignmentForm = ({ fetchAssignments }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!title.trim()) {
      toast.error('Title is required.');
      return;
    }
    try {
      await axios.post('http://localhost:5000/api/assignments', { title, description });
      toast.success('Assignment created successfully!');
      setTitle('');
      setDescription('');
      fetchAssignments(); // Refresh the list of assignments
    } catch (error) {
      toast.error('Failed to create assignment. Please try again.');
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 bg-gray-100 rounded-md">
      <label className="block mb-2 font-bold">Assignment Title:</label>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter assignment title"
        className="w-full p-2 border rounded mb-4"
      />
      <label className="block mb-2 font-bold">Description:</label>
      <textarea
        value={description}
        onChange={(e) => setDescription(e.target.value)}
        placeholder="Enter assignment description"
        className="w-full p-2 border rounded mb-4"
      />
      <button type="submit" className="bg-green-500 text-white px-4 py-2 rounded">
        Save
      </button>
      <ToastContainer />
    </form>
  );
};

export default AssignmentForm;
