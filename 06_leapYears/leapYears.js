const leapYears = function(years) {
    var result; 
    if((years % 4 === 0))
    {
        if((years % 100 === 0) && (years % 400 != 0))
            result = false;
        else
        {
            result = true;
        }

    }
    else
    {
        console.log("using last else statment.");
        result =  false; 
    }

    return result;

};

// Do not edit below this line
module.exports = leapYears;
