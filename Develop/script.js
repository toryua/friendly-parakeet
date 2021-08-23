// Assignment code here
// Password Prompt Functions


// Get references to the #generate element
var generateBtn = document.querySelector("#generate");



// Write password to the #password input
function writePassword() {

  // generatePassword function will present user with series of prompts 
  // for password criteria and is located within the scope of writePassword. 
  // after the prompts are satisfied, the function will then 
  // generate the password to be called by the parent writePassword function. 


  var password = generatePassword(


    // prompt #1: password length 
    function passwordLength() {
      var passwordLength = Number(window.prompt("Input your desired password length (equal to or between 8 and 128)", "10"));
      if (passwordLength >= 8 && passwordLength <= 128) {
        var lowercase = window.prompt("Do you want lowercase letters?");
        if (lowercase) {
          window.alert("Lowercase letters will be added to your password.")
        };
        // else {
        window.alert("Lowercase letters will not be added to your password.")
      }
      else {
        window.alert("Invalid input: Password must be between 8 and 128 characters");
        passwordLength();
      }
     }



      ;
      var passwordText = document.querySelector("#password");




      passwordText.value = password;




      // Add event listener to generate button; runs writePassword function 
      generate.addEventListener(click, writePassword());










