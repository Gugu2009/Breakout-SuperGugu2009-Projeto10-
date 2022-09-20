var p5Inst = new p5(null, 'sketch');

window.preload = function () {
  initMobileControls(p5Inst);

  p5Inst._predefinedSpriteAnimations = {};
  p5Inst._pauseSpriteAnimationsByDefault = false;
  var animationListJSON = {"orderedKeys":[],"propsByKey":{}};
  var orderedKeys = animationListJSON.orderedKeys;
  var allAnimationsSingleFrame = false;
  orderedKeys.forEach(function (key) {
    var props = animationListJSON.propsByKey[key];
    var frameCount = allAnimationsSingleFrame ? 1 : props.frameCount;
    var image = loadImage(props.rootRelativePath, function () {
      var spriteSheet = loadSpriteSheet(
          image,
          props.frameSize.x,
          props.frameSize.y,
          frameCount
      );
      p5Inst._predefinedSpriteAnimations[props.name] = loadAnimation(spriteSheet);
      p5Inst._predefinedSpriteAnimations[props.name].looping = props.looping;
      p5Inst._predefinedSpriteAnimations[props.name].frameDelay = props.frameDelay;
    });
  });

  function wrappedExportedCode(stage) {
    if (stage === 'preload') {
      if (setup !== window.setup) {
        window.setup = setup;
      } else {
        return;
      }
    }
// -----

//Serve,Play,End

var GameState = "Serve";

// Criação Sprites Blocos
var box1 = createSprite(25, 75, 50, 50);
box1.shapeColor="Orange";
var box2 = createSprite(75, 75, 50, 50);
box2.shapeColor="fuchsia";
var box3 = createSprite(125, 75, 50, 50);
box3.shapeColor="Orange";
var box4 = createSprite(175, 75, 50, 50);
box4.shapeColor="fuchsia";
var box5 = createSprite(225, 75, 50, 50);
box5.shapeColor="Orange";
var box6 = createSprite(275, 75, 50, 50);
box6.shapeColor="fuchsia";
var box7 = createSprite(325, 75, 50, 50);
box7.shapeColor="Orange";
var box8 = createSprite(375, 75, 50, 50);
box8.shapeColor="fuchsia";
var box9 = createSprite(25, 125, 50, 50);
box9.shapeColor="fuchsia";
var box10 = createSprite(75, 125, 50, 50);
box10.shapeColor="Orange";
var box11 = createSprite(125, 125, 50, 50);
box11.shapeColor="fuchsia";
var box12 = createSprite(175, 125, 50, 50);
box12.shapeColor="Orange";
var box13 = createSprite(225,125, 50, 50);
box13.shapeColor="fuchsia";
var box14 = createSprite(275, 125, 50, 50);
box14.shapeColor="Orange";
var box15 = createSprite(325, 125, 50, 50);
box15.shapeColor="fuchsia";
var box16 = createSprite(375, 125, 50, 50);
box16.shapeColor="Orange";

//Raquete Sprite
var Paddle=createSprite(200,390,100,20);
Paddle.shapeColor = "gold";

//Sprite Bola
var Ball=createSprite(200,200,20,20);
Ball.shapeColor = "white";

//Bordas
createEdgeSprites();

var score = 0;

function draw() {
  
  //Fundo
  background("black");

  // Pontuação
  
  fill("white");
  textSize(30),
  text("Pontuação:" + score,108,30); 
  
  //Começo
  if (GameState == "Serve") {
  textSize(20);
  text("Bem Vindo ! Clique Enter Para Jogar !",35,250);
  if (keyDown("ENTER")) {
  Ball.velocityX = 7 ;
  Ball.velocityY = 6 ;
  GameState = "Play";
  }
  }
  
  //Jogo
  if (GameState == "Play") {
  // Movimento Raquete
  Paddle.x= World.mouseX;
  if (Ball.isTouching(bottomEdge)) {
  GameState = "End(Game Over)";
  }
  if (score == 80) {
    GameState = "End(You Win)";
  }
  
  }
  //Fim (Game Over)
  if (GameState == "End(Game Over)") {
  Ball.velocityX = 0; 
  Ball.velocityY = 0;
  textSize(30);
  text("Você Perdeu !",110,225);
  }
  // Fim (You Win)
  if (GameState == "End(You Win)") {
  Ball.velocityX = 0; 
  Ball.velocityY = 0;
  textSize(30);
  text("Você Ganhou !",110,225);
  }
  
  
  
  // Bola Quicar
  Ball.bounceOff(Paddle);
  Ball.bounceOff(leftEdge);
  Ball.bounceOff(topEdge);
  Ball.bounceOff(rightEdge);
  
  // Destruir Blocos
  
  if(Ball.isTouching(box1)){
    Ball.bounceOff(box1);
    box1.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box2)){
    Ball.bounceOff(box2);
    box2.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box3)){ 
    Ball.bounceOff(box3);
    box3.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box4)){
    Ball.bounceOff(box4);
    box4.destroy();
    score = score + 5;
  }
  
   if(Ball.isTouching(box5)){ 
     Ball.bounceOff(box5);
     box5.destroy();
     score = score + 5;
  }
  
   if(Ball.isTouching(box6)) {
     Ball.bounceOff(box6);
     box6.destroy();
     score = score + 5;
  }
  
  if(Ball.isTouching(box7)) { 
    Ball.bounceOff(box7);
    box7.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box8)){
    Ball.bounceOff(box8);
    box8.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box9)){
    Ball.bounceOff(box9);
    box9.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box10)){
    Ball.bounceOff(box10);
    box10.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box11)){ 
    Ball.bounceOff(box11);
    box11.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box12)){
    Ball.bounceOff(box12);
    box12.destroy();
    score = score + 5;
  }
  
   if(Ball.isTouching(box13)){ 
     Ball.bounceOff(box13);
     box13.destroy();
     score = score + 5;
  }
  
   if(Ball.isTouching(box14)) {
     Ball.bounceOff(box14);
     box14.destroy();
     score = score + 5;
  }
  
  if(Ball.isTouching(box15)) { 
    Ball.bounceOff(box15);
    box15.destroy();
    score = score + 5;
  }
  
  if(Ball.isTouching(box16)){
    Ball.bounceOff(box16);
    box16.destroy();
    score = score + 5;
  }
  drawSprites();
}



// -----
    try { window.draw = draw; } catch (e) {}
    switch (stage) {
      case 'preload':
        if (preload !== window.preload) { preload(); }
        break;
      case 'setup':
        if (setup !== window.setup) { setup(); }
        break;
    }
  }
  window.wrappedExportedCode = wrappedExportedCode;
  wrappedExportedCode('preload');
};

window.setup = function () {
  window.wrappedExportedCode('setup');
};
