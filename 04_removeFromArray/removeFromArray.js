let array = [];

// Separate args from array
const removeFromArray = function(array, ...args) {

    // Remove "x" from array, where x == args
    return array.filter(x => !args.includes(x))
};

removeFromArray(array);

// Do not edit below this line
module.exports = removeFromArray;
