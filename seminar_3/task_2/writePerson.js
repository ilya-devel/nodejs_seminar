const fs = require('fs')
const path = require('path')


let person = {
    "name": "Ivan",
    "surname": "Ivanov",
    "age": 30,
    "city": "Moscow"
}

fs.writeFile(path.join(__dirname, "person.json"), JSON.stringify(person), (err) => {
    if (err) {
        console.error(err);
    }
    console.log("Person.json was writed");
})

try {
    fs.writeFileSync(path.join(__dirname, "person2.json"), JSON.stringify(person));
    console.log("Person2.json was writed");
} catch(err) {
    console.error(err)
}