var playRoomImage,luandryRoomImage,houseImage, kitchenImage,livingRoomImage,bedroomImage, bathRoomImage;
var bg;
var gameState = 0
function preload(){
  playRoomImage =  loadImage("PlayRoom.jpg");
  luandryRoomImage =  loadImage("LuandryRoom.jpg");
  kitchenImage=  loadImage("Kitchen.jpg");
  livingRoomImage=  loadImage("LivingRoom.jpg ");
  bedroomImage=  loadImage("Bedroom.png");
  bathRoomImage=  loadImage("Bathroom.jpg");
  houseImage =  loadImage("bg.png");
  startButtonImage=loadImage("StartHere.png");
  nextButtonImage=loadImage("Arrow.png");
}

function setup() {
  createCanvas(windowWidth,windowHeight);

  bg = createSprite(width/2+200,height/2)
  
  startButton = createSprite(350,height/2-100)
  startButton.addImage(startButtonImage);

  nextButton = createSprite(width-200, height-100)
    nextButton.addImage(nextButtonImage);
    nextButton.scale=0.8

  nextButton1 = createSprite(width-200, height-200)
    nextButton1.addImage(nextButtonImage);
    nextButton1.scale=0.8
  
  nextButton2 = createSprite(width-200, height-300)
    nextButton2.addImage(nextButtonImage);
    nextButton2.scale=0.8

  nextButton3 = createSprite(width-200, height-400)
    nextButton3.addImage(nextButtonImage);
    nextButton3.scale=0.8
  
  nextButton4 = createSprite(width-200, height-500)
    nextButton4.addImage(nextButtonImage);
    nextButton4.scale=0.8

  nextButton5 = createSprite(width-200, height-600)
    nextButton5.addImage(nextButtonImage);
    nextButton5.scale=0.8
  
  nextButton6 = createSprite(width-200, height-700)
    nextButton6.addImage(nextButtonImage);
    nextButton6.scale=0.8
}

function draw() {
  background("white");

  if (gameState===0){
    textSize(40) 
    fill("black")
    text("You have been kidnapped!!!!",100,200)
    text("To escape the house,",100,250)
    text("Find the clues hidden in each room",100,300)
    text("Good Luck",100,350)

    bg.addImage(houseImage);
    bg.scale=2.7

    nextButton.visible= false;
    nextButton1.visible= false;
    nextButton2.visible= false;
    nextButton3.visible= false;
    nextButton4.visible= false;
    nextButton5.visible= false;
    nextButton6.visible= false;
    
    if(mousePressedOver(startButton)){
      gameState=1
    }
    console.log(1)
  }

  //Luandry Room
  if (gameState===1){
    bg.x= width/2
    bg.y= height/2
    bg.addImage(luandryRoomImage);
    bg.scale=3.3

    startButton.visible= false;
    nextButton.visible= true;
    nextButton1.visible= false;
    nextButton2.visible= false;
    nextButton3.visible= false;
    nextButton4.visible= false;
    nextButton5.visible= false;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton)&& count===1){
      count=2
      gameState=2
    }
    console.log(2)
  }

  // Living Room
  if (gameState===2){
    bg.x= width/2 
    bg.y= height/2+250
    bg.addImage(livingRoomImage);
    bg.scale=1.6

    startButton.visible= false;
    nextButton.visible= false;
    nextButton1.visible= true;
    nextButton2.visible= false;
    nextButton3.visible= false;
    nextButton4.visible= false;
    nextButton5.visible= false;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton1)&&count===1){
      count=2
      gameState=3
    }
    console.log(3)
  }

  // Kitchen
  if (gameState===3){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage( kitchenImage);
    bg.scale=2.2
    console.log(4)
    startButton.visible= false;
    nextButton.visible= false;
    nextButton1.visible= false;
    nextButton2.visible= true;
    nextButton3.visible= false;
    nextButton4.visible= false;
    nextButton5.visible= false;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton2)&& count===1){
      count=2
      gameState=4
    }
  }
  // Bathroom
  if (gameState===4){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage(bathRoomImage);
    bg.scale=2.2
    console.log(5)
    startButton.visible= false;
    nextButton.visible= false;
    nextButton1.visible= false;
    nextButton2.visible= false;
    nextButton3.visible= true;
    nextButton4.visible= false;
    nextButton5.visible= false;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton3)&& count===1){
      count=2
      gameState=5
    }
  }

  // Bedroom
  if (gameState===5){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage(bedroomImage);
    bg.scale=2.2
    console.log(6)
    startButton.visible= false;
    nextButton.visible= false;
    nextButton1.visible= false;
    nextButton2.visible= false;
    nextButton3.visible= false;
    nextButton4.visible= true;
    nextButton5.visible= false;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton4)&& count===1){
      count=2
      gameState=6
    }
  }

  // Play Room
  if (gameState===6){
    bg.x= width/2 
    bg.y= height/2-150
    bg.addImage( playRoomImage);
    bg.scale=2.2
    console.log(7)
    startButton.visible= false;
    nextButton.visible= false;
    nextButton1.visible= false;
    nextButton2.visible= false;
    nextButton3.visible= false;
    nextButton4.visible= false;
    nextButton5.visible= true;
    nextButton6.visible= false;
    count=1
    if(mousePressedOver(nextButton5)&& count===1){
      count=2
      gameState=0
    }
  }

  
  drawSprites();
}