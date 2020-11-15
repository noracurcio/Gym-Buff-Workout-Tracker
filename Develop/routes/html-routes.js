const express = require("express");

const app = express();
const path = require("path");



app.get("/", (req, res) => {
    res.sendFile(path.join(__dirname + 'index.html'))
});

app.get("/exercise", (req, res) => {
    res.sendFile(path.join(__dirname + 'public/exercise.html'))
});

app.get("/stats", (req, res) => {
    res.sendFile(path.join(__dirname + '../public/stats.html'))
});

// app.listen(8080);

module.exports = (app)