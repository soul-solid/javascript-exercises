const findTheOldest = function(array) {
    let currentYear = new Date().getFullYear();

    array.sort((a, b) => {
        let presentA = a.yearOfDeath || currentYear;
        let presentB = b.yearOfDeath || currentYear;
        return (presentB - b.yearOfBirth) - (presentA - a.yearOfBirth);
    });    
    return array[0];
};

// Do not edit below this line
module.exports = findTheOldest;