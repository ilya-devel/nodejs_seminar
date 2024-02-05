function factorial(n) {
    if (n <= 1) return 1;
    return n * factorial(n - 1);
}

function fibonacci(n, current=2, last=1, prelast=0) {
    if (n == 1) return prelast;
    if (n == current) return last;
    current += 1;
    return fibonacci(n, current, last + prelast, last);
}

module.exports = {factorial, fibonacci}