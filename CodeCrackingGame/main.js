var generatedCode = document.getElementById("generatedCode");

var firstGuess = document.getElementById("firstGuess");
var secondGuess = document.getElementById("secondGuess");
var thirdGuess = document.getElementById("thirdGuess");

var crackedMessage = document.getElementById("crackedMessage");

var randomCode = Array();
var crackedCodeCount = 0;
var isCracked = false;
function generateCode() {
  reset(); // Clear or reset first, after code generation

  var firstCode = Math.floor(Math.random() * 9);
  var secondCode = Math.floor(Math.random() * 9);
  var thirdCode = Math.floor(Math.random() * 9);

  randomCode.push(firstCode,secondCode, thirdCode);

  var maskedCode = "";

  randomCode.forEach(code => { maskedCode += "*"; });
  generatedCode.innerHTML = "Code : " + maskedCode;
}

function reset() {
  crackedCodeCount = 0;
  isCracked = false;
  randomCode = Array();
  firstGuess.value = "";
  secondGuess.value = "";
  thirdGuess.value = "";
  crackedMessage.innerText = "\n";
}

function unmaskCode() {
  generatedCode.innerHTML = "Code : " + randomCode.toString().replace(/,/g, " ");
}

function crack() {
  crackedCodeCount = 0;

  var gussedCode = Array();
  gussedCode.push(Number(firstGuess.value));
  gussedCode.push(Number(secondGuess.value));
  gussedCode.push(Number(thirdGuess.value));
 
  var result = "";
  for (let index = 0; index < randomCode.length; index++) {
    result += compareCode(gussedCode[index], randomCode[index]) + " ";
  }

  if (crackedCodeCount === randomCode.length) {
    isCracked = true;
  }
    
  crackedMessage.innerHTML = isCracked ? "Great! Cracked code: " + randomCode.toString().replace(/,/g, " ") : "Try again: " + result;
}

function compareCode(gussedCode, generatedCode){
  if (gussedCode > generatedCode) {
    return "H" ;
  } else if(gussedCode < generatedCode) { 
    return "L" ;
  } else if(gussedCode === generatedCode){ 
      crackedCodeCount++;
      return gussedCode;
  }
}
