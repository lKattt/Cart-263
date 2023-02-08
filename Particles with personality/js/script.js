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
var angle = 0;
let p;
let xoff = 2;
let r;
let g;
let b;

/**
Description of setup
*/
function setup() {
    createCanvas(1440, 1080);
    for(let i = 0; i < 400; i++){
        ball[i] = new Particle();
    }
    rectMode(CENTER);
    angleMode(DEGREES);
    colorMode(HSB, 100);
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
        //ball[i].connect(ball);
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
            this.xspeed -= 0.005;
            this.yspeed -= 0.005;
        } 
       this.x += this.xspeed;
       this.y += this.yspeed;
       print("working");
    }
    display() { 
        r = 100;
        g = map(noise(xoff), 0, 1, 0, 100);
        b = map(noise(xoff), 0, 1, 0, 100);
        noStroke();
        fill(g, 0, r);
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
    connect(particles){ 
        for(let i = 0; i < particles.length; i++){
        if (dist(particles[i].x, particles[i].y, this.x, this.y)) {
            
          }
        }
    }
}

/** blur
 * "filter(blur)"
 */