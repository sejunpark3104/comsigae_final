function setup() {
  createCanvas(1400, 1000); 
  background(0,102,204);  
  
} 

function draw() {
  
  //White Colored Items
  fill(255,255,255);
  strokeWeight(0);
  
      //Star shine white
      ellipse(50,450,70,70); //star 1
      ellipse(200,500,100,100); //star 2
      ellipse(400,100,110,110); //star 3
      ellipse(600,300,70,70); //star 4
      ellipse(650,550,180,180); //star 5
      ellipse(850,-20,120,120); //star 6
      ellipse(950,100,120,120); //star 7
  
    //Moon shine white
    ellipse(1200,200,300,300);
  
      //Star shine yellow
      fill(255,255,204);
      ellipse(50,450,45,45); //star 1
      ellipse(200,500,80,80); //star 2
      ellipse(400,100,90,90); //star 3
      ellipse(600,300,50,50); //star 4
      ellipse(650,550,40,40); //star 5
      ellipse(850,-20,100,100); //star 6
      ellipse(950,100,100,100); //star 7
  
      //Star center point
      fill(255,255,51);
      ellipse(50,450,20,20); //star 1
      ellipse(200,500,70,70); //star 2
      ellipse(400,100,80,80); //star 3
      ellipse(600,300,25,25); //star 4
      ellipse(650,550,25,25); //star 5
      ellipse(850,-20,50,50); //star 6
      ellipse(950,100,50,50); //star 7
  
    //The Moon
    fill(255,204,0);
    ellipse(1200,200,200,200);

    fill(255,255,204);
    ellipse(1230,180,150,150);
  
        //The Blue Mountains
        fill(051,051,102);
       ellipse(100,1100,500,500); //mountain 1
        ellipse(500,1100,800,400); //mountain 2
        ellipse(900,1100,1000,600); //mountain 3
        ellipse(1300,1100,900,700); //mountain 4
        ellipse(1500,900,600,600); //mountain 5
  
        //The Dark Castle
        fill(0);
        triangle(300,0,275,1000,345,1000);
        triangle(270,200,215,1000,300,1000);
        triangle(335,325,275,1000,380,1000);
        triangle(375,425,355,1000,400,1000);
        triangle(425,625,375,1000,500,1000);
          
  //Mouse interacction to simulate stroke affect
  strokeWeight(2);
  stroke(255);
  line(mouseX, mouseY, mouseX+5, mouseY-5);
  stroke(255,255,51);
  line(mouseX+10, mouseY+10, mouseX+15, mouseY+5);
  stroke(255,255,204);
  line(mouseX-10, mouseY-10, mouseX-5, mouseY-15);
  
  
}
