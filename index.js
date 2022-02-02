
var randomNumber1 = Math.floor(Math.random() * 6) + 1;
var randomDice = "dice" + randomNumber1 + ".png";
var randomImageSource = "img/" + randomDice;
var image1 = document.querySelectorAll("img")[0];
image1.setAttribute("src", randomImageSource);


var randomNumber2 = Math.floor(Math.random() * 6) + 1;
var randomImageSource2 = "img/dice" + randomNumber2 + ".png";
document.querySelectorAll("img")[1].setAttribute("src", randomImageSource2);


if (randomNumber1 > randomNumber2) {
  document.querySelector("h1").innerHTML = "🚩Player1 is Victorious!";
} else if (randomNumber2 > randomNumber1) {
  document.querySelector("h1").innerHTML = "Player2 Is Victorious!🚩";
} else {
  document.querySelector("h1").innerHTML = "🚩 It's A Stalemate! 🚩";
}
