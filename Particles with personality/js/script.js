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
    background(50);
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
        this.xspeed = 2;
        this.yspeed = 1;
        this.diameter = 500;
    }
    move() { 
       this.x += this.xspeed;
       this.y += this.yspeed;
       print("working");
    }
    display() { 
        p = random(10, 11);
        if (this.x > mouseX || this.y > mouseY) {
            c = color(90, 100, 200, 250);
        } else if (this.x < mouseX || this.y < mouseY) {
            c = color(100, 3, 200);
        }
        noStroke();
        fill(c);
        rect(this.x, this.y, this.diameter, 2);
        rotate(PI/7);
        xoff += 0.001;
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