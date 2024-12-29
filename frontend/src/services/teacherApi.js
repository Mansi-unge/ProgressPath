const API_BASE_URL = 'http://localhost:5000/api/teacher';

// Fetch all courses
export const fetchCourses = async () => {
  const response = await fetch(`${API_BASE_URL}/courses`);
  return await response.json();
};

// Add a new course
export const addCourse = async (courseData) => {
  const response = await fetch(`${API_BASE_URL}/courses`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(courseData),
  });
  return await response.json();
};

// Fetch all assignments
export const fetchAssignments = async () => {
  const response = await fetch(`${API_BASE_URL}/assignments`);
  return await response.json();
};

// Add a new assignment
export const addAssignment = async (assignmentData) => {
  const response = await fetch(`${API_BASE_URL}/assignments`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(assignmentData),
  });
  return await response.json();
};

// Fetch all quizzes
export const fetchQuizzes = async () => {
  const response = await fetch(`${API_BASE_URL}/quizzes`);
  return await response.json();
};

// Add a new quiz
export const addQuiz = async (quizData) => {
  const response = await fetch(`${API_BASE_URL}/quizzes`, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify(quizData),
  });
  return await response.json();
};
