// Assignment code here
function generatePassword(passwordLength) {
  let passwordArray = []
  // let passwordLength = passwordLength

  for (i = 0; i < passwordLength; i++) {
    let number = Math.floor(Math.random() * 10)
    passwordArray.push(number)

  }

  let password = passwordArray.join("")
  return password

}

// edit dom
// show value slider number
var rangeValue = document.getElementById("password-length-slidebar")
rangeValue.oninput = function () {
  var slideVal = rangeValue.value
  console.log(slideVal)
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