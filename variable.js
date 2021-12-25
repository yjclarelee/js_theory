// var
// 1. The scope of var is larger than a block.
{
  var num1 = 1;
}

console.log('var', num1);

// 2. Hoisting
console.log(num2);
var num2;

