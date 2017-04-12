
// Three global variables

//sum holds the total of calculations made
//enteredNum, holds any digits entered piror to calculations
//op, is a string which holds my numbers
var sum = 0;
var enteredNum = 0;
var op = "";

// This function clears the calculator, setting all global variables back to 0
function clearCalculator(){
  sum = 0;
  enteredNum = 0;
  op = "";
  document.getElementById("display").innerHTML = 0;
}

//This function takes two digits and joins them together so that the program reads them as a whole number.
// Both digits became strings and then were pushed together. Then, using the parseInt() function parses a string and returns an integer.
function concatenateNumbers(input){
  var concat = String(enteredNum) + String(input);
  enteredNum = parseInt(concat);
  document.getElementById("display").innerHTML = enteredNum;
  return;
}

//This function does my calculations.
// The variable operator is used for the first operator entered then in the switch I call the global variable op.
//These two variables make the program to wait for the subsquent digits instead of calculating straigt away.
//This means its possible to enter mutliple operators.
// op is then given the value of opperator and enteredNum goes back to 0
function calculate(operator){
  switch (op){
    case '+':
        sum = sum + enteredNum;
        break;
    case '-':
        sum = sum - enteredNum;
        break;
    case '/':
        sum = sum / enteredNum;
        break;
    case '*':
        sum = sum * enteredNum;
        break;
    case '':
        sum = enteredNum;
        break;
      }
  enteredNum = 0;
  op = operator;
  document.getElementById("display").innerHTML = sum;
}
