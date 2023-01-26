/**
Process of waking up
Author: Katt

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//"use strict";

let ball = [];

/**
Description of setup
*/
function setup() {
    createCanvas(1080, 720);
    for(let i = 0; i < 50; i++){ 
        ball[i] = new Particle();
    }
}


/**
Description of draw()
*/
function draw() {
    background(50);
    for(let i = 0; i < ball.length; i++){ 
        ball[i].move();
        print(ball[i].x);
    }
    
}

class Particle {
    constructor() {
       this.x = random(width);
       this.y = random(height);
       this.speed = 5;
       this.diameter = random(50);
       this.speedMin = 2;
       this.speedMax = 10;
    }
    move() {
        this.speed = map(mouseY, 0, height, this.speedMin, this.speedMax);
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        fill(this.x, this.y, this.diameter, mouseY);
        ellipse(this.x, this.y, this.diameter);
    }
}