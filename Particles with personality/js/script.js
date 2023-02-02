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
    createCanvas(1080, 720);
    for(let i = 0; i < 900; i++){
        ball[i] = new Particle();
    }
    ellipseMode(CENTER);
    angleMode(DEGREES);
    frameRate(12);
    
}


/**
Description of draw()
*/
function draw() {
    background(50);
    for(let i = 0; i < ball.length; i++){
        ball[i].display();
     }
    
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = 10;
        this.diameter = 7;
    }
    move() { 
       this.x += noise(random(100,300), 0.003, 0.002);
       this.y += noise(0.003, random(255, 600), 0.002);
       print("working");
    }
    display() { 
        p = random(10, 25);
        c = lerp(this.x, this.y, 30);
        noStroke();
        fill(c);
        ellipse(this.x, this.y, p);
    }
}

/** blur
 * "filter(blur)"
 */