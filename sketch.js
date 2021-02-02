var bg,bgImage
function preload(){
    bgImage=loadImage('house.png')
    boyImage=loadAnimation('b1.png','b2.png','b3.png','b4.png','b5.png','b6.png')
    boyl=loadAnimation('b1l.png','b2l.png','b3l.png','b4l.png','b5l.png','b6l.png')
    boyS=loadImage('b3.png')
    boyW=loadImage('b3l.png')
}
function setup(){
    createCanvas(1200,600)
    //bg=createSprite(1200,1200)
    //bg.addImage(bgImage)
    boy=createSprite(600,160,10,10);
  
    boy.addImage('walking',boyS)
    boy.scale=0.5
    InvisibleGround=createSprite(560,570,width,10)
    InvisibleGround=createSprite(200,370,width/3,10)
    InvisibleGround=createSprite(750,370,width/3,10)
    InvisibleGround=createSprite(560,570,width,10)


}
function draw(){
    background(bgImage)
    if(keyDown('LEFT_ARROW')){
        boy.x=boy.x-5;
        boy.addAnimation('walking',boyl)
    }
    if(keyDown('RIGHT_ARROW')){
        boy.x=boy.x+5;
        boy.addAnimation('walking',boyImage)
    }
    if(keyDown('DOWN_ARROW')){
        boy.y=boy.y+5;
        boy.addAnimation('walking',boyImage)
    } 
    if(keyDown('UP_ARROW')){
        boy.y=boy.y-5;
        boy.addAnimation('walking',boyImage)
    }
    boy.collide(InvisibleGround)
    drawSprites();
}