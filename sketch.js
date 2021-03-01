const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;
const Constraint=Matter.Constraint;
var treeObj, stoneObj,groundObject, launcherObject;
var mango1;
var world,boy;
var mango2;
var mango3;
var mango4;
var mango5;
var mango6;
var mango7;
 
var chain;

var stone;

function preload(){
	boy=loadImage("images/boy.png");
  }

function setup() {
	createCanvas(1300, 600);
	engine = Engine.create();
	world = engine.world;

	mango1=new Mango(1100,100,30);
	mango2 = new Mango(1000, 200, 30);
	mango3 = new Mango(1200, 100, 30);
	mango4 = new Mango(1000, 50, 30);
	mango5 = new Mango(900, 200, 30);
	mango6 = new Mango(1200, 250, 35)
	mango7 = new Mango(1110, 200, 30);

	stone = new Stone(400, 200, 20);

	treeObj=new tree(1050,580);
	groundObject=new ground(width/2,600,width,20);

	chain = new Chain(stone.body, {x:240, y:420});
	
	Engine.run(engine);

}

function draw() {

  background(230);
  //Add code for displaying text here!
  image(boy ,200,340,200,300);
  

  treeObj.display();
  mango1.display();
  mango2.display();
  mango3.display();
  mango4.display();
  mango5.display();
  mango6.display();
  mango7.display();

  stone.display();

  chain.display();

  groundObject.display();

  detectollision(stone, mango1);
  detectollision(stone, mango2);
  detectollision(stone, mango3);
  detectollision(stone, mango4);
  detectollision(stone, mango5);
  detectollision(stone, mango6);
  detectollision(stone, mango7);

  stroke("black");
  textSize(20)
  text("Press Space To Get A Second Chance To Play", 100, 50);
}

function mouseDragged() {
	Matter.Body.setPosition(stone.body, {x: mouseX, y: mouseY})
}

function mouseReleased() {
	chain.fly();
}

function detectollision(lstone, lmango) {
	mango1BodyPosition = lmango.body.position;
	stoneBodyPosition = lstone.body.position;

	var distance = dist(stoneBodyPosition.x, stoneBodyPosition.y, mango1BodyPosition.x, mango1BodyPosition.y);
	if(distance<=lmango.r+lstone.r) {
		Matter.Body.setStatic(lmango.body, false);
	}
}

function keyPressed() {
    if(keyCode === 32) {
        chain.attach(stone.body)
		stone.body.x = 400;
		stone.body.y = 200;
    }
}