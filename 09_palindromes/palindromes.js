const palindromes = function (string) {
    let cleanedStr = string.replace(/[^a-zA-Z0-9]/g, "").toLowerCase();
    let reversedStr = cleanedStr.split("").reverse().join("");

    if (reversedStr === cleanedStr) {
        return true;
    } else {
        return false;
    }
};

// Do not edit below this line
module.exports = palindromes;
