const reverseString = function(input) {
    let userInput = input;
    let reversedInput = userInput.split("").reverse().join("");

    return reversedInput;
};

// Do not edit below this line
module.exports = reverseString;
