//Psuedocode:
//create a string with a message of "You have received this message because you have been chosen to open an important vault. Here is the secret combination: "
//create a variable using addition (+) that amounts to 10
//create a variable using subtraction (-) that amounts to 40
//create a variable using division (/) that amounts to 39
//Create a dialog box displaying the vault codes

//This is the greeting
const greeting =
  "You have received this message because you have been chosen to open an important vault. Here is the secret combination: ";

//This is the first number
const comboOne = 7 + 3;

//This is the second number
const comboTwo = 112 - 72;

//This is the third number
const comboThree = 234 / 6;

//This is the final combination:
const comboTotal = `${comboOne} - ${comboTwo} - ${comboThree}`;

//This is the alert box that displays the greeting and the combo
alert(greeting + comboTotal);
