const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Constraint = Matter.Constraint;

var bob1, bob2, bob3, bob4, bob5;
var rope1, rope2, rope3, rope4, rope5;
var myRoof;

function preload() {}

function setup() {
  createCanvas(800, 700);

  engine = Engine.create();
  world = engine.world;

  myRoof = new roof(400, 50, 600, 50);

  bob1 = new bob(200, 570);
  bob2 = new bob(300, 570);
  bob3 = new bob(400, 570);
  bob4 = new bob(500, 570);
  bob5 = new bob(600, 570);

  bobDiameter = 40;

  rope1 = new rope(bob1.body, myRoof.ground, -bobDiameter * 5, 0);
  rope2 = new rope(bob2.body, myRoof.ground, -bobDiameter * 2.5, 0);
  rope3 = new rope(bob3.body, myRoof.ground, 0, 0);
  rope4 = new rope(bob4.body, myRoof.ground, bobDiameter * 2.5, 0);
  rope5 = new rope(bob5.body, myRoof.ground, bobDiameter * 5, 0);

  Engine.run(engine);
}

function draw() {
  rectMode(CENTER);
  background("blue");

  myRoof.display();

  bob1.display();
  bob2.display();
  bob3.display();
  bob4.display();
  bob5.display();

  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  keyPressed();

  drawSprites();
}

function keyPressed() {
  if (keyCode === 32) {
    Matter.Body.applyForce(bob1.body, bob1.body.position, {
      x: -20,
      y: -20,
    });
  }
  if (keyCode === LEFT_ARROW) {
    bob1.x = bob1.x - 25;
  }
}
