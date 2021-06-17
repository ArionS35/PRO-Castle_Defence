const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

const Render = Matter.Render;
var player1;

function preload(){
  
  backgroundImg = loadImage("images/bg2.png");
}

function setup() {
  createCanvas(1350,600);
 engine = Engine.create()
 world=engine.world

  //createSprite(400, 200, 50, 50);
  ground1= new Ground(50,480,350,200)
  baseground= new Ground(600,600,1500,50)
  striker= new Striker(200,350,60,60)
  castle= new Castle(110,490,220,160)
  ecastle= new Ecastle(1300,490,120,170)
  enemy1= new Enemy(1070,550,30,30)
  enemy2= new Enemy(1090,550,30,30)
  enemy3= new Enemy(1100,550,30,30)
  enemy4= new Enemy(1140,550,30,30)
  enemy5= new Enemy(1170,550,30,30)
  enemy6= new Enemy(1200,550,30,30)
  enemy7= new Enemy(1070,550,30,30)
  enemy8= new Enemy(1090,550,30,30)
  enemy9= new Enemy(1100,550,30,30)
  enemy10= new Enemy(1140,550,30,30)
  enemy11= new Enemy2(1170,550,30,30)
  enemy12= new Enemy2(1200,550,30,30)
  enemy13= new Enemy2(1090,250,30,30)
  enemy14= new Enemy2(1100,250,30,30)
  enemy15= new Enemy2(1140,250,30,30)
  enemy16= new Enemy2(1170,250,30,30)
  enemy17= new Enemy2(1000,250,30,30)
  enemy18= new Enemy2(1120,250,30,30)
  enemy19= new Enemy2(1220,250,30,30)
  enemy20= new Enemy2(980,250,30,30)
  enemy21= new Enemy3(950,380,30,30)
  enemy22= new Enemy3(980,260,30,30)
  enemy23= new Enemy3(850,230,30,30)
  enemy24= new Enemy4(710,400,30,30)
  enemy25= new Enemy4(1140,250,30,30)
  enemy26= new Enemy4(1170,250,30,30)
  enemy27= new Enemy5(1200,250,30,30)
  enemy28= new Enemy5(1120,250,30,30)
  enemy29= new Enemy5(1220,250,30,30)
  enemy30= new Enemy1(1210,250,30,30)
  player1 = new Player(250,130,40,60)
  
  slingshot = new Shooter(striker.body,{x:200, y:310},20,20);
  Engine.run(engine)
}

function draw() {
  background(backgroundImg); 
  
  ground1.display()
  baseground.display()
  castle.display()
  ecastle.display()
  striker.display()
  enemy1.display()
  enemy2.display()
  enemy3.display()
  enemy4.display()
  enemy5.display()
  enemy6.display()
  enemy7.display()
  enemy8.display()
  enemy9.display()
  enemy10.display()
  enemy11.display()
  enemy12.display()
  enemy13.display()
  enemy14.display()
  enemy15.display()
  enemy16.display()
  enemy17.display()
  enemy18.display()
  enemy19.display()
  enemy20.display()
  enemy21.display()
  enemy22.display()
  enemy23.display()
  enemy24.display()
  enemy25.display()
  enemy26.display()
  enemy27.display()
  enemy28.display()
  enemy29.display()
  enemy30.display()
  player1.display()
  slingshot.display()
 
  drawSprites();
}

function keyPressed(){
  if(keyCode === 32){
     slingshot.attach(striker.body);
  }
  if(keyCode===LEFT_ARROW){
    Matter.Body.applyForce(player1.body,player1.body.position,{x:-30000,y:0});
  }
  if(keyCode===RIGHT_ARROW){
    Matter.Body.applyForce(player1.body,player1.body.position,{x:30000,y:0});
  }
}

//function keyPressed() {
  //if(keyCode === 32){
  //  Matter.Body.applyForce(enemy1.body,enemy1.body.position,{x:-25,y:1});
  //}
 
 //}
 function mouseDragged(){
        Matter.Body.setPosition(striker.body, {x: mouseX , y: mouseY});
}


function mouseReleased(){
  slingshot.fly();
 // gameState = "launched";
} 