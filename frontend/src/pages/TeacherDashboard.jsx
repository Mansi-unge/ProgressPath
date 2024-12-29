// src/pages/TeacherDashboard.jsx
import React, { Suspense, lazy } from "react";
import SkeletonLoader from "../components/SkeletonLoader";

// Lazy load components
const TDash = lazy(() => import("../components/TDash"));
const ManageCourses = lazy(() => import("../components/ManageCourses"));
const ManageAssignments = lazy(() => import("../components//ManageAssignments"));
const ManageQuizzes = lazy(() => import("../components/ManageQuizzes"));
const StudentProgress = lazy(() => import("../components/StudentProgress"));

const TeacherDashboard = () => {
  return (
    <div className="p-6 bg-gray-50 min-h-screen">
      <h1 className="text-3xl font-bold mb-6">Teacher Admin Panel</h1>
      <Suspense fallback={<SkeletonLoader />}>
        <TDash />
      </Suspense>

      <Suspense fallback={<SkeletonLoader />}>
        <ManageCourses />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <ManageAssignments />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <ManageQuizzes />
      </Suspense>
      <Suspense fallback={<SkeletonLoader />}>
        <StudentProgress />
      </Suspense>
    </div>
  );
};

export default TeacherDashboard;
