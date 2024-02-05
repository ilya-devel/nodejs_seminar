const NP = require('number-precision')

function calculateResultSum(purchases, discount) {
    let total = purchases.reduce((acc, purchases) => NP.plus(acc, purchases), 0);
    total = NP.times(total, discount);
    return total;
}

module.exports = {calculateResultSum};