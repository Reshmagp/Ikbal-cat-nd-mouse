var canvas,bg;
var together;
var tom,tom1,tom2;
var jerry,jerry1,jerry2;
var tomImg1,tomImg2,tomImg3,tomImg4;
var jerryImg1,jerryImg2,jerryImg3,jerryImg4

function preload(){
bg=loadImage("garden.png");
tomImg1=loadAnimation("cat1.png");
tomImg2=loadAnimation("cat2.png","cat3.png");
tomImg3=loadAnimation("cat4.png");
jerryImg1=loadAnimation("mouse1.png");
jerryImg2=loadAnimation("mouse2.png","mouse3.png");
jerryImg3=loadAnimation("mouse4.png");
}

function setup(){
  canvas=createCanvas(1000,800);
  tom=createSprite(870,600);
  tom.addAnimation("tomSleeping",tomImg1)
  tom.scale=0.2;

  jerry=createSprite(200,600)
  jerry.addAnimation("jerryStanding",jerryImg1);
  jerry.scale=0.15;
}



function draw(){
  background(bg);
  if(tom.x-jerry.x < (tom.width - jerry.width)/2){
tom.velocityX=0;
tom.addAnimation("tomLastImage",tomImg3);
tom.scale=0.2;
tom.x=300;
tom.changeAnimation("tomLastImage")
jerry.addAnimation("jerry last image",jerryImg3);
jerry.scale=0.15;
jerry.changeAnimation("jerry last image");
  }
  
  
  
  drawSprites();
}

function keyPressed(){
if(keyCode===LEFT_ARROW){
tom.velocityX=-5;
tom.addAnimation("tomRunning",tomImg2);
tom.changeAnimation("tomRunning")

jerry.addAnimation("jerryTeasing",jerryImg2);
jerry.frameDelay=25;
jerry.changeAnimation("jerryTeasing");


}

}








