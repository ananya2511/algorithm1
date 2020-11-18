var fixedrect, movingrect
function setup() {
  createCanvas(800,400);
  fixedrect=createSprite(100,150,50,100)
  movingrect=createSprite(100,130,50,100)
  fixedrect.shapeColor="white";
  movingrect.shapeColor="red";
  fixedrect.debug=true;
  movingrect.debug=true;
}

function draw() {
  background(0,0,0);  
  drawSprites();
  movingrect.x=mouseX;
  movingrect.y=mouseY;
  if(movingrect.x-fixedrect.x<fixedrect.width/2+movingrect.width/2&&
    fixedrect.x-movingrect.x<movingrect.width/2+fixedrect.width/2&&
    movingrect.y-fixedrect.y<fixedrect.height/2+movingrect.height/2&&
    fixedrect.y-movingrect.y<movingrect.height/2+fixedrect.height/2){
  fixedrect.shapeColor="pink";
  movingrect.shapeColor="blue";
  }
  else {
    movingrect.shapeColor="red";
    fixedrect.shapeColor="white";
  }
}
