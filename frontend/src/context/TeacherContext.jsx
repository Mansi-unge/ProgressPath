import React, { createContext, useState, useContext , useEffect } from 'react';

const TeacherContext = createContext();

const TeacherProvider = ({ children }) => {
  const [loading, setLoading] = useState(true);
  const [courses, setCourses] = useState([]);
  const [assignments, setAssignments] = useState([]);
  const [quizzes, setQuizzes] = useState([]);

  // Example logic to update loading and data
  useEffect(() => {
    // Simulate data fetching
    setTimeout(() => {
      setCourses([/* some courses */]);
      setAssignments([/* some assignments */]);
      setQuizzes([/* some quizzes */]);
      setLoading(false);
    }, 1000);
  }, []);

  return (
    <TeacherContext.Provider value={{ loading, courses, assignments, quizzes }}>
      {children}
    </TeacherContext.Provider>
  );
};

export { TeacherContext, TeacherProvider };
