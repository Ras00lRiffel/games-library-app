import express from 'express';
import mysql from 'mysql';

const app = express();
const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'root',
    database: 'games_lib'
});

app.use(express.json());

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