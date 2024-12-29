import express from 'express';
import Assignment from '../models/Assignment.js'; // Make sure the model is imported correctly
const router = express.Router();

// Create a new assignment
router.post('/', async (req, res) => {
  const { title, dueDate, courseId, teacherId } = req.body;
  try {
    const assignment = new Assignment({
      title,
      dueDate,
      course: courseId,
      teacher: teacherId,
    });
    await assignment.save();
    res.status(201).json(assignment);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

// Get all assignments for a course
router.get('/', async (req, res) => {
  try {
    const assignments = await Assignment.find()
      .populate('course')
      .populate('teacher', 'name');
    res.status(200).json(assignments);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

export default router;  // Ensure it's exported as default
