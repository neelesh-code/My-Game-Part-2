var play, playImage;
var jb, jbImage;
var smiley, smileyImage;

var boy1, boy2, boy3, boy4, boy5;
var boy1Image, boy2Image, boy3Image, boy4Image, boy5Image;
var flag=4;
var level2, level2Image;



var START=0;
var PLAY=1;
var END=2;
var gameState=0;

function preload(){
  playImage=loadImage("Images/Logistics/Play0.png");
  jbImage=loadImage("Images/Logistics/boyin jail1.gif");
  smileyImage=loadImage("Images/Logistics/Smiley.png");
  boy1Image=loadImage("Images/Puzzle1/Boy10.png");
  boy2Image=loadImage("Images/Puzzle1/Boy20.png");
  boy3Image=loadImage("Images/Puzzle1/Boy30.png");
  boy4Image=loadImage("Images/Puzzle1/Boy40.png");
  boy5Image=loadImage("Images/Puzzle1/Boy50.png");
  level2Image=loadImage("Images/Logistics/Next.png")

}

function setup() {
  createCanvas(1200,600);
  
  play=createSprite(475, 75, 50, 50);
  play.addImage(playImage);
  play.scale=0.2;

  jb=createSprite(800,300,50,50)
  jb.addImage(jbImage);
  jb.scale=0.9;

  boy1=createSprite(100,400,50,50);
  boy2=createSprite(340,400,50,50);
  boy3=createSprite(580,400,50,50);
  boy4=createSprite(820,400,50,50);
  boy5=createSprite(1060,400,50,50);

  boy1.addImage(boy1Image)
  boy2.addImage(boy2Image)
  boy3.addImage(boy3Image)
  boy4.addImage(boy4Image)
  boy5.addImage(boy5Image)

  boy1.visible=false;
  boy2.visible=false;
  boy3.visible=false;
  boy4.visible=false;
  boy5.visible=false;

  boy1.scale=0.9;
  boy2.scale=0.9;
  boy3.scale=0.9;
  boy4.scale=0.9;
  boy5.scale=0.9;

  level2=createSprite(1000,150,50,50);
  level2.addImage(level2Image);
  level2.scale=0.35;
  level2.visible=false;

}

function draw() {
  background(0,0,0);
  
  if(gameState===START){
    textSize(60);
    stroke ("white");
    fill ("white")
    text ("Brain Game",100,100);
    
    if(mousePressedOver(play)){
      gameState=1;
    }
  }
  
  if(gameState===1){
    jb.destroy();
    play.destroy();
    fill("white")
    textSize(20);
    text("There are 5 children who have a candy. All of them like the candy equally as much. After some time, one child somehow ", 50, 50);
    text("took everyone's candy. When the children were asked to show their hands, one child had all the candies. ", 125, 75);
    text("However, the child with all the candy was not the child who took all of the others' candies. Which child had all the candies? ", 42.5, 100);
    boy1.visible=true
    boy2.visible=true
    boy3.visible=true
    boy4.visible=true
    boy5.visible=true

    if(mousePressedOver(boy1) || mousePressedOver(boy3) || mousePressedOver(boy4) || mousePressedOver(boy5)){
     flag=3 
    }

    if(flag===3){
      text("Wrong",600,200);
    }

    if(mousePressedOver(boy2)){
      flag=5;
      
    }

    if(flag===5){
      text("Correct",600,200);
      level2.visible=true;
    }

    if(mousePressedOver(level2)){
      gameState=2;
    }
    

  }
  
  if(gameState===2){
    boy1.destroy();
    boy2.destroy();
    boy3.destroy();
    boy4.destroy();
    boy5.destroy();
    level2.destroy();
  }

  
  drawSprites();
}

