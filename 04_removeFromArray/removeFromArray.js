const removeFromArray = function() {
    
    // arguments[0] is going to be always be an array. 
    var inputArray = arguments[0];
    var findIndex;

    for(var i = 1; i < arguments.length;i++)
    {
        findIndex = inputArray.indexOf(arguments[i]);
        if(findIndex !== -1 )
            inputArray.splice(findIndex,1);
        else
            continue;
    }
    
   return inputArray;
};

// Do not edit below this line
module.exports = removeFromArray;
