const string = 'hello there';
reverseString(string);

function reverseString(string){
    let stringArray = [];
    let reversedString = string[string.length - 1];
    for(let i = 0; i < (string.length); i++){
        stringArray[i] = string[i];
    }

    for(let i = (string.length - 2); i >= 0; i--){
        reversedString += stringArray[i];
    }
    console.log(stringArray);
    console.log(reversedString);
    return reversedString;
}

// Do not edit below this line
module.exports = reverseString;
