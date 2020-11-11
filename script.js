// Assignment code here

//global items
const numeric = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
const alphaUpper = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"]
const alphaLower = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]
const specialChars = [" ", "!", "#", "$", "%", "&", "\'", "\\", "(", ")", "*", "+", ",", "-", ".", "/", ":", ";", "<", "=", ">", "?", "@", "[", "]", "^", "_", "`", "{", "|", "}", "~"]


//logic functions
function generatePassword(passwordLength) {
  let passwordArray = []
  let selectionArray = []
  // local copy of the items to not affect the global variables. Likely change this later. 
  // let num = numeric
  // let alphaU = alphaUpper
  // let special = specialChars
  // let passwordLength = passwordLength

  //checkbox status
  let numericBool = document.getElementById("numbers").checked
  let upperBool = document.getElementById("upper").checked
  let lowerBool = document.getElementById("lower").checked
  let symobolicBool = document.getElementById("symbols").checked

  if(numericBool == true) {
    selectionArray = selectionArray.concat(numeric)
  }
  if(upperBool == true) {
    selectionArray = selectionArray.concat(alphaUpper)
  }
  if(lowerBool == true) {
    selectionArray = selectionArray.concat(alphaLower)
  }
  if(symobolicBool == true) {
    selectionArray = selectionArray.concat(specialChars)
  }

  if(numericBool == false && upperBool == false && lowerBool == false && symobolicBool == false){
    return("Please Select an option(s) below to generate a password")  
  }

  // if (alphabeticBool == true) {

  //   num = num.concat(alphaU)
  // }
  // if (symoblicBool == true) {

  //   num = num.concat(special)
  // }  

  for (i = 0; i < passwordLength; i++) {
    let randomItem = selectionArray[Math.floor(Math.random() * selectionArray.length)];
    passwordArray.push(randomItem)

  }


  let password = passwordArray.join("")
  return password

}

// DOM
// show value slider number
var rangeValue = document.getElementById("password-length-slidebar")
rangeValue.oninput = function () {
  var slideVal = rangeValue.value

  document.getElementById("slide-length").innerHTML = slideVal

}




// Get references to the #generate element
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  let rangeValue = document.getElementById("password-length-slidebar").value
  let password = generatePassword(rangeValue);
  let passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);