//create a game where you start a game with any random number.ask user to keep quessing the game number untill the user enters correct value 

let gamenumber = 9

let guessnumber = Number(prompt("guess a game number"))

while (guessnumber != gamenumber) {
  guessnumber = prompt("you entered a wrong number,guess again !!")
}
alert("conratulation you entered correct number")

