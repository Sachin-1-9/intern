var randomNumber1=Math.floor(Math.random()*6)+1;
var randomdeicimage="dice"+randomNumber1+".png";
var randomImagesource="images/"+randomdeicimage
var image1=document.querySelectorAll("img")[0];
image1.setAttribute("src",randomImagesource);

var randomNumber2=Math.floor(Math.random()*6)+1;
var randomdeicimage="dice"+randomNumber2+".png";
var randomImagesource2="images/"+randomdeicimage
var image1=document.querySelectorAll("img")[1];
image1.setAttribute("src",randomImagesource2);

var header=document.querySelector("h1");
if (randomNumber1>randomNumber2){
    header.innerHTML="🚩 Play 1 Wins!";
}
else if (randomNumber1<randomNumber2){
    header.innerHTML="Play 2 Wins! 🚩 ";
}
else{
    header.innerHTML="DRAW!";
}