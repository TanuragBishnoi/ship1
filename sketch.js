
function preload(){
seaImg = loadImage("sea.png");
shipImg1 = loadAnimation(//list the names of png files that you want to load);
shipImg2 = loadAnimation(//list the names of png files that you want to load);
shipImg3 = loadAnimation(//list the names of png files that you want to load);
shipImg4 = loadAnimation(//list the names of png files that you want to load);
}

function setup(){
  createCanvas(400,400);
  spriteName.addImage(seaImg);
}

function draw() {
  background("blue");
 //code to rtest the background
 if(sea.X < 0){
   sea.X = sea.width/2;
 }
}