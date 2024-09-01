import mongoose from "mongoose";
const userSchema = new mongoose.Schema({
  programName: { type: String, required: true },
  semester: { type: String, required: true },
  registrationNumbers: { type: [String], required: true },
  studentNames: { type: [String], required: true },
  year: { type: Number, required: true },
  section: { type: String, required: true },
  groupNo: { type: String, required: true },
  supervisorName: { type: String, required: true },
  projectTitle: { type: String, required: true },
  projectDomain: { type: String, required: true },
  pdfFile: { type: String },
  editableReportFile: { type: String },
  editablePptFile: { type: String },
  codeFiles: { type: String },
  submissionDate: { type: Date, required: true },
});

const User = mongoose.model("User", userSchema);
export default User;
