var firstItem = true;
var firstNumber = "";
var secondNumber = "";
var dispText = "";
var operation = "";
var result;

//boolean flags to determine whether to do arithmetic with floats.
var firstIsDecimal = false;
var secondIsDecimal = false;



setProperty("mainScreen", "background-color", "black");

function checkDecimal() {
  if(firstItem === true) {
    firstIsDecimal = true;
  }
  secondIsDecimal = (!firstItem) ? true : false;
}
onEvent("pointButton", "click", function() {
  updateNums(".");
  checkDecimal();
});
//add keyboard input maybe?
setScreen("WelcomeScreen");

function clear() {
  setText("numberDisplay", "");
  firstNumber = "";
  secondNumber = "";
  dispText = "";
  firstItem = true;
  result = 0;
  operation = "divide";
  firstIsDecimal = false;
  secondIsDecimal = false;
  
}
    onEvent("startButton", "click", function() {
  setScreen("mainScreen");
  
});
  onEvent("numberDisplay", "click", function() {
 setText("numberDisplay", "");
});

function updateNums(change) {
  //change has to be a string
  if(firstItem === true) {
    firstNumber = firstNumber + change;
    setText("numberDisplay", firstNumber);
  }
  else if(firstItem === false) {
    secondNumber = secondNumber + change;
    setText("numberDisplay", dispText + secondNumber);
  }
}

  onEvent("1Button", "click", function() {
    updateNums("1");
});
  onEvent("2Button", "click", function() {
    updateNums("2");
});
  onEvent("3Button", "click", function() {
    updateNums("3");
});
  onEvent("4Button", "click", function() {
   updateNums("4");
});
  onEvent("5Button", "click", function() {
    updateNums("5");
});
  onEvent("6Button", "click", function() {
    updateNums("6");
});
  onEvent("7Button", "click", function() {
    updateNums("7");
});
  onEvent("8Button", "click", function() {
    updateNums("8");
});
  onEvent("9Button", "click", function() {
    updateNums("9");
});
  onEvent("0Button", "click", function() {
    updateNums("0");
});
onEvent("clearButton", "click", function() {
  clear();
});

onEvent("equalsButton", "click", function() {
 
  if(operation === "divide") {
    processOperation("divide");
 }
  else if(operation === "add") {
    processOperation("add");
 }
  else if(operation === "subtract") {
    processOperation("subtract");
 }
  else if(operation === "multiply") {
    processOperation("multiply");
 }
 else if(operation === "power") {
   processOperation("power");
 }
 
 
 firstItem = true;
  
  //update with final result.
  var resultText = getText("numberDisplay") + " = " + result;
  setText("numberDisplay", resultText);
  dispText = getText("numberDisplay");
  
});


function processOperation() {
  //check whether or not to get float or int
  var number1;
  var number2;
  number1 = (firstIsDecimal) ? parseFloat(firstNumber) : parseInt(firstNumber);
  number2 = (secondIsDecimal) ? parseFloat(secondNumber) : parseInt(secondNumber);
 /* if(firstIsDecimal === true) {
    number1 = parseFloat(firstNumber);
  }
  else if(firstIsDecimal === false) {
    number1 = parseInt(firstNumber);
  }
  
  if(secondIsDecimal === true) {
    number2 = parseFloat(secondNumber);
  }
  else if(secondIsDecimal === false) {
    number2 = parseInt(secondNumber);
  }
*/
  if(operation === "add") {
    add(number1, number2);
  }
  else if(operation === "subtract") {
    subtract(number1, number2);
  }
  else if(operation === "divide") {
    divide(number1, number2);
  }
  else if(operation === "multiply") {
    multiply(number1, number2);
  }
  else if(operation === "power") {
    power(number1, number2);
  }
}
   function add(num1, num2){
    result = num1 + num2;
    if(firstIsDecimal || secondIsDecimal) 
      result = result.toFixed(2);
   }
  function subtract(num1, num2) {
    result = num1 - num2;
    if(firstIsDecimal || secondIsDecimal)
      result = result.toFixed(2);
  }
  function divide(num1, num2) {
    result = num1 / num2;
    if(firstIsDecimal || secondIsDecimal)
      result = result.toFixed(2);
  }
  function multiply(num1, num2) {
    result = num1 * num2;
    if(firstIsDecimal || secondIsDecimal)
      result = result.toFixed(2);
  } 
  function power(num1, num2) {
    result = Math.pow(num1, num2);
    if(firstIsDecimal || secondIsDecimal)
      result = result.toFixed(2);
  }
function prepOperation(operationChoice) {
  if(operationChoice === "add") {
    prepAdd();
  }
  else if(operationChoice === "subtract") {
    prepSubtract();
  }
  else if(operationChoice === "divide") {
    prepDivide();
  }
  else if(operationChoice === "multiply") {
    prepMultiply();
  }
  else if(operationChoice === "power") {
    prepPower();
  }
}
function prepAdd() {
  firstItem = false;
  operation = "add";
  dispText = firstNumber + " + ";
  setText("numberDisplay", dispText);
}
function prepDivide() {
  firstItem = false;
  operation = "divide";
  dispText = firstNumber + " / ";
  setText("numberDisplay", dispText);
}
function prepMultiply() {
  firstItem = false;
  operation = "multiply";
  dispText = firstNumber + " X ";
  setText("numberDisplay", dispText);
}
function prepSubtract() {
  firstItem = false;
  operation = "subtract";
  dispText = firstNumber + " - ";
  setText("numberDisplay", dispText);
}
function prepPower () {
  firstItem = false;
  operation = "power";
  dispText = firstNumber + "^";
  setText("numberDisplay", dispText);
}
onEvent("addButton", "click", function() {
  prepOperation("add");
});
onEvent("divideButton", "click", function() {
  prepOperation("divide");
});
onEvent("multiplicationButton", "click", function() {
  prepOperation("multiply");
});
onEvent("subtractButton", "click", function() {
  prepOperation("subtract");
});
onEvent("exponentButton", "click", function() {
  prepOperation("power");
});

 onEvent("quitButton", "click", function() {
  setScreen("WelcomeScreen");
});

