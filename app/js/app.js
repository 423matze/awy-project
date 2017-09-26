$(document).ready(function() {
    console.log('testing');
  });

function addNumbers(num1, num2) {
  return num1 + num2;
}

function getGrid(val) {
  var x = 100;
  var sum = addNumbers(x, val);
  return sum;
}
