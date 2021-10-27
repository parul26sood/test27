var fishingRod;
var fishingRodImg;
var fisherman, fishermanImg
var bg
var fLineLength
var hook, hookPos = 862, hookPosY = 672;
var deepSea;
var bluepurpleFish
var fishGroup
var crabImg
var hookINS
function preload() {
  fishingRodImg = loadImage("assets/FishingRod.png");
  //bg=createImg("./assets/background.gif");
   bg = loadImage("./assets/background.gif");
  fishermanImg = loadImage("./assets/fishingBoat2.png")
  hook = loadImage("./assets/hook.png")
  deepSea = loadImage("./assets/deepSea.png")
  bluepurpleFish = loadImage("./assets/blue-purpleFish.png")

}
function setup() {
  createCanvas(windowWidth, windowHeight);
  // fishingRod = createSprite(windowWidth/2+200,windowHeight/2-200,10,10);
  fisherman = createSprite(1050, 880, 10, 10);
  hookINS = createSprite(902, 800, 100, 100);
  hookINS.addImage(hook);
  hookINS.scale = 0.3
  //fishingRod.addImage(fishingRodImg);
  fisherman.addImage(fishermanImg);
  fLineLength = 56;
  fishGroup = new Group();

}

function draw() {
 background(50)
  camera.position.y=hookPos

  image(bg, 0, 0, width, height);

   image(deepSea, 0, 1050, width, height);
   rodLength()
    if(frameCount%100==0){
   fish(0,1200);
   }
   hookINS.isTouching(fishGroup,removeFish)
    fishGroup.depth +=100
   fishGroup.setVelocityXEach(10)
  drawSprites();
}

//FUNCTIONS

//changing rod length
function rodLength() {
  fill("red");
  if (keyIsDown(UP_ARROW) && fLineLength >= 0) {
    fLineLength -= 2
  }

  if (keyIsDown(DOWN_ARROW) && fLineLength <= 872) {
    fLineLength += 2
  }
  rect(910, 672, 2, fLineLength);

  hookPos = 672 + fLineLength
  hookPosY = 862
  hookINS.y = hookPos;

}

function fish(x, y) {
  var fish = createSprite(x, y, 80, 80);
  fishGroup.add(fish);
  if (fish.position.x > 1000) {
    fish.position.x = x;
  }
}

function removeFish(hookINS, fish) {

  console.log(fish);
  fish.remove();


}

