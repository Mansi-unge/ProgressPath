import React, { useState, useEffect } from 'react';
import axios from 'axios';
import AssignmentForm from './AssignmentForm';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const ManageAssignments = () => {
  const [assignments, setAssignments] = useState([]);
  const [showForm, setShowForm] = useState(false);

  const fetchAssignments = async () => {
    try {
      const res = await axios.get('http://localhost:5000/api/assignments');
      setAssignments(res.data);
    } catch (error) {
      toast.error('Failed to fetch assignments.');
      console.error(error);
    }
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/api/assignments/${id}`);
      toast.success('Assignment deleted successfully.');
      fetchAssignments();
    } catch (error) {
      toast.error('Failed to delete assignment.');
      console.error(error);
    }
  };

  useEffect(() => {
    fetchAssignments();
  }, []);

  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Assignments</h2>
      <button
        onClick={() => setShowForm((prev) => !prev)}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        {showForm ? 'Close Form' : 'Add Assignment'}
      </button>
      {showForm && <AssignmentForm fetchAssignments={fetchAssignments} />}
      <ul className="mt-4">
        {assignments.map((assignment) => (
          <li key={assignment._id} className="flex justify-between p-2 border-b">
            <div>
              <span className="font-bold">{assignment.title}</span>
              <p className="text-sm text-gray-500">{assignment.description}</p>
            </div>
            <button
              onClick={() => handleDelete(assignment._id)}
              className="text-red-500 hover:underline"
            >
              Delete
            </button>
          </li>
        ))}
      </ul>
      <ToastContainer />
    </div>
  );
};

export default ManageAssignments;
