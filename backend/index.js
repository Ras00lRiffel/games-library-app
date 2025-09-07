import express from 'express';
import cors from 'cors';
import mysql from 'mysql';
import multer from "multer";
import path from "path";

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'games_lib'
});

app.use(express.json());
app.use(cors());

app.get('/', (req, res) => {
    const sql = 'SELECT * FROM games';
    db.query(sql, (err, results) => {
        if (err) {
            return res.json(err);
        }
        return res.json(results);
    });
});

app.post('/add', (req, res) => {
    const sql = 'INSERT INTO games (title, hours, description, image_url) VALUES (?)';
    const values = [
        req.body.title,
        req.body.hours,
        req.body.description,
        req.body.image_url
    ];
    db.query(sql, [values], (err, result) => {
        if (err) {
            return res.json(err);
        }
        return res.json({ message: 'Game added!' });
    });
});

app.listen(8800, () => {
  console.log('Server is running on port 8800!');
});

// Uploading an image to my directory
// Storing the image path in the database
// Displaying the image in the frontend using the stored path

// Configure storage for uploaded files
const storage = multer.diskStorage({
  destination: "./uploads/",
  filename: (req, file, cb) => {
    cb(null, Date.now() + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

app.post("/upload", upload.single("file"), (req, res) => {
  if (!req.file) return res.status(400).send("No file uploaded.");

  const fileUrl = `/uploads/${req.file.filename}`;
  // TODO: Save fileUrl into your database here

  res.json({ url: fileUrl });
});

app.use("/uploads", express.static("uploads"));