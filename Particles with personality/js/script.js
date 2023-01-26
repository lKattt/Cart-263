/**
Process of waking up
Author: Katt

"use strict";
*/

let ball;

/**
Description of setup
*/
function setup() {
    createCanvas(500, 720);
    ball = new Particle();
}


/**
Description of draw()
*/
function draw() {
    background(50);
    ball.display();
    ball.move();
    
}

class Particle {
    constructor() {
        this.x = width/2;
        this.y = height/2;
        this.speed = 2;
    }
    display() { 
        fill(mouseX, mouseY, );
        ellipse(this.x, this.y, 10);
    }
    move() {
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
    }
    hover() {
    
    }
}
