var firstInput = document.getElementById("firstInput");
var secondInput = document.getElementById("secondInput");

var output = document.getElementById("output");

function addition() {
  var result = calculateResult(firstInput.value, secondInput.value, "sum");
  output.innerHTML = "Sum = " + result
}

function substraction() {
  var result = calculateResult(firstInput.value, secondInput.value, "subtract");
  output.innerHTML = "Difference = " + result
}

function multiplication() {
  var result = calculateResult(firstInput.value, secondInput.value, "multiply");
  output.innerHTML = "Multiplication Result = " + result
}

function division() {
  var result = calculateResult(firstInput.value, secondInput.value, "divide");
  output.innerHTML = "Division result = " + result
}

function calculateResult(firstInput, secondInput, operation) {
  var result;
  switch (operation) {
    case 'add':
      result = Number(firstInput) + Number(secondInput);
      break;
    case 'subtract':
      result = Number(firstInput) - Number(secondInput);
      break;      
    case 'multiply':
      result = Number(firstInput) * Number(secondInput);      
      break; 
    case 'divide':
      result = Number(firstInput) / Number(secondInput); 
      break;
    default:
      break;
  }
  return result;
}