var randomNumber1= 6;
//console.log(randomNumber1);
var imageNum1=(Math.floor(Math.random() * randomNumber1))+1;
document.querySelector(".img1").setAttribute("src", "images/dice"+imageNum1+".png");

var randomNumber2=5;
var imageNum2=(Math.floor(Math.random() * randomNumber2)+1);
document.querySelector(".img2").setAttribute("src", "images/dice"+imageNum2+".png");


if (imageNum1 > imageNum2){
  //document.querySelector("h1").innerhtml="<img>https://thumbs.dreamstime.com/b/winner-cup-flags-white-88844046.jpg";
  document.querySelector("h1").innerText="Player 1 wins!";
}else if (imageNum1 < imageNum2){
  document.querySelector("h1").innerText="Player 2 wins!";
}else{
  document.querySelector("h1").innerText="Draw!";
}
