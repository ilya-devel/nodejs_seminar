const express = require("express");
const path = require("path");
const fs = require("fs")
const { checkBody, checkParams } = require("./validation/validators")
const { userScheme, idScheme } = require("./validation/scheme")

const dbUsers = path.join(__dirname, "users.json");

const router = express.Router();
router.use(express.json());



router.get("/", (req, res) => {
    try {
        res.json(JSON.parse(fs.readFileSync(dbUsers)));
    } catch (error) {
        res.status(500);
        res.json({
            "error": "db is not found"
        })
    }
})

router.get("/:id", checkParams(idScheme),(req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(dbUsers));
        const user = users.find((user) => user.id === +req.params.id);
        if (user) {
            res.status(200);
            res.json(user);
        } else {
            res.status(404);
            res.json({
                "msg": "user is not found"
            })
        }
    } catch (error) {
        res.status(500);
        res.json({
            "error": error.msg
        });
    }
});

router.post("/", checkBody(userScheme), (req, res) => {
    let newId = -1;
    let users = [];
    try {
        users = JSON.parse(fs.readFileSync(dbUsers));
        newId = users[users.length - 1].id + 1;
    } catch (error) {
        newId = 1;
    }
    users.push({
        "id": newId,
        ...req.body
    });
    fs.writeFileSync(dbUsers, JSON.stringify(users));
    res.json({
        "id": newId,
    })
})

router.put("/:id", checkParams(idScheme), checkBody(userScheme), (req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(dbUsers));
        const user = users.find((user) => user.id === +req.params.id);
        if (user) {
            user.name = req.body.name;
            user.lastname = req.body.lastname;
            user.age = req.body.age;
            user.city = req.body.city;
            fs.writeFileSync(dbUsers, JSON.stringify(users));
            res.status(200);
            res.json(user);
        } else {
            res.status(404);
            res.json({
                "msg": "user is not found"
            })
        }
    } catch (error) {
        res.status(500);
        res.json({
            "error": error.msg
        });
    }
})

router.delete("/:id", checkParams(idScheme),(req, res) => {
    try {
        const users = JSON.parse(fs.readFileSync(dbUsers));
        const user = users.find((user) => user.id === +req.params.id);
        if (user) {
            const indexUser = users.indexOf(user);
            users.splice(indexUser, 1);
            fs.writeFileSync(dbUsers, JSON.stringify(users));
            res.status(200);
            res.json(user);
        } else {
            res.status(404);
            res.json({
                "msg": "user is not found"
            })
        }
    } catch (error) {
        res.status(500);
        res.json({
            "error": error.msg
        });
    }
});


module.exports = router;