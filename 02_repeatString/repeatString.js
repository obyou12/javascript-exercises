const repeatString = function(words, num) {

    var addWords = '';

    if(num === 0)
        return 'ERROR';
    
    for(var i =0 ; i< num; i++){
        addWords += words; 
    }
    return addWords;
};

// Do not edit below this line
module.exports = repeatString;
