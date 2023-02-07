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
    for(let i = 0; i < 700; i++){
        ball[i] = new Particle();
    }
    rectMode(CENTER);
    angleMode(DEGREES);
    frameRate(60);
    background(0, 0, 0, 10);
}


/**
Description of draw()
*/
function draw() {
    translate(width/2, height/2);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
        ball[i].move();
        ball[i].bounds();
    }
    background(0, 0, 0, 10);
}

class Particle {
    constructor() {
        this.x = random(width/2);
        this.y = random(height/2);
        this.xspeed = 0;
        this.yspeed = 0;
        this.diameter = 40;
    }
    move() { 
        if (mouseX <= this.xspeed || mouseY <= this.yspeed) {
            this.xspeed -= 0.1;
            this.yspeed -= 0.1;
        } 
       this.x -= this.xspeed;
       this.y -= this.yspeed;
       print("working");
    }
    display() { 
        p = random(10, 11);
        noStroke();
        fill(20, 10, 100, 150);
        rect(this.x, this.y, this.diameter, 40);
        rotate(PI/3);
    }
    bounds() {
        if(this.x < -width/2 || this.x > width/2) {
            this.xspeed *= -1;
        }
           if (this.y < -height/2 || this.y > height/2) {
            this.yspeed *= -1;
        }
    }
}

/** blur
 * "filter(blur)"
 */