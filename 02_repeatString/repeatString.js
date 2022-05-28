let baseNum = Math.random(0, 1);
let num = Math.floor(baseNum * 1000);

repeatString('hey', num);

function repeatString(string, num){
    let finString = string;
    if(num > 0){
        for (let i = 1; i < num; i++){
            finString+=string;
        }
    } else if (num == 0){
      finString = '';  
    } else {
        finString = "ERROR";
    }
    
    return finString;
}

// Do not edit below this line
module.exports = repeatString;
