const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var block1 , block2 , block3 , block4 , block5 , block6 , block7;
var block8 , block8 , block9 , block10 , block11 , block12 ;
var block13 , block14, block15 ;
var block16 ;
var block17 , block18 , block19 , block20 , block21 ;
var block22 , block23 , block24 ;
var block25 ;
var floor1 , floor2 ;
var tnt1 , slingshot1 , backgroundImg;

function preload() {
    backgroundImg = loadImage("backg.jpg");
}

function setup(){
    createCanvas(2304,1296);

    engine = Engine.create();
    world = engine.world;

    floor1 = new floor(1080,700,600,30);
    floor2 = new floor(1770,500,400,30);

    block1 = new block(900,670,60,60);
    block2 = new block(962,670,60,60);
    block3 = new block(1024,670,60,60);
    block4 = new block(1086,670,60,60);
    block5 = new block(1148,670,60,60);
    block6 = new block(1210,670,60,60);
    block7 = new block(1272,670,60,60);

    block8 = new blockone(962,600,60,60);
    block9 = new blockone(1024,600,60,60);
    block10 = new blockone(1086,600,60,60);
    block11 = new blockone(1148,600,60,60);
    block12 = new blockone(1210,600,60,60);

    block13 = new blocktwo(1024,570,60,60);
    block14 = new blocktwo(1086,570,60,60);
    block15 = new blocktwo(1148,570,60,60);

    block16 = new blockthree(1086,540,60,60);
    
    block17 = new blockfour(1650,470,60,60);
    block18 = new blockfour(1712,470,60,60);
    block19 = new blockfour(1774,470,60,60);
    block20 = new blockfour(1836,470,60,60);
    block21 = new blockfour(1898,470,60,60);
   
    block22 = new blockfive(1712,440,60,60);
    block23 = new blockfive(1774,440,60,60);
    block24 = new blockfive(1836,440,60,60);

    block25 = new blocksix(1774,410,60,60);

    tnt1 = new tnt(400,500);

    slingshot1 = new slingshot(tnt1.body,{x:400, y:500});

}

function draw(){

    background(backgroundImg);
    Engine.update(engine);

    floor1.display();
    floor2.display();

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
    block17.display();
    block18.display();
    block19.display();
    block20.display();
    block21.display();
    block22.display();
    block23.display();
    block24.display();
    block25.display();
    tnt1.display();
   
    slingshot1.display();
  

}

function mouseDragged(){
    Matter.Body.setPosition(tnt1.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
    slingshot1.fly();
}