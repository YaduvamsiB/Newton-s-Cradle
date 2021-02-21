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
  myRoof = new roof(400, 50, 600, 20);

  bob1 = new bob(200, 570);
  bob2 = new bob(300, 570);
  bob3 = new bob(400, 570);
  bob4 = new bob(500, 570);
  bob5 = new bob(600, 570);

  rope1 = new chain(bob1.body, myRoof.body, -bobDiameter * 2, 0);

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

  rope1.display();

  myRoof.display();
  drawSprites();
}
