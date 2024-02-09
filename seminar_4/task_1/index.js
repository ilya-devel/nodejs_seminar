const express = require("express");
const fs = require("fs");
const path = require("path");
const Joi = require("joi");

const app = express();
app.use(express.json());
const filePath = path.join(__dirname, "users.json")

const port = 3000;

const schema = Joi.object({
    name: Joi.string().min(3).required(),
    lastname: Joi.string().min(3).required(),
    age: Joi.number().min(0).required(),
    city: Joi.string().min(3).required(),
});

app.get('/user', (req, res) => {
    res.send(fs.readFileSync(filePath));
});

app.get('/user/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath));
    const user = users.find((user) => user.id === +req.params.id);
    if (user) {
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null })
    }
});

app.post('/user', (req, res) => {
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(404);
        res.send({ "error": result.error.details });
    } else {
        const newUser = req.body;
        console.log(newUser);
        const users = JSON.parse(fs.readFileSync(filePath));
        let id = users.length + 1;
        users.push({
            id,
            ...newUser
        });
        fs.writeFileSync(filePath, JSON.stringify(users));
        res.send({ "id": id })
    }
});

app.put('/user/:id', (req, res) => {
    const result = schema.validate(req.body);
    if (result.error) {
        res.status(404);
        res.send({ "error": result.error.details });
    } else {
        const users = JSON.parse(fs.readFileSync(filePath));
        const user = users.find((user) => user.id === +req.params.id);
        if (user) {
            user.name = req.body.name;
            user.lastname = req.body.lastname;
            user.age = req.body.age;
            user.city = req.body.city;
            fs.writeFileSync(filePath, JSON.stringify(users));
            res.send({ user });
        } else {
            res.status(404);
            res.send({ user: null })
        }
    }
});

app.delete('/user/:id', (req, res) => {
    const users = JSON.parse(fs.readFileSync(filePath));
    const user = users.find((user) => user.id === +req.params.id);
    if (user) {
        const indexUser = users.indexOf(user);
        users.splice(indexUser, 1);
        fs.writeFileSync(filePath, JSON.stringify(users));
        res.send({ user });
    } else {
        res.status(404);
        res.send({ user: null })
    }
});


app.listen(port, () => {
    console.log(`Link: https://localhost:${port}`);
});