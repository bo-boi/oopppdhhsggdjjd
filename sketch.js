const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var holder,ball,ground;
var stand1,stand2;
var ball;
var slingShot;
var polygon_img;
function preload(){
  polygon_img=loadImage("polygon.png");
}
function setup() {
  createCanvas(900,400);
  engine = Engine.create();
  world = engine.world;
  Engine.run(engine);
  ground = new Ground();
  
  slingshot = new Sling(polygon.body,{x:200,y:100});
  stand1 = new Stand(390,300,250,10);
  stand2 = new Stand(800,200,200,10);
 
  //level one
  block1 = new Block(300,275,30,40);
  console.log(block1);
  block2 = new Block(330,275,30,40);
  block3 = new Block(360,275,30,40);
  block4 = new Block(390,275,30,40);
  block5 = new Block(420,275,30,40);
  block6 = new Block(450,275,30,40);
  block7 = new Block(480,275,30,40);
  //level two
  block8 = new Block(330,235,30,40);
  block9 = new Block(360,235,30,40);
  block10 = new Block(390,235,30,40);
  block11 = new Block(420,235,30,40);
  block12 = new Block(450,235,30,40);
  //level three
  block13 = new Block(360,195,30,40);
  block14 = new Block(390,195,30,40);
  block15 = new Block(420,195,30,40);
  //top
  block16 = new Block(390,155,30,40);



//second
  ground1 = new Ground();
  stand11 = new Stand(685,300,250,10);
  stand21 = new Stand(950,200,200,10);
 
  //level one
  block11 = new Block(600,275,30,40);
  console.log(block1);
  block21 = new Block(630,275,30,40);
  block31 = new Block(660,275,30,40);
  block41= new Block(690,275,30,40);
  block51 = new Block(720,275,30,40);
  block61 = new Block(750,275,30,40);
  block71 = new Block(780,275,30,40);
  //level two
  block81 = new Block(630,235,30,40);
  block91 = new Block(660,235,30,40);
  block101 = new Block(690,235,30,40);
  block111 = new Block(720,235,30,40);
  block121 = new Block(750,235,30,40);
  //level three
  block131= new Block(650,195,30,40);
  block141= new Block(690,195,30,40);
  block151= new Block(730,195,30,40);
  //top
  block161 = new Block(690,155,30,40);




  polygon = new Polygon(200,325,50,50)
  

}
function draw() {
  background(56,44,44); 
 
  textSize(20);
  fill("lightyellow");
  

  ground.display();
  stand1.display();
  
  ground1.display();
  stand11.display();

  strokeWeight(2);
  stroke(15);
  fill("skyblue");
  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  block7.display();
  fill("pink");
  block8.display();
  block9.display();
  block10.display();
  block11.display();
  block12.display();
  fill("turquoise");
  block13.display();
  block14.display();
  block15.display();
  fill("grey");
  block16.display();
 

  fill("skyblue");
  block11.display();
  block21.display();
  block31.display();
  block41.display();
  block51.display();
  block61.display();
  block71.display();
  fill("pink");
  block81.display();
  block91.display();
  block101.display();
  block111.display();
  block121.display();
  fill("turquoise");
  block131.display();
  block141.display();
  block151.display();
  fill("grey");
  block161.display();
  
  polygon.display();
}
function mouseDragged(){
    Matter.Body.setPosition(polygon.body, {x:mouseX, y:mouseY})
}
function mouseReleased(){
    slingshot.fly()
}