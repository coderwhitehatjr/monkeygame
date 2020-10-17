var monkey, monkey_running
var banana, bananaImage 
var foodGroup, obstacleGroup
var score
var ground
var obstacle, obstacleImage

var survivalTime = 0

function preload() {


  monkey_running = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png")

  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");

}



function setup() {


  monkey=createSprite(80, 315, 20, 20)
  monkey.addAnimation("moving", monkey_running);
  monkey.scale = 0.1

console.log(monkey.y)
  foodGroup = new Group();
  obstacleGroup = new Group();


  drawSprites();
}


function draw() {
  createCanvas(600,400)
  background("white")
  
  stroke("white")
  textSize(20)
  fill("white")
  text("Score:"+ score,500,500);
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate())
  text("Survival Time:"+ survivalTime,100,50)
  
  
  
    monkey.velocityY = monkey.velocityY + 0.4
  
  
  ground = createSprite(450, 350, 900, 10)
  ground.velocityX = -4
  ground.x = ground.width / 2;
  
  monkey.collide(ground)
  
  if(keyDown("space") && monkey.y>= 312){
    monkey.velocityY = -12
  }
  
  food();
  obstacles();
  

  drawSprites();

}

function food(){
  if(frameCount % 80 === 0 ){
   var banana = createSprite(600,120,40,10)
   banana.y = Math.round(random(80,150));
   banana.addImage(bananaImage) 
   banana.velocityX = -4
   banana.lifetime = 150
  banana.scale = 0.2
  foodGroup.add(banana);
    
  }
  
}

function obstacles(){
  if(frameCount % 150 === 0 ){
  var  obstacle = createSprite(600,310,40,10)
    obstacle.addImage(obstacleImage)
    obstacle.velocityX = -4
    obstacle.scale = 0.2
    obstacle.lifetime = 150
  obstacleGroup.add(obstacle);
  }  
  
  
}