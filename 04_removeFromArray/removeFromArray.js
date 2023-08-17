



const removeFromArray = function(array, ...args) {

    let argsCount;
    
    for (argsCount = 0; argsCount < args.length ; ++argsCount) {
        argsTest = args[argsCount];
        console.log(argsTest);
    
        for (const element of array){
            if (element === argsTest) {
                let arrayIndex = array.indexOf(element);
                delete array[arrayIndex]
            }
        }
    
        array = array.filter(() => true);
        
        }
    
            return array;
    
    };

// Do not edit below this line
module.exports = removeFromArray;
