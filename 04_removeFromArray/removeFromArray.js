const removeFromArray = function(array, ...args) {
    let filtered = array.filter(x => !args.includes(x));

    return filtered;
};

removeFromArray([1,2,3,4], 3);

// Do not edit below this line
module.exports = removeFromArray;
