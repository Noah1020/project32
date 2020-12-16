const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10, block11, block12;
var ground1;
var bomb;
var score = 0;


function preload() {
   
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;
    
    ground = new Ground(685,250,185,5);
    block1 = new Block(630,235,35,40);
    block2 = new Block(660,235,35,40);
    block3 = new Block(690,235,35,40);
    block4 = new Block(720,235,35,40);
    block5 = new Block(750,235,35,40);
    block6 = new Block(660,195,35,40);
    block7 = new Block(690,195,35,40);
    block8 = new Block(720,195,35,40);
    block9 = new Block(690,155,35,40);
    block10 = new Block(690,130,35,40);
    block11 = new Block(690,95,35,40);
    block12 = new Block(690,50,35,40);
    bomb = new Bomb(160,200,40,40);
    slingshot = new SlingShot(bomb.body,{x:160, y:198});

}

function draw(){
    background(255);
    Engine.update(engine);
    //strokeWeight(4);
       
    ground.display();
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
    bomb.display();
    slingshot.display();

    textSize(50);
    fill("blue");
    text("score: " +score , width-300 , 50);
    

    block1.score();
    block2.score();
    block3.score();
    block4.score();
    block5.score();
    block6.score();
    block7.score();
    block8.score();
    block9.score();
    block10.score();
    block11.score();
    block12.score();

}

function mouseDragged(){
  Matter.Body.setPosition(bomb.body, {x: mouseX , y: mouseY});
}

function mouseReleased(){
  slingshot.fly();
}