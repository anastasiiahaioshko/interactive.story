let x,y
let pageNum = 1; 
let numPages = 5; 
var song 

var xCoord1 = 0;
var yCoord1 = 0;
var xCoord2 = 0;
var yCoord2 = 0;

function setup() {
  createCanvas(400, 400);
  x = width / 2;
  y = height;
}

function preload(){
  song = loadSound("trombone.wav")
}
function draw() {
  if (pageNum == 1){
  background(4, 150, 255);
  //sun
  noStroke();
  fill(255, 246, 204);
  ellipse(x,y,110,110);
  //
  noStroke();
  fill(255, 242, 178);
  ellipse(x ,y,100,100);
  //
  noStroke();
   fill(255, 238, 153);
  ellipse(x,y,90,90);
  //
  noStroke();
   fill(255, 233, 127);
  ellipse(x,y,80,80);

  // Jiggling randomly on the horizontal axis
  x = x + random(-1, 1);
  // Moving up at a constant speed
  y = y - 1;
  
  // stop motion of sun
  if (y < 80) {
    y = 80;
  }  
  //MOUNTAINS
//further mountain
  fill(26, 67, 1);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);
  
  fill(115, 169, 66);
  strokeWeight(0);
	beginShape();
		vertex(360, 130);
		vertex(485, 246);
		vertex(390, 200);
		vertex(360, 250);
  	vertex(320, 217);
  	vertex(225, 255);
	endShape(CLOSE);
//closer one
  fill(36, 85, 1);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);
  
  fill(170, 213, 118);
  strokeWeight(0);
	beginShape();
		vertex(100, 180);
		vertex(225, 280);
		vertex(145, 250);
		vertex(120, 290);
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
    
    textSize(15);
    text("wait until sun wakes up",140,170);
    textSize(12);
    text("then press anywhere",150,390)
}
else if (pageNum == 2){
  background(4, 150, 255);
  fill(26, 67, 1);
  strokeWeight(0);
  triangle(450, -100, 760, 500, -40, 500);
  
  fill(36, 85, 1);
  strokeWeight(0);
  triangle(10, -20, 600, 450, -260, 550);
  
  fill(170, 213, 118);
  strokeWeight(0);
	beginShape();
		
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
  
  textSize(20);
text('too empty, isn`t it?', 110, 200);
  textSize(13);
  text("press anywhere to see a spring magic", 110,390);
  
  }
  else if (pageNum == 3){
    background(202, 240, 248);
  fill(26, 67, 1);
  strokeWeight(0);
  triangle(320, -120, 760, 500, -40, 500);
    
    fill(36, 85, 1);
  strokeWeight(0);
  triangle(10, -120, 600, 450, -260, 550);
    
var flowerX = random(400);
var flowerY = random(height);
var petalSize = random(20, 50);
  frameRate(2);
  fill(random(255), random(255), random(255));
  
  ellipse(flowerX - petalSize / 2, flowerY - petalSize / 2, petalSize);
  ellipse(flowerX + petalSize / 2, flowerY - petalSize / 2, petalSize);
  ellipse(flowerX - petalSize / 2, flowerY + petalSize / 2, petalSize);
  ellipse(flowerX + petalSize / 2, flowerY + petalSize / 2, petalSize);
  
  fill(random(255), random(255), random(255));
  
  ellipse(flowerX, flowerY, petalSize);
    
    fill(238, 96, 85);
    textSize(12);
    text("press anywhere too see sunset",130,390);
  }
  else if (pageNum == 4){
    rectMode(CENTER);
    frameRate(50);
    col = map(mouseY, 0, 400, 255, 0);
  background(30, col/2, col);
    
    //sun
  noStroke();
  fill(255, 240, 90);
  ellipse(200,mouseY,120,120);
  //
  noStroke();
  fill(255, 210, 90);
  ellipse(200,mouseY,110,110);
  //
  noStroke();
  fill(255, 170, 90);
  ellipse(200,mouseY,100,100);
  //
  noStroke();
   fill(255, 120, 90);
  ellipse(200,mouseY,90,90);
  //
  noStroke();
   fill(255, 120, 90);
  ellipse(200,mouseY,80,80);
    
    //MOUNTAINS
//further mountain
  fill(26, 67, 1);
  strokeWeight(0);
  triangle(360, 130, 760, 500, -40, 500);
  
  fill(115, 169, 66);
  strokeWeight(0);
	beginShape();
		vertex(360, 130);
		vertex(485, 246);
		vertex(390, 200);
		vertex(360, 250);
  	vertex(320, 217);
  	vertex(225, 255);
	endShape(CLOSE);
//closer one
  fill(36, 85, 1);
  strokeWeight(0);
  triangle(100, 180, 500, 500, -260, 500);
  
  fill(170, 213, 118);
  strokeWeight(0);
	beginShape();
		vertex(100, 180);
		vertex(225, 280);
		vertex(145, 250);
		vertex(120, 290);
  	vertex(70, 260);
  	vertex(-20, 286);
	endShape(CLOSE);
    
    textSize(13);
    text("good news: now you choose if you like day or a night!", 50,370);
    fill(255, 120, 90);
    text("do not press here!!!",130,390);
  }
  else if (pageNum == 5){
    background(251, 133, 0);
    song.play(0);
    fill(51, 161, 253);
    textSize(30);
    text("OH NO, I TOLD YOU !!!", 35,200);
    textSize(19);
    text("to get rid of the sound press quickly anywhere!",5,300);
    
    
  xCoord2 = 0;
  yCoord2 = height / 2;
    
    for (var i = 0; i < 20; i++) {
    xCoord1 = xCoord2;
    yCoord1 = yCoord2;
    xCoord2 = xCoord1 + int(random(-20, 20));
    yCoord2 = yCoord1 + int(random(-10, 20));
    strokeWeight(random(1, 3));
    strokeJoin(MITER);
    line(xCoord1, yCoord1, xCoord2, yCoord2);
frameRate(20);
      if ((xCoord2 > width) | (xCoord2 < 0) | (yCoord2 > height) | (yCoord2 < 0)) {
      clear();
      xCoord2 = int(random(0, width));
      yCoord2 = 0;
      stroke(255, 255, random(0, 255));
    }
  }
  }
  
}
  
function mousePressed(){
  
  if (pageNum < numPages){
    pageNum++;
  }
  
 
  else{
    pageNum = 1;
  }
  
  
  console.log(pageNum);
}
