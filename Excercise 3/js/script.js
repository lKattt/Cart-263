/**
Object oriented coding
Author Katt

This is a template. You must fill in the title,
author, and this description to match your project!
*/

//"use strict";

let ball = []; //declare object 
let particle2 = [];


function setup() {
    createCanvas(400, 400);
    for(let i = 0; i < 50; i++){ 
        ball[i] = new Particle();
        particle2[i] = new Particle();
    }
    
}

function draw() {
    background(50);
    for(let i = 0; i < ball.length; i++){ 
        ball[i].move();
        particle2[i].move();
        print(ball[i].x);
    }
    if(mouseIsPressed && mouseX >= this.x - this.size/2 && mouseX <= this.x + this.size/2 && mouseY >= this.y - this.size/2 && mouseY <= this.x + this.size/2) {
        splice(i, 1);
    }
}

class Particle {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = 2; 
        this.diameter = random(50);
        this.speedMin = 2;
        this.speedMax = 7;
    }
    move() {
        this.speed = map(mouseY, 0, height, this.speedMin, this.speedMax);
        this.x += random(-this.speed, this.speed);
        this.y += random(-this.speed, this.speed);
        fill(this.x, this.y, this.diameter, random(100, 255));
        ellipse(this.x, this.y, this.diameter);

        if (this.x >= width - this.diameter/2) {
            this.x = width - this.diameter/2;
       } else if (this.x <= 0 + this.diameter/2) {
            this.x = 0 + this.diameter/2;
        }
        if (this.y >= height - this.diameter /2) {
            this.y = height - this.diameter/2;
        } else if (this.y <= 0 + this.diameter/2) {
            this.y = 0 + this.diameter/2;
        }
    }
}

class Particle2 {
    constructor() {
        this.x = random(width);
        this.y = random(height);
        this.speed = 5;
        this.size = random(2, 10);
        this.color = color(100, 0, 150);
    }

    move() {
    ellipse(this.x, this.y, this.size, this.color);
    this.y += this.speed;

    if (this.y > height + size) {
        this.y = -10;
    }
    }
}