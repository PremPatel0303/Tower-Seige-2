const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Body=Matter.Body;
const Constraint = Matter.Constraint;

var pentagon;
var ground1,ground2,ground3;
var block1,block2,block3,block4,block5;
var block6,block7,block8,block9,block10;
var block11,block12,block13,block14,block15;
var block16,block17,block18,block19,block20;
var block21,block22,block23,block24,block25;

function preload()
{

}

function setup() {
  createCanvas(1000,400);

  engine = Engine.create();
  world = engine.world;

  ground1=new Ground(390+60,310,270,12);

  block1=new Box(300+60,275,30,40);
  block2=new Box(330+60,275,30,40);
  block3=new Box(360+60,275,30,40);
  block4=new Box(390+60,275,30,40);
  block5=new Box(420+60,275,30,40);
  block6=new Box(450+60,275,30,40);
  block7=new Box(480+60,275,30,40);

  block8=new Box1(330+60,235,30,40);
  block9=new Box1(360+60,235,30,40);
  block10=new Box1(390+60,235,30,40);
  block11=new Box1(420+60,235,30,40);
  block12=new Box1(450+60,235,30,40);

  block13=new Box2(360+60,195,30,40);
  block14=new Box2(390+60,195,30,40);
  block15=new Box2(420+60,195,30,40);
  
  block16=new Box3(390+60,155,30,40);

  ground2=new Ground(800,225,210,12);

  block17=new Box(800-60,205,30,40);
  block18=new Box(800-30,205,30,40);
  block19=new Box(800,205,30,40);
  block20=new Box(800+30,205,30,40);
  block21=new Box(800+60,205,30,40);

  block22=new Box2(800-30,205-40,30,40);
  block23=new Box2(800,205-40,30,40);
  block24=new Box2(800+30,205-40,30,40);

  block25=new Box1(800,205-80,30,40);

  ground3=new Ground(500,390,1000,20);

  pentagon=new polygon(200,200,20);

  sling=new SlingShot(pentagon.body,{x:180,y:190})
}

function draw() {

  background(48,6,6); 

  Engine.update(engine);
  
  ground1.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();

  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();

  block13.display();
  block14.display();
  block15.display();

  block16.display();

  ground2.display();

  block17.display();
  block18.display();
  block19.display();
  block20.display();
  block21.display();

  block22.display();
  block23.display();
  block24.display();
  block25.display();

  pentagon.display();

  ground3.display();

  sling.display();

  strokeWeight(0);
  fill("white");
  textSize(22);
  text("Drag the Hexagonal Stone and Release it, to launch it towards the blocks",150,30);
  
}
function mouseDragged()
{
  Matter.Body.setPosition(pentagon.body,{x:mouseX,y:mouseY});
}


function mouseReleased()
{
   sling.fly();
}

function keyPressed()
{
  if(keyCode===32)
  {
    Matter.Body.setPosition(pentagon.body,{x:100,y:200});
    sling.attacher(pentagon.body);
  }
}