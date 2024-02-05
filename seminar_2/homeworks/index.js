const mathFunc = require("math_function_by_ilya");

const letters = {
    "alph": "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz",
    "digit": "0123456789",
}

function getRandomInt(max, min = 0) {
    return Math.floor(Math.random() * (max - min) + min);    
}

const getRandomProperty = (object) => {
    const keys = Object.keys(object);
    if (keys.length > 0) {
        const index = Math.floor(keys.length * Math.random());
        const key = keys[index];
        const value = object[key];
        return {index, key, value};
    }
    return null;
}


function getRandomPassword(len) {
    let password = "";
    for (let index = 0; index < len; index++) {
        // const value = getRandomProperty(letters).value;
        const value = letters.alph + letters.digit;
        password += value[getRandomInt(value.length)];
    }
    return password;
}

console.log(getRandomPassword(20));
console.log(mathFunc.algorithms.factorial(-10));
console.log(mathFunc.algorithms.fibonacci(1));
console.log(mathFunc.algorithms.fibonacci(2));
console.log(mathFunc.algorithms.fibonacci(3));
console.log(mathFunc.algorithms.fibonacci(4));
console.log(mathFunc.algorithms.fibonacci(5));
console.log(mathFunc.algorithms.fibonacci(6));
console.log(mathFunc.algorithms.fibonacci(7));
console.log(mathFunc.algorithms.fibonacci(8));
console.log(mathFunc.algorithms.fibonacci(9));