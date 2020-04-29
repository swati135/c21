var movingRect, fixedRect;

function setup() {
  createCanvas(800,400);
  movingRect=  createSprite(400, 200, 50, 50);
  fixedRect = createSprite(400,100,50,80);

  movingRect.shapeColor = "green";
  fixedRect.shapeColor ="green";

  movingRect.debug = true;
  fixedRect.debug = true;
  
   gameobject1 = createSprite(100,200,50,80);
  gameobject1.shapeColor= "green";

  gameobject2 = createSprite(100,300,50,80);
  gameobject2.shapeColor= "green";

  gameobject3 = createSprite(300,200,50,80);
  gameobject3.shapeColor= "green";

  gameobject4 = createSprite(300,300,50,80);
  gameobject4.shapeColor= "green";


}

function draw() {
  background(0);  
  
  gameobject1.x = mouseX;
  gameobject2.y = mouseY;

  
  isTouching (gameobject1,gameobject2);
  
  if(movingRect.x - fixedRect.x <= movingRect.width/2+ fixedRect.width/2 &&
      fixedRect.x -movingRect.x <= movingRect.width/2+fixedRect.width/2
    ){
    movingRect.shapeColor = "cyan";
    fixedRect.shapeColor ="cyan";
  } 
  else {
    movingRect.shapeColor = "green";
    fixedRect.shapeColor ="green";

  }

  drawSprites();
}
