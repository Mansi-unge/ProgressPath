// src/components/Teacher/ManageQuizzes.jsx
import React from 'react';
import QuizForm from './QuizForm';

const ManageQuizzes = () => {
  return (
    <div className="p-6 bg-white shadow-md rounded-lg">
      <h2 className="text-2xl font-bold mb-4">Manage Quizzes</h2>
      <button className="bg-blue-500 text-white px-4 py-2 rounded mb-4">Add Quiz</button>
      <ul>
        <li className="flex justify-between p-2 border-b">
          <span>Quiz 1</span>
          <div>
            <button className="text-blue-500 mr-2">Edit</button>
            <button className="text-red-500">Delete</button>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ManageQuizzes;
