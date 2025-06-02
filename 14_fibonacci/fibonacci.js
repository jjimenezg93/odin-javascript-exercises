const fibonacci = function(x) {
    if (typeof x === "string")
    {
        x = Number(x);
    }
    if (!Number.isInteger(x))
    {
        return -1;
    }
    if (x < 0 )
    {
        return "OOPS";
    }
    if (x === 0)
    {
        return 0;
    }
    if (x <= 2)
    {
        return 1;
    }
    let first = 1;
    let second = 1;
    x -= 2; // Subtract the initial 1s
    let next;
    do {
        next = first + second;
        first = second;
        second = next;
    }
    while (--x > 0);
    return next;
};

// Do not edit below this line
module.exports = fibonacci;
