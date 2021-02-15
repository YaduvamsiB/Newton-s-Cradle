const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload() {}

function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;

  //Create the Bodies Here.
  myRoof = new roof(100, 100, 400, 20);
  bob1 = new bob(200, 200);
  bob2 = new bob(300, 200);
  bob3 = new bob(400, 200);
  bob4 = new bob(500, 200);
  bob5 = new bob(600, 200);
  bob6 = new bob(700, 200);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("blue");

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();
  bob6.display();
  myRoof.display();
  drawSprites();
}
