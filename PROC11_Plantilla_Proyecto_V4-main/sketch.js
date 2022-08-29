
var mar;
var sea;
var ship_animacion;
var ship;

function preload(){
  sea = loadImage("sea.png");
  ship_animacion = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
}

function setup(){
  createCanvas(400,400);

  mar = createSprite(10,200,400,400);
  mar.addImage(sea);
  mar.scale = 0.25;
  mar.velocityX = 2;

  ship = createSprite(200,200,100,100);
  ship.scale = 0.3;
  ship.addAnimation("running",ship_animacion);
}

function draw() {
  background("blue");

  if(mar.x < 0)
  {
    mar.x = mar.x/mar.width/2;
  }

  drawSprites();
}