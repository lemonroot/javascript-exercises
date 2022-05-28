let array = [];
let spliced;

const removeFromArray = function(array, ...args) {
    return array.filter(x => !args.includes(x))
};

removeFromArray(array);

// Do not edit below this line
module.exports = removeFromArray;
