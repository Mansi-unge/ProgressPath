import React from 'react';
import { Routes, Route } from 'react-router-dom';
import TeacherDashboard from '../pages/TeacherDashboard';

const TeacherRoutes = () => (
  <Routes>
    <Route path="/teacher/dashboard" element={<TeacherDashboard />} />
  </Routes>
);

export default TeacherRoutes;
