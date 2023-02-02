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

/**
Description of setup
*/
function setup() {
    createCanvas(1080, 720);
    for(let i = 0; i < 50; i++){
        ball[i] = new Particle();
    }
    angleMode(DEGREES);
    frameRate(24);
}


/**
Description of draw()
*/
function draw() {
    background(50);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
        ball[i].move();
     }
    
}

class Particle {
    constructor() {
        this.x = random(width/r);
        this.y = random(height/r);
        this.speed = 10;
    }
    move() {
       this.x += random(r + sin(angle));
       this.y += random(r + cos(angle));
        angle++;
    }
    display() { 
        if (this.x >= pmouseX && this.y >= pmouseY) {
            c = color(0, 75, 200);
            print(mouseX, mouseY);
        } else {
            c = color(150, 0, 0);
        }
        noStroke();
        fill(c);
        ellipse(this.x, this.y, 10);
    }
}

/** blur
 * "filter(blur)"
 */