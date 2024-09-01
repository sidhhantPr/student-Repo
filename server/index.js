import mongoose from "mongoose";
import express from "express";
import User from "./model/user.model.js";
import multer from "multer";
import cors from "cors";
const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage });

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors());
const connectDB = async () => {
  try {
    await mongoose.connect("mongodb://localhost:27017/studentRepo", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log(`${mongoose.connection.host} connected successfully`);
  } catch (error) {
    console.log("DB is not connected: " + error.message);
  }
};

app.post(
  "/api/store",
  upload.fields([
    { name: "pdfFile", maxCount: 1 },
    { name: "editableReportFile", maxCount: 1 },
    { name: "editablePptFile", maxCount: 1 },
    { name: "codeFiles", maxCount: 1 },
  ]),
  async (req, res) => {
    try {
      const {
        programName,
        semester,
        registrationNumbers,
        studentNames,
        year,
        section,
        groupNo,
        supervisorName,
        projectTitle,
        projectDomain,
        submissionDate,
      } = req.body;

      const pdfFile = req.files?.pdfFile ? req.files.pdfFile[0].path : null;
      const editableReportFile = req.files?.editableReportFile
        ? req.files.editableReportFile[0].path
        : null;
      const editablePptFile = req.files?.editablePptFile
        ? req.files.editablePptFile[0].path
        : null;
      const codeFiles = req.files?.codeFiles
        ? req.files.codeFiles[0].path
        : null;

      const newData = new User({
        programName,
        semester,
        registrationNumbers,
        studentNames,
        year,
        section,
        groupNo,
        supervisorName,
        projectTitle,
        projectDomain,
        pdfFile,
        editableReportFile,
        editablePptFile,
        codeFiles,
        submissionDate,
      });

      await newData.save();
      res.status(201).json({ msg: "Created successfully" });
    } catch (error) {
      console.error("Error in Data Creation:", error.message);
      res.status(500).json({ msg: "Failed to create", error: error.message });
    }
  }
);
app.get("/api/getall", async (req, res) => {
  const allData = await User.find({});
  res.status(200).json(allData);
});

app.listen(3000, async () => {
  try {
    await connectDB();
  } catch (error) {
    console.log("failed " + error.message);
  }
});
