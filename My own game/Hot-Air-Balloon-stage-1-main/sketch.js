var bg, bgImg
var bottomGround
var topGround
var boy, boyImg
var ob1,ob2,ob3,z2,z1


function preload(){
bgImg = loadImage("assets/background.jpg");
boyImg = loadAnimation("assets/run1.png","assets/run2.png","assets/run3.png","assets/run4.png","assets/run5.png");
zImg=loadImage("assets/Big zombie.jpg");
zImg2=loadImage("assets/Zombie.jpg");
obImg1=loadImage("assets/Cactus2.webp");
obImg2=loadImage("assets/Cactus.png");
obImg3=loadImage("assets/obs.jpg");

}

function setup(){

  createCanvas(700,700)
//background image
bg = createSprite(185,355);
bg.addImage(bgImg);
bg.scale = 2

//creating top and bottom grounds
bottomGround = createSprite(200,650,800,20);
bottomGround.visible = false;

//topGround = createSprite(200,10,800,20);
//topGround.visible = false;
      
//creating boy     
boy = createSprite(100,600,20,200);
boy.addAnimation("boy",boyImg);
boy.scale = 0.2;



}

function draw() {
  
  background("black");
        
          //making the hot air balloon jump
          //if(keyDown("space")) {
            //balloon.velocityY = -6 ;
            
          //}

          //adding gravity
           //balloon.velocityY = balloon.velocityY + 2;
          bg.velocityX=-5
          if(bg.x<100){
            bg.x=bg.width/2
          }
          obstacle()
          
        drawSprites();
        
}
function obstacle(){
  if(frameCount % 60===0){
    var obstacles =createSprite(600,150,10,40)
    obstacles.velocityX=-5
    
    var rand=Math.round(random(1,5));
    switch (rand){
      case 1: obstacles.addImage("c1",obImg1);
        break;
        case 2: obstacles.addImage("c2",obImg2);
        break;
        case 3: obstacles.addImage(obImg3);
        break;
        case 4: obstacles.addImage(zImg);
        break;
        case 5: obstacles.addImage(zImg2);
        break;
        default:break;
    }
  }
}