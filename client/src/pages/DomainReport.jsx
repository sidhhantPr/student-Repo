import React, { useState, useEffect } from "react";
import axios from "axios";

const DomainReport = () => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredData, setFilteredData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:3000/api/getall");
        setData(response.data);
        setLoading(false);
      } catch (error) {
        setError(error.message);
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    if (searchTerm) {
      setFilteredData(
        data.filter((item) =>
          item.projectDomain.toLowerCase().includes(searchTerm.toLowerCase())
        )
      );
    } else {
      setFilteredData(data);
    }
  }, [searchTerm, data]);

  const handleSearchChange = (event) => {
    setSearchTerm(event.target.value);
  };

  if (loading) return <div className="text-center py-4">Loading...</div>;
  if (error)
    return <div className="text-center py-4 text-red-500">Error: {error}</div>;

  return (
    <div className="container mx-auto px-4 py-6">
      <h1 className="text-3xl font-bold mb-4 text-center text-gray-800">
        Domain Wise Report
      </h1>
      <div className="mb-6">
        <input
          type="text"
          placeholder="Search by project domain..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="w-64 p-3 border border-gray-300 rounded-lg shadow-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredData.length === 0 ? (
          <p className="text-center text-gray-500">No data available</p>
        ) : (
          filteredData.map((item, index) => (
            <div
              key={index}
              className="p-4 border border-gray-200 rounded-lg shadow-lg bg-white"
            >
              <h2 className="text-xl font-semibold mb-2 text-gray-800">
                {item.projectDomain}
              </h2>
              <p className="text-gray-700">
                <strong>Program Name:</strong> {item.programName}
              </p>
              <p className="text-gray-700">
                <strong>Semester:</strong> {item.semester}
              </p>
              <p className="text-gray-700">
                <strong>Year:</strong> {item.year}
              </p>
              <p className="text-gray-700">
                <strong>Supervisor:</strong> {item.supervisorName}
              </p>
              {/* Add  */}
            </div>
          ))
        )}
      </div>
    </div>
  );
};

export default DomainReport;
