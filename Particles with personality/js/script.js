/**
Process of waking up
Author: Katt

/**Things to do
 * make particle system
 * make particles float in a circle
 * colour
 * shape
 * mouse interaction
 */


let ball = [];
let c;
let r = 2;
var angle = 0;
let p;

/**
Description of setup
*/
function setup() {
    createCanvas(1440, 1080);
    for(let i = 0; i < 900; i++){
        ball[i] = new Particle();
    }
    ellipseMode(CENTER);
    angleMode(DEGREES);
    frameRate(60);
    
}


/**
Description of draw()
*/
function draw() {
    background(50);
    translate(width/2, height/2);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
        ball[i].move();
     }
    
}

class Particle {
    constructor() {
        this.x = random(width/2);
        this.y = random(height/2);
        this.xspeed = 1;
        this.yspeed = 1;
        this.diameter = 7;
    }
    move() { 
       if(this.x < -width/2 || this.x > width/2) {
        this.xspeed *= -1;
       }
       if (this.y -height/2 || this.y > height) {
        this.yspeed *= -1;
       }
       this.x += this.xspeed;
       this.y += this.yspeed;
       print("working");
    }
    display() { 
        p = random(10, 11);
        c = color(this.x, this.y);
        noStroke();
        fill(c);
        ellipse(this.x, this.y, 10);
        
        rotate(TWO_PI/7);
    }
}

/** blur
 * "filter(blur)"
 */