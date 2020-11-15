
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	


	
}

var balle;


function setup() {
	createCanvas(800, 700);

balle = new ball(340,230,30,30);
	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  drawSprites();
 
}
if (keyDown(RIGHT_ARROW)) {
	Matter.Body.applyForce(balle.body.balle.body.position{x;85,y;-85})
  }
}




