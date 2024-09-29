const sumAll = function(num1, num2) {    
    let sum = 0;
    
    const high = Math.max(num1, num2);
    const low = Math.min(num1, num2);

    if (high < 0 || low < 0) {
        return "ERROR";
    } else if (isNonNumber(num1) === true || isNonNumber(num2) === true) {
        return "ERROR";
    } else if (isString(num1) === true || isString(num2) === true) {
        return "ERROR";
    } else {
        sum = (high * (high + 1) / 2) - ((low - 1) * low / 2);
    }

    return sum;
};

const isNonNumber = function(n) {
    if (n % 1 !== 0) {
        return true;
    } else {
        return false;
    }
}

const isString = function(n) {
    if (typeof n === 'string') {
        return true;
    } else {
        return false;
    }
}

// Do not edit below this line
module.exports = sumAll;
