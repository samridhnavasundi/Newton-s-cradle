const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var ground
var ball1, rope1
var ball2, rope2
var ball3, rope3
var ball4, rope4
var ball5, rope5

function setup() {
  createCanvas(3000, 800);
  engine = Engine.create();
  world = engine.world;

  ground = new Ground(700,50, 500, 20);

  

  ball1 = new Ball(200, 200, 80, 80);
  ball2 = new Ball(250, 200, 80, 80);
  ball3 = new Ball(300, 200, 80, 80);
  ball4 = new Ball(350, 200, 80, 80);
  ball5 = new Ball(400, 200, 80, 80);
  rope1 = new Rope(ball1.body, { x: 500, y: 50 });
  rope2 = new Rope(ball2.body, { x: 600, y: 50 });
  rope3 = new Rope(ball3.body, { x: 700, y: 50 });
  rope4 = new Rope(ball4.body, { x: 800, y: 50 });
  rope5 = new Rope(ball5.body, { x: 900, y: 50 });


}

function draw() {
  background(180);
  Engine.update(engine);
  ground.display();
  

  ball1.display();
  ball2.display();
  ball3.display();
  ball4.display();
  ball5.display();
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();



}


function mouseDragged() {
  Matter.Body.setPosition(ball1.body, { x: mouseX, y: mouseY });
  Matter.Body.applyForce(ball1.body,ball1.body.position,{x:-50,y:-50})

}


