var ship, boat
var sea, ocean
function preload(){
boat = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png")
ocean = loadImage("sea.png")
}

function setup(){
  createCanvas(400,400);
  sea = createSprite(200,200)
  sea.addImage(ocean)
  sea.scale = 0.25
  sea.velocityX = -10
  ship = createSprite(100,250)
  ship.addAnimation("sailing", boat)
  ship.scale = 0.175
}

function draw() {
  background("blue");
 
if(sea.x < -100){
  sea.x = 500
}

  drawSprites()
}