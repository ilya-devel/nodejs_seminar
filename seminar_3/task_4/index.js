const express = require("express");
const path = require("path");

const app = express();

const port = 3000;

app.use(express.static("static"));


app.get("/", (req, res) => {
    // res.send("<h1>Welcome to my site!</h1><a href=\"/about\">About</a>");
    res.sendFile("static/index.html");
});

app.get("/about", (req, res) => {
    // res.send("<h1>About me</h1><a href=\"/\">Home</a>");
    res.sendFile("static/about.html", { root: __dirname });
});


app.listen(port, () => {
    console.log(`Link: localhost:${port}`);
});