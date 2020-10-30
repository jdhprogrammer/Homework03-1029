// Assignment Code
let generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

    let passwordText = document.querySelector("#password");

    let password = generatePassword();

    passwordText.value = password;

}

// Define Copy password button & add Event listener
let copyBtn = document.querySelector("#copy")
copyBtn.addEventListener("click", copyPassword);

// Add event listener to generate button
generateBtn.addEventListener("click", deletePassword);
generateBtn.addEventListener("click", writePassword);

// Define password character option Strings & Arrays
let lowercaseArray = "abcdefghijklmnopqrstuvwxyz";
let uppercaseArray = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let specialCharArray = "!#$%&'()*+,-./:;<=>?@[^_`{|}~";
let numberArray = ['0', '1', '2', '3', '4', '5', '6', '7', '8', '9'];
let passwordArray = [];

deletePassword();
// Clear 1st password from text box for 2nd Password Generation & hide copy button
function deletePassword() {
    originalText = document.querySelector("#password");
    let clearText = "";
    originalText.value = clearText;
    document.querySelector("#copy");
    copyBtn.setAttribute("style", "visibility: hidden");
}
// Main Function to Prompt the user for Password Choices and Generate the Random Password
function generatePassword() {

    let pwLength = prompt("How many characters would you like your password to contain?");

    if (pwLength < 8 || pwLength > 128 || isNaN(pwLength)) {
        alert("I know, I know... here come the rules...\nThere's only one rule:\n1. You Do Not talk about Fight Club!\nokay... there's 2 rules.\n2. Password length must be between 8 - 128.");
        return "try again & choose between 8 - 128 characters";
    }

    // Character Choice Confirms & Minimum 1 choice Validation Funcion
    haveItYourWay();

    function haveItYourWay() {
        // Clear past passwordArray strings
        passwordArray = [];

        let yesLowercase = confirm("Would you like to include Lowercase Letters?");
        let yesUppercase = confirm("Would you like to include Uppercase Letters?");
        let yesNumbers = confirm("Would you like to include Numbers?");
        let yesSpecialChar = confirm("Would you like to include Special Characters?");

        if (yesLowercase) {
            passwordArray = [...passwordArray, ...lowercaseArray];
        }
        if (yesUppercase) {
            passwordArray = [...passwordArray, ...uppercaseArray];
        }
        if (yesNumbers) {
            passwordArray = [...passwordArray, ...numberArray];
        }
        if (yesSpecialChar) {
            passwordArray = [...passwordArray, ...specialCharArray];
        }

        if (yesLowercase === false && yesUppercase === false && yesNumbers === false && yesSpecialChar === false) {
            alert("Please select at least one option\n[3+ options RECOMMENDED]");
            haveItYourWay();
        }
    }
    // Define String for Random Password & Generate random characters According to desired Password Length
    let passwordCharacters = "";
    for (let i = 0; i < pwLength; i++) {
        let characters = passwordArray[Math.floor(Math.random() * passwordArray.length)];
        passwordCharacters = passwordCharacters + characters;
    }
    document.querySelector("#copy");
    copyBtn.setAttribute("style", "visibility: visible");

    return passwordCharacters;
}

function copyPassword() {

    let copyText = document.querySelector("#password");
    copyText.select();
    document.execCommand("copy");
    alert("Copied the text: " + copyText.value);
}