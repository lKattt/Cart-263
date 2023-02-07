/**
Process of waking up
Author: Katt

/**Things to do
 * make particle system || check
 * make particles float in a circle || done
 * colour || get colours to shift when mouse hovers
 * shape
 * mouse interaction
 */


let ball = [];
let c;
let r = 2;
var angle = 0;
let p;
let xoff = 0;

/**
Description of setup
*/
function setup() {
    createCanvas(1440, 1080);
    for(let i = 0; i < 900; i++){
        ball[i] = new Particle();
    }
    rectMode(CENTER);
    angleMode(DEGREES);
    frameRate(60);
    
}


/**
Description of draw()
*/
function draw() {
    background(0);
    translate(width/2, height/2);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
        ball[i].move();
        ball[i].bounds();
    }
    
}

class Particle {
    constructor() {
        this.x = random(width/2);
        this.y = random(height/2);
        this.xspeed = 1;
        this.yspeed = 1;
        this.diameter = 200;
    }
    move() { 
        if (mouseX > width/2 && mouseY > height/2) {
            this.xspeed--;
            this.yspeed--;
        }
       this.x += this.xspeed;
       this.y += this.yspeed;
       print("working");
    }
    display() { 
        p = random(10, 11);
        noStroke();
        fill(c, 100, 100);
        rect(this.x, this.y, this.diameter, 2);
        rotate(PI/7);
    }
    bounds() {
        if(this.x < -width%2 || this.x > width/2) {
            this.xspeed *= -1;
           }
           if (this.y -height/2 || this.y > height) {
            this.yspeed *= -1;
           }
    }
}

/** blur
 * "filter(blur)"
 */