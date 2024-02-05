const calc = require("./calculateResultSum")
require("colors");
const colors = require("colors/safe")

const total = calc.calculateResultSum([12.1, 32.2, 43.1], 0.9);

console.log('Общая стоимость покупок: '.green + `${total}`.red + ' рублей'.green);

const resultText = `Общая стоимость покупок: ${total} рублей`

console.log(total > 50 ? colors.red(resultText): colors.green(resultText));