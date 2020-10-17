
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render= Matter.Render;
const Constraint = Matter.Constraint;

var bobObject1, bobObject2, bobObject3, bobObject4, bobObject5;
var roof;
var rope1, rope2, rope3, rope4,rope5;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
  bobObject1=new Bob(300,350,50);
  bobObject2=new Bob(350,350,50);
  bobObject3=new Bob(400,350,50);
  bobObject4=new Bob(450,350,50);
  bobObject5=new Bob(500,350,50);

	roof = new Roof(400,100,300,40);
  rope1 = new Rope(bobObject1.body,roof.body, -50*2, 0);
  rope2 = new Rope(bobObject2.body,roof.body, -25*2, 0);
  rope3 = new Rope(bobObject3.body,roof.body, -0*2, 0);
  rope4 = new Rope(bobObject4.body,roof.body, 25*2, 0);
	rope5 = new Rope(bobObject5.body,roof.body, 50*2, 0);
	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(255);
  Engine.update(engine);
  bobObject1.display();
  bobObject2.display();
  bobObject3.display();
  bobObject4.display();
  bobObject5.display();
  
  rope1.display();
  rope2.display();
  rope3.display();
  rope4.display();
  rope5.display();

  drawSprites();
}

function mouseDragged(){
  Matter.Body.setPosition(bobObject1.body, {x:mouseX, y:mouseY});
}
