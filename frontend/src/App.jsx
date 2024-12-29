import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import LandingPage from './pages/LandingPage';
import Home from './pages/Home';
import TeacherDashboard from './pages/TeacherDashboard';
import Signup from './pages/Signup';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';
import { TeacherProvider } from './context/TeacherContext'; // Import the TeacherProvider
import './App.css';

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        
        {/* Protected routes for student and teacher */}
        <Route
          path="/student/home"
          element={
            <ProtectedRoute>
              <Home />
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/teacher/dashboard"
          element={
            <ProtectedRoute>
              <TeacherProvider> {/* Wrap TeacherDashboard with TeacherProvider */}
                <TeacherDashboard />
              </TeacherProvider>
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;
