var random = Math.floor(Math.random() * 6) + 1;

var randomImage1 = "dice" + random + ".png";

var randomImageSource = "images/" + randomImage1;

var image1 = document.querySelectorAll("img")[0];

image1.setAttribute("src", randomImageSource);

var random2 = Math.floor(Math.random() * 6) + 1;

var randomImage2 = "dice" + random2 + ".png";

var randomImageSource2 = "images/" + randomImage2;

var image2 = document.querySelectorAll("img")[1];

image2.setAttribute("src", randomImageSource2);

if(random > random2) {
    document.querySelector("h1").innerHTML = "🚩Player 1 Wins!"
}else if(random < random2){
    document.querySelector("h1").innerHTML = "Player 2 Wins!🚩"
}
else {
    document.querySelector("h1").innerHTML = "Draw!!!"
}