import express from 'express';
import {
  getAssignments,
  createAssignment,
  deleteAssignment,
} from '../controllers/assignmentController.js';

const router = express.Router();

// Get all assignments
router.get('/assignments', getAssignments);

// Create a new assignment
router.post('/assignments', createAssignment);

// Delete an assignment
router.delete('/assignments/:id', deleteAssignment);

export default router;
