const sumAll = function(num1 , num2) {
    var addNum = 0; 

    if(num1 > num2)
    {
        var empyNum = num1; 
        num1 = num2; 
        num2 = empyNum; 
        
    }
    else if(((num1< 0) || (num2 < 0) === true )){
        return 'ERROR';
    }
    else if((typeof num1 &&  typeof num2) != "number"){
        return 'ERROR';
    }
    
    for(var i = num1; i <= num2; i++){
        addNum += i;
    }
    
   return addNum;

};

// Do not edit below this line
module.exports = sumAll;
