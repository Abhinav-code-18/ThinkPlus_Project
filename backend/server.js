import express from "express";
import fs from "fs";
import cors from "cors";
import path from "path";
import { fileURLToPath } from "url";

const app = express();
app.use(cors());
app.use(express.json());

// fix path issue
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

// GET courses
app.get("/api/courses", (req, res) => {
  const filePath = path.join(__dirname, "data", "courses.json");

  fs.readFile(filePath, "utf-8", (err, data) => {
    if (err) {
      console.error("Error reading courses:", err);
      return res.status(500).json({ message: "Error reading courses data" });
    }

    try {
      const courses = JSON.parse(data);
      res.json(courses);
    } catch (parseError) {
      console.error("Error parsing JSON:", parseError);
      res.status(500).json({ message: "Invalid JSON format" });
    }
  });
});

const PORT = 5000;
app.listen(PORT, () => console.log(`✅ Backend running on http://localhost:${PORT}`));
