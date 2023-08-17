const sumAll = function(a, b) {


    if ((Math.sign(a) != 1 || typeof(a) === 'string') || (Math.sign(b) != 1 || typeof(b) === 'string')) {
        return 'ERROR';
    }

    if (a > b) {
        var lowNum = b;
        var highNum = a;
    } else {
        lowNum = a;
        highNum = b;
    }


    let sum = 0;
    let count = lowNum;
    do {
        sum = count + sum;
        ++count;
    } while (count <= highNum);
    return sum;



};


// Do not edit below this line
module.exports = sumAll;
