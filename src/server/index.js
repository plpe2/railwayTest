const express = require("express");
const mysql = require("mysql");
const cors = require("cors");
const path = require("path");

const app = express()
app.use(express.static(path.join(__dirname, "public")));
app.use(cors());
app.use(express.json());

const port = 5000;

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'tasklist'
})

app.get('/users', (req, res) =>{
    const sql = "SELECT * FROM users_tbl"

    db.query(sql, (err, result)=>{
        if (err) return res.json({message : 'Error fetching data'})
        return res.json(result)
    })
})

app.listen(port, () =>{
    console.log('hello')
})