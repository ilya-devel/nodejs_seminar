const express = require("express");
const fs = require("fs");
const path = require("path");
const app = express();

const fileCount = path.join(__dirname, "counter.json");

if (!fs.existsSync(fileCount)) {
    let data = {
        "home": 0,
        "about": 0
    }
    fs.writeFile(fileCount, JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        }
        console.log("init counter.json");
    })
}

const port = 3000;


function getCountByKey(key) {
    try {
        let value = JSON.parse(fs.readFileSync(fileCount));
        if (value) return value[key];
        return 0;
    } catch (err) {
        console.error(err);
        return 0;
    }
}

function saveCountByKey(key, value) {
    let data = {};
    try {
        data = fs.readFileSync(fileCount, 'utf-8');
        data = JSON.parse(data);
    } catch (err) {
        console.error(err);
    }
    data[key] = value;
    try {
        fs.writeFileSync(fileCount, JSON.stringify(data));
    } catch (err) {
        console.error(err);
    }

}

app.get("/", (req, res) => {
    let count = getCountByKey("home") + 1;
    res.send(`
    <h1>Добро пожаловать на мой сайт</h1>
    <p>Количество посещений данной страницы: ${count}</p>
    <a href="/about">Обо мне</a>
    `);
    saveCountByKey("home", count);
});

app.get("/about", (req, res) => {
    let count = getCountByKey("about") + 1;
    res.send(`
    <h1>Обо мне</h1>
    <p>Количество посещений данной страницы: ${count}</p>
    <a href="/">На главную</a>
    `);
    saveCountByKey("about", count);
});


app.listen(port, () => {
    console.log(`Сервер доступен по ссылке: http://localhost:${port}`);
});
