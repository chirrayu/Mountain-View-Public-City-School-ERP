import { Navigate, Route, Routes } from "react-router-dom";
import ProtectedRoute from "./components/common/ProtectedRoute.jsx";
import AppLayout from "./layouts/AppLayout.jsx";
import LoginPage from "./pages/auth/LoginPage.jsx";
import ForgotPasswordPage from "./pages/auth/ForgotPasswordPage.jsx";
import AdminDashboard from "./pages/dashboard/AdminDashboard.jsx";
import TeacherDashboard from "./pages/dashboard/TeacherDashboard.jsx";
import StudentDashboard from "./pages/dashboard/StudentDashboard.jsx";
import ParentDashboard from "./pages/dashboard/ParentDashboard.jsx";
import PlaceholderPage from "./pages/placeholders/PlaceholderPage.jsx";

const placeholderRoutes = [
  ["students", "Students", "Manage student admissions, class allocation, sections, and roll numbers."],
  ["attendance", "Attendance", "Daily attendance workflows for Present, Absent, and Half Day status."],
  ["assignments", "Assignments", "Create, distribute, collect, and review class assignments."],
  ["exams", "Exams", "Plan exams, publish schedules, and prepare report card records."],
  ["fees", "Fees", "Track fee receipts, concessions, dues, and payment communication."],
  ["library", "Library", "Maintain library catalogue, issue history, and student returns."],
  ["settings", "Settings", "Configure academic session, roles, notifications, and school preferences."],
];

function App() {
  return (
    <Routes>
      <Route path="/" element={<Navigate to="/login" replace />} />
      <Route path="/login" element={<LoginPage />} />
      <Route path="/forgot-password" element={<ForgotPasswordPage />} />

      <Route element={<ProtectedRoute />}>
        <Route element={<AppLayout />}>
          <Route path="/dashboard/admin" element={<AdminDashboard />} />
          <Route path="/dashboard/teacher" element={<TeacherDashboard />} />
          <Route path="/dashboard/student" element={<StudentDashboard />} />
          <Route path="/dashboard/parent" element={<ParentDashboard />} />
          {placeholderRoutes.map(([path, title, description]) => (
            <Route
              key={path}
              path={`/${path}`}
              element={<PlaceholderPage title={title} description={description} />}
            />
          ))}
        </Route>
      </Route>

      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default App;
