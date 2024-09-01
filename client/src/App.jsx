import React from "react";
import Login from "./components/Login";
import { createBrowserRouter } from "react-router-dom";
import Admin from "./components/Admin";
import StudentForm from "./components/StudentForm";
import StudentReport from "./pages/StudentReport";
import YearReport from "./pages/YearReport";
import DomainReport from "./pages/DomainReport";
import TitleReport from "./pages/TittleReport";
import SupervisorReport from "./pages/SupervisiorReport";
import AdminDashboard from "./components/AdminDashboard";

const App = () => {
  return (
    <div>
      <Login />
    </div>
  );
};
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "/admin",
    element: <Admin />,
  },
  {
    path: "/studentform",
    element: <StudentForm />,
  },
  {
    path: "/student-report",
    element: <StudentReport />,
  },
  {
    path: "/year-report",
    element: <YearReport />,
  },
  {
    path: "/domain-report",
    element: <DomainReport />,
  },
  {
    path: "/title-report",
    element: <TitleReport />,
  },
  {
    path: "/supervisor-report",
    element: <SupervisorReport />,
  },
  {
    path: "/dashboard",
    element: <AdminDashboard />,
  },
]);
export default router;
