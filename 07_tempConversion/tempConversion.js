const ftoc = function(num) {

  var result = 0; 
  
  result = (num - 32)*(5/9);
  return Number((result).toFixed(1));

};

const ctof = function(num) {
  
  var result = 0; 
  
  result = (num * (9/5)+ 32);
  return (Number((result).toFixed(1)));

};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
