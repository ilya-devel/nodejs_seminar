const express = require("express");
const users = require("./users")

const app = express();
app.use('/user', users);


const port = 3000;


app.listen(port, () => {
    console.log(`Server running: https://localhost:${port}`);
})