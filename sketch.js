
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

function preload()
{
	
}

function setup() {
	createCanvas(800, 700);
    engine = Engine.create();
	world = engine.world;

	ground = new Ground(400,height,800,20)
	box1 = new Dustbin(650,680,200,20)
  box2 = new Dustbin(546,640,20,100)
  box3 = new Dustbin(760,640,20,100)
  paper = new Paper(100,380)
  
	//Create the Bodies Here.


	//Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  //ellipseMode(RADIUS)
  background(0);
  Engine.update(engine);
  ground.display();
  box1.display();
  box2.display();
  box3.display();
  paper.display();
 // rect(ground.position.x,ground.position.y,400,20)
  //ellipse(ball.position.x,ball.position.y,20,20)
  
}
function keyPressed(){
  if(keyCode === UP_ARROW){
    Matter.Body.applyForce(paper.body,paper.body.position,{x:13,y:-20})
  }
}


