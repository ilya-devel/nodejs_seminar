const path = require('path');
const fs = require('fs');
const { error } = require('console');


try {
    let file = fs.readFileSync(path.join(__dirname, 'person.json'), 'utf-8');
    let data = JSON.parse(file);
    data.age = data.age - 10;
    data.city = "Ekaterinburg";
    fs.writeFile(path.join(__dirname, 'person.json'), JSON.stringify(data), (err) => {
        if (err) {
            console.error(err);
        }
        console.log("file update");
    })
} catch (err) {
    console.error(err);
}
