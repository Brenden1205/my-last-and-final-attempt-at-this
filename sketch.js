var garden,rabbit;
var gardenImg,rabbitImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png")
  orangeImg =  loadImage("orangeLeaf.png")
  redImg = loadImage("redImage.png")
}

function setup(){
  
  createCanvas(400,400);
  
// Moving background
garden=createSprite(200,200);
garden.addImage(gardenImg);

//creating boy running
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
}


function draw() {
  background(0);
  rabbit.x=mouseX
  edges= createEdgeSprites();
  rabbit.collide(edges);

  var select=Math.round(random(1,3))
  if(frameCount%80===0){
    if(select===1){
      apples()
    }
    else if(select===2){
      oranges()
    }
    else{
      redleaf()
    }
  }

  drawSprites();

}
function apples(){
  apple=createSprite(random(50,350),40,10,10)
apple.addImage(appleImg)
apple.scale=0.07
apple.velocityY=3
apple.lifetime=150
}

function oranges(){
  orangeL=createSprite(random(50,350),40,10,10)
orangeL.addImage(orangeImg)
orangeL.scale=0.07
orangeL.velocityY=3
orangeL.lifetime=150
}

function redleaf(){
  redL=createSprite(random(50,350),40,10,10)
redL.addImage(redImg)
redL.scale=0.07
redL.velocityY=3
redL.lifetime=150
}