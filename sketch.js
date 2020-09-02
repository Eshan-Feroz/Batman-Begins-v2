const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var canvas; 
var engine, world;
var umbrella;
var thunder, thunder1,thunder2,thunder3,thunder4;
var particles = [];
var rand;
var rains;
var thunderCreatedFrame;
function preload(){
  thunder1 = loadImage("thunderbolt/1.png");
  thunder2 = loadImage("thunderbolt/2.png");
  thunder3 = loadImage("thunderbolt/3.png");
  thunder4 = loadImage("thunderbolt/4.png");
  
}

function setup(){
canvas = createCanvas(displayWidth -20, displayHeight-30)   

  engine = Engine.create();
  world = engine.world; 

  umbrella = new Umbrella(650, 600, 50);
}

function draw(){
  background(0)
    Engine.update(engine);
    
    rand = Math.round(random(1,4));
    if(frameCount%80===0){
        thunderCreatedFrame=frameCount;
        thunder = createSprite(random(10,1000), random(10,30), 10, 10);
        switch(rand){
            case 1: thunder.addImage(thunder1);
            break;
            case 2: thunder.addImage(thunder2);
            break; 
            case 3: thunder.addImage(thunder3);
            break;
            case 4: thunder.addImage(thunder4);
            break;
            default: break;
        }
        thunder.scale = random(0.3,0.6)
    }

    if(thunderCreatedFrame + 10 ===frameCount && thunder){
        thunder.destroy();
    }

    umbrella.display();

    if (frameCount%1===0){
      particles.push(new Drop(random(0, 1300), 4,3));
    }
    
    for(var j = 0; j< particles.length; j++){
     particles[j].display();
      
    }
    drawSprites();
}   

