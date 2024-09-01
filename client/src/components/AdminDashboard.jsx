import React from "react";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="container mx-auto px-4 py-6">
        <h1 className="text-4xl font-bold mb-8 text-center text-gray-800">
          Admin Dashboard
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          <Link to="/title-report">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Title Wise Report
              </h2>
              <p className="text-gray-600">
                View reports based on project titles.
              </p>
            </div>
          </Link>

          <Link to="/student-report">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Student Wise Report
              </h2>
              <p className="text-gray-600">
                View reports based on student names.
              </p>
            </div>
          </Link>

          <Link to="/year-report">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Year Wise Report
              </h2>
              <p className="text-gray-600">
                View reports based on academic years.
              </p>
            </div>
          </Link>

          <Link to="/domain-report">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Domain Wise Report
              </h2>
              <p className="text-gray-600">
                View reports based on project domains.
              </p>
            </div>
          </Link>

          <Link to="/supervisor-report">
            <div className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300">
              <h2 className="text-2xl font-semibold mb-4 text-gray-800">
                Supervisor Wise Report
              </h2>
              <p className="text-gray-600">
                View reports based on project supervisors.
              </p>
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
