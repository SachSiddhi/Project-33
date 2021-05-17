var backgroundImg;
var snow,snowImg,snowFlakes;

const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;

function preload(){
backgroundImg = loadImage("snow3.jpg");
snowImg = loadImage("snow4.webp");
}

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;
 // createSprite(400, 200, 50, 50);

 snow = createSprite(750,30);
 snow.addImage(snowImg);
 snow.scale = 0.1;

 snowFlakes = Bodies.circle(720,330,5,{restitution:0.5,isStatic:true});
 World.add(world,snowFlakes);

}

function draw() {
  background(backgroundImg); 

  Engine.update(engine);

  snow.x = snowFlakes.position.x;
  snow.y = snowFlakes.position.y; 

  if(frameCount%60 === 0){
    snowFlakes = createSprite(Math.round(random(0,800)),10,10);
    snowFlakes.addImage(snowImg);
    snowFlakes.scale = 0.1;
    snowFlakes.velocityY = 3;
  }

  snow.display();
  drawSprites();
}