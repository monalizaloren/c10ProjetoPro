var sea,ship;
var seaImg,shipImg;

function preload(){
  //Utilize 'loadImage' para carregar uma imagem
  seaImg = ????("sea.png");
  //Utilize 'loadAnimation' para carregar uma animação
  shipImg1 = ???("ship-1.png","ship-1.png",
                            "ship-2.png","ship-1.png");
}

function setup(){
  //Utilize o codigo que cria um canva
  ???(400,400);
  background("blue");

  
  sea=createSprite(400,200);
  sea.addImage(seaImg);
  sea.velocityX = -5;
  //Defina o tamanho do mar para 0.3
  ???

  
  ship = createSprite(130,200,30,30);
  ship.addAnimation("movingShip",shipImg1);
  //Defina o tamanho do barco para 0.25
  ???
  
}

function draw() {
  background(0);
  sea.velocityX = -3;

  
  //código para redefinir o fundo
  if(sea.x < 0){
    sea.x = sea.width/8;
  }
    
  drawSprites();
}