var car,Ecar1,Ecar2,finished;
var track;
var parking,finish;
var stopper1,stopper2,stopper3,stopper4,stopper5,stopper6;
var life;
function preload(){
  track = loadImage("images/track_1.jpg");
  car_img = loadImage("images/car5.jpg");
  car2_img = loadImage("car7.jpg");
  ecar_img = loadImage("images/car6.jpg");
  nail_img = loadImage("images/nail_bed.jpg"); 
}

function setup(){
    life = 5;
    console.log(displayWidth + " " + displayHeight);
    canvas = createCanvas(displayWidth,displayHeight);
    finished = createElement('h1');
    stopper1 = createSprite(570,800,100,100);
    stopper1.setCollider("rectangle",0,0,100,100);
    stopper1.addImage("nail_bed",nail_img);
    stopper2 = createSprite(470,1300,100,100);
    stopper2.setCollider("rectangle",0,0,100,100);
    stopper2.addImage("nail_bed",nail_img);
    stopper3 = createSprite(600,1800,100,100);
    stopper3.setCollider("rectangle",0,0,100,100);
    stopper3.addImage("nail_bed",nail_img);
    stopper4 = createSprite(950,2200,100,100);
    stopper4.setCollider("rectangle",0,0,100,100);
    stopper4.addImage("nail_bed",nail_img);
    stopper5 = createSprite(550,2500,100,100);
    stopper5.setCollider("rectangle",0,0,100,100);
    stopper5.addImage("nail_bed",nail_img);
    stopper6 = createSprite(750,3000,100,100);
    stopper6.setCollider("rectangle",0,0,100,100);
    stopper6.addImage("nail_bed",nail_img);
    car = createSprite(570,50,50,50);
    car.addImage("car",car_img);
    Ecar1 = createSprite(00,810,50,50);
    Ecar1.addImage("ecar",ecar_img);
    Ecar2 = createSprite(300,1800,50,50);
    Ecar2.addImage("ecar",ecar_img);
}

function draw(){
    background(0);
    image(track,0,-300,displayWidth,displayHeight*6);
    console.log("random placed car1",Ecar1.x + " "+Ecar1.y);
    console.log("random placed car2",Ecar2.x + " "+Ecar2.y);
    stroke("red");
    fill("white");
    text("LIFECOUNT  "+life,car.x,car.y-150);
    if (keyIsDown(DOWN_ARROW) && life>0) {
        car.y = car.y+20;
        camera.position.x = displayWidth/2;
        camera.position.y = car.y;
        if (car.y > 4050) {
            car.y=4050;
        }
    }
    else if (keyIsDown(RIGHT_ARROW) && life>0) {
        car.x = car.x+20;
        car.y = car.y+20;
        camera.position.x = displayWidth/2;
        camera.position.y = car.y;
        if (car.y > 4050) {
            car.y=4050;
        }
    }
    else if (keyIsDown(LEFT_ARROW) && life>0) {
        car.x = car.x-20;
        car.y = car.y+20;
        camera.position.x = displayWidth/2;
        camera.position.y = car.y;
        if (car.y > 4050) {
            car.y=4050;
        }
    }

    if (car.y > 4040) {
        stroke("red");
        fill("red");
        finished.html("Finished !!!!!!!!");
        finished.position(displayWidth/2 - 70, displayHeight/2+100);
    }
    
    if (car.x<290) {
        car.x = 340;
    }

    if (car.x>1080) {
        car.x = 1030;
    }

    if ((isTouching(car,stopper1)) || (isTouching(car,stopper2)) ||(isTouching(car,stopper3)) ||(isTouching(car,stopper4) )
        ||(isTouching(car,stopper5))||(isTouching(car,stopper6))||(isTouching(car,Ecar1))||(isTouching(car,Ecar2))) {
        console.log("DIED !!!!!");
             
        life = life-1
        if (life<=0) {
            console.log("DIED Completly!!!!!");
            car.addImage("car",car2_img);
            stroke("white");
            fill("white");
            text("YOU ARE A GHOST NOW",car.x-50,car.y-90);
        }else{
            car.x = 200;
            car.y = 10;   
        }
        camera.position.x = displayWidth/2;
        camera.position.y = car.y;
    }
   
    drawSprites();
}
