const Bodies = Matter.Bodies;

var boy;

function preload() {
  boy = loadImage("THEBOY.png")
}
function setup() {
  createCanvas(800, 400);
  // createSprite(400, 200, 50, 50);

  ground = new Ground(800, height, 1600, 20);

  //boy staff
  boy = new Boy(200, 700);
  //boy.addImage(boy);
  boy.scale = 0.5;

}

function draw() {
  background("lightblue");
  ground.display();
  boy.display();

  keyPressed();

  drawSprites();
}
function keyPressed() {
  if (keyDown("LEFT_ARROW")) {
    boy.velocityX = -2;
  }
  if (keyDown("RIGHT_ARROW")) {
    boy.velocityX = 2;
  }
}
