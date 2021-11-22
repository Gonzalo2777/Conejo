var garden,rabbit,apple,orangeLeaf;RedLeaf
var gardenImg,rabbitImg,appleImg,orangeImg;

function preload(){
  gardenImg = loadImage("garden.png");
  rabbitImg = loadImage("rabbit.png");
  appleImg = loadImage("apple.png");
 orangeImg = loadImage("orangeLeaf.png");
  redImg = loadImage("redImage.png"); 
}



function setup(){  

  createCanvas(400,400);

// Mover el fondo
garden=createSprite(200,200);
garden.addImage(gardenImg);

//crear sprite de rabbit (conejo)
rabbit = createSprite(180,340,30,30);
rabbit.scale =0.09;
rabbit.addImage(rabbitImg);
 
}

function createApples () {
  apple=createSprite(random(50,340),40,10,10);
  apple.addImage(appleImg);  
  apple.scale=0.08; 
  apple.velocityY=3;
  apple.lifetime=150;
  
}

function createOrange (){
  orangeLeaf=createSprite(random(50,350),40,10,10);
  orangeLeaf.addImage(orangeImg); 
  orangeLeaf.scale=0.07; 
  orangeLeaf.velocityY=3;
  orangeLeaf.lifetime=150;
}

function createRed (){
  RedLeaf=createSprite(random(50,360),40,10,10);
  RedLeaf.addImage(redImg); 
  RedLeaf.scale=0.07; 
  RedLeaf.velocityY=3;
  RedLeaf.lifetime=150;
}


function draw() {
  background(0);
  
  edges= createEdgeSprites();
  rabbit.collide(edges);
  rabbit.x = World.mouseX;

  drawSprites();

if (frameCount % 80===0){
  createApples();
  createOrange();
  createRed ()
}
  
}
