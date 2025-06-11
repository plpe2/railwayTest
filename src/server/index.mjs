import express from 'express';
import mysql from 'mysql';
import cors from 'cors';
import dotenv from 'dotenv';

dotenv.config(); // Load environment variables

const app = express();
const db = mysql.createConnection({
    host: process.env.DB_HOST,
    user: process.env.DB_USER,
    password: process.env.DB_PASS,
    database: process.env.DB_NAME
});

app.use(cors());
app.use(express.json());

app.get('/users', (req, res) => {
    const sql = "SELECT * FROM users_tbl";
    db.query(sql, (err, result) => {
        if (err) return res.json({ message: 'Error fetching data' });
        return res.json(result);
    });
});

app.listen(process.env.PORT || 3000, () => {
    console.log("Server is running");
});
