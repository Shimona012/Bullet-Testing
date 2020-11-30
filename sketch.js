  var wall,thickness;
  var bullet,speed,weight;
  //var deformation;


  

  function setup() {
    createCanvas(1600,400);
    
    speed=random(223,321);
    thickness=random(22,83);
    weight=random(30,52);

    bullet=createSprite(50,200,50,10);
    wall=createSprite(1200,200,thickness,height/2);

    wall.shapeColor= color (230,230,230);
    //car.shapeColor="black";

    bullet.velocityX=speed;
   bullet.shapeColor=color(255);
  
  }

function thickness(){
thickness=random(22,83);



}
  function draw() {
    // change the background color to black
    background(0);  

  /*if (wall.x-car.x<(car.width+wall.width)/2){
     car.velocityX=0;
     var deformation=0.5*weight*speed*speed/22500;
     
  if (deformation>180){

    car.shapeColor = color(255,0,0);
  }

  if (deformation<180 && deformation >100){
    car.shapeColor= color(230,230,0);

  }
  if (deformation<100){
    car.shapeColor= color (0,255,0);
  }
  }
  
*/
if(hasCollided(bullet,wall)){
  bullet.velocityX=0;
  var damage=0.5*weight*speed*speed/(thickness*thickness*thickness);

  if(damage>10){
    wall.shapeColor=color(255,0,0);
  }
  if(damage<10){
    wall.shapeColor=color(0,255,0);
  }
}

    drawSprites();
   fill("white");
   stroke("blue"); 
   textSize(30);
   text("Wall And Bullet Test!",800,100)
  }
  function hasCollided(lbullet,lwall)
{

bulletRightEdge=lbullet.x+lbullet.width;
wallLeftEdge=lwall.x;
if(bulletRightEdge>=wallLeftEdge)
{
return true
}
return false;
}