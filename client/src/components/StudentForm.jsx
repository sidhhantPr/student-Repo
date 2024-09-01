import React, { useState } from "react";
import axios from "axios";
function ProjectSubmissionForm() {
  const [program, setProgram] = useState("BCA");
  const [semester, setSemester] = useState("");
  const [registrationNumber, setRegistrationNumber] = useState("");
  const [studentName, setStudentName] = useState("");
  const [year, setYear] = useState("2024");
  const [section, setSection] = useState("");
  const [groupNo, setGroupNo] = useState("");
  const [supervisor, setSupervisor] = useState("");
  const [projectTitle, setProjectTitle] = useState("");
  const [projectDomain, setProjectDomain] = useState("");
  const [pdfFile, setPdfFile] = useState(null);
  const [editableFile, setEditableFile] = useState(null);
  const [pptFile, setPptFile] = useState(null);
  const [applicationFiles, setApplicationFiles] = useState([]);

  const handleFileChange = (e, setter) => {
    setter(e.target.files);

    const formData = new FormData();
    formData.append("programName", program);
    formData.append("semester", semester);
    formData.append("registrationNumbers", registrationNumber);
    formData.append("studentNames", studentName);
    formData.append("year", year);
    formData.append("section", section);
    formData.append("groupNo", groupNo);
    formData.append("supervisorName", supervisor);
    formData.append("projectTitle", projectTitle);
    formData.append("projectDomain", projectDomain);
    formData.append("pdfFile", pdfFile[0]);
    formData.append("editableReportFile", editableFile[0]);
    formData.append("editablePptFile", pptFile[0]);
    formData.append("codeFiles", applicationFiles[0]);
    formData.append("submissionDate", new Date());

    axios
      .post("http://localhost:3000/api/store", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      })
      .then((response) => {
        console.log("Data stored successfully:", response.data);
      })
      .catch((error) => {
        console.error("There was an error storing the data:", error.message);
      });
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br p-10">
      <div className="max-w-4xl w-full bg-white bg-opacity-90 shadow-2xl rounded-xl p-10 backdrop-blur-lg transition-all duration-500 transform hover:scale-105">
        <h2 className="text-4xl font-bold mb-10 text-center text-gray-900 drop-shadow-md">
          Project Submission Form
        </h2>

        <form className="space-y-6">
          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Name of the Program:
            </label>
            <select
              value={program}
              onChange={(e) => setProgram(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            >
              <option value="BCA">BCA</option>
              <option value="MCA">MCA</option>
            </select>
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Semester:
            </label>
            <input
              type="text"
              value={semester}
              onChange={(e) => setSemester(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Registration Number(s):
            </label>
            <input
              type="text"
              value={registrationNumber}
              onChange={(e) => setRegistrationNumber(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Name of the Student(s):
            </label>
            <input
              type="text"
              value={studentName}
              onChange={(e) => setStudentName(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Year:
            </label>
            <input
              type="text"
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Section:
            </label>
            <input
              type="text"
              value={section}
              onChange={(e) => setSection(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Group No.:
            </label>
            <input
              type="text"
              value={groupNo}
              onChange={(e) => setGroupNo(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Name of the Supervisor/Guide:
            </label>
            <input
              type="text"
              value={supervisor}
              onChange={(e) => setSupervisor(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Title of the Project:
            </label>
            <input
              type="text"
              value={projectTitle}
              onChange={(e) => setProjectTitle(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Domain of the Project:
            </label>
            <input
              type="text"
              value={projectDomain}
              onChange={(e) => setProjectDomain(e.target.value)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Report of the Project (PDF):
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setPdfFile)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Report of the Project (Editable File):
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setEditableFile)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              PPT of the Project (Editable File):
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setPptFile)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
            />
          </div>

          <div className="relative">
            <label className="block text-sm font-medium text-gray-700">
              Application/Code (Upload the Code and Related S/W):
            </label>
            <input
              type="file"
              onChange={(e) => handleFileChange(e, setApplicationFiles)}
              className="mt-2 block w-full p-3 border border-gray-300 rounded-lg shadow-sm bg-white focus:ring-2 focus:ring-indigo-500 focus:outline-none transition duration-300 ease-in-out"
              multiple
            />
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="font-bold mt-8 bg-indigo-600 text-white py-3 px-6 rounded-full hover:bg-indigo-700 hover:shadow-xl transition duration-300 ease-in-out transform hover:scale-105"
            >
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default ProjectSubmissionForm;
