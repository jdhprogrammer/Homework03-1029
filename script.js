// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {
  var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);

let lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
let uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharArray = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
let numberArray = [0,1,2,3,4,5,6,7,8,9];



function generatePassword() {

  let pwLength = prompt("How many characters would you like your password to contain?")
  
  if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
    alert("I know, I know... here come the rules...\nThere's only one rule:\n1. You Do Not talk about Fight Club!\nokay... there's 2 rules.\n2. Password length must be between 8 - 128.")
    let pwLength = prompt("How many characters would you like your password to contain?")
  }
  let superArray = [""];
  let chosenChars = haveItYourWay()

  function haveItYourWay()  {
    let yesLowercase = confirm("Would you like to include Lowercase Letters?");
    let yesUppercase = confirm("Would you like to include Uppercase Letters?");
    let yesNumbers = confirm("Would you like to include Numbers?");
    let yesSpecialChar = confirm("Would you like to include Special Characters?");
    if (yesLowercase === false && yesUppercase === false && yesNumbers === false && yesSpecialChar === false) {
      alert("Please select at least one option\n[3+ options RECOMMENDED]")
      haveItYourWay()
    }
    if (yesLowercase) {
      return lowercaseArray,
    }
    if (yesUppercase) {
      return uppercaseArray,
    }
      
  }
    
}


function adderReturn(x, y, z) {
  return x + y + z;
}
var result = adderReturn(1, 2, 3);
console.log(result);


// GIVEN I need a new, secure password
// WHEN I click the button to generate a password
// THEN I am presented with a series of prompts for password criteria
// WHEN prompted for password criteria
// THEN I select which criteria to include in the password
// WHEN prompted for the length of the password
// THEN I choose a length of at least 8 characters and no more than 128 characters
// WHEN prompted for character types to include in the password
// THEN I choose lowercase, uppercase, numeric, and/or special characters
// WHEN I answer each prompt
// THEN my input should be validated and at least one character type should be selected
// WHEN all prompts are answered
// THEN a password is generated that matches the selected criteria
// WHEN the password is generated
// THEN the password is either displayed in an alert or written to the page