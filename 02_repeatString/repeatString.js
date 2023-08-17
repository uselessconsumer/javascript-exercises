
//return a string that is repeated the number of specified times
//print the string and define it as being printed once
//if the number of times it has been printed = num then stop the loop
//otherwise print it again



// let word = 'hey';
// let num = 3;

const repeatString = function(word, num) {

    let wordNum = 1;
    var string = '';
    
    if (num >= 0) {
        while (wordNum <= num){
            string = string + word;
    
            ++wordNum;
        }
        return string;
    } else {
        string = 'ERROR';
        return string;
    }
};

// Do not edit below this line
module.exports = repeatString;
