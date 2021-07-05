import express from "express";

const app = express();

app.get("/", (req, res) => {
    res.send("<h1>Home page");
});

app.listen(8001, () => {
    console.log("Server started on port 8001");
});

// ORIGINAL CODE

// const express = require('express');
// const port = process.env.PORT || 8080;
// const app = express();

// app.use(express.static(__dirname + '/dist/'));
// app.get(/.*/, function (req, res) {
//   res.sendFile(__dirname + '/dist/index.html');
// })
// app.listen(port);

// console.log("server started");
