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


let ball = []; // creates an array of particles
let xoff = 4; // xoffset to use with noise function idea inspired by code found by  jarivkin | simple perlin noise colour
//variables for particles
let c;
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
    background(0);
}
//variavbles for second set of particles
let r2;
let g2;
let b2;

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
    background(0, 0, 0, 2);
    r = map(noise(xoff), 2, 1, 0, 150);
    g = map(noise(xoff), 0, 1, 0, 50);
    b = map(noise(xoff), 0, 0, 4, 100);
    r2 = map(noise(xoff), 0, 1, 0, 5);
    g2 = map(noise(xoff), 0, 5, 0, 50);
    b2 = map(noise(xoff), 1, 2, 0, 150);
    xoff += 0.001;
}

class Particle { //makes particle system
    constructor() { //defines variables for particles class
        this.x = random(width/2);
        this.y = random(height/2);
        this.xspeed = 0;
        this.yspeed = 0;
        this.diameter = 40;
    }
    move() { 
        if (mouseX <= this.xspeed || mouseY <= this.yspeed) { // if mouse position through mouseX or Y is smaller than the value given by this.xspeed or yspeed this.x and yspeed will decrease using the value on the right | assigns to the variable new bnumber
            this.xspeed -= 0.01;
            this.yspeed -= 0.01;
        } else if (mouseX >= this.xspeed || mouseY >= this.yspeed) {
            this.xspeed += 0.01;
            this.yspeed += 0.01;
        }
        if (this.xspeed > 2 || this.yspeed > 2) { //if the speed value gets too high, brings it down slowly overtime | acts as a sort of limit
            this.xspeed -= 0.5;
            this.yspeed -= 0.5;
        }
       this.x += this.xspeed; //this.xspeed subtracted from original value, new result after becomes the new this.x value
       this.y += this.yspeed;
    }
    display() {
        noStroke();
        fill(r, g, b, this.xspeed);
        //fill(c);
        rect(this.x, this.y, this.diameter, 40); // size and shape of particles
        rotate(PI/3);
    }
    bounds() { //if this.x value exceeds the width of screen this.xand y speed will be * by -1 to reverse direction of particle
        if(this.x < -width/2 || this.x > width/2) {
            this.xspeed *= -1;
        }
        if (this.y < -height/2 || this.y > height/2) {
            this.yspeed *= -1;
        }
    }
}

class Particle2 { //makes another particle system
    constructor() { //defines variables for particles class
        this.x2 = random(width/2);
        this.y2 = random(height/2);
        this.xspeed2 = 0;
        this.yspeed2 = 0;
        this.diameter2 = 40;
    }
    move() { 
        if (mouseX <= this.xspeed2 || mouseY <= this.yspeed2) { // if mouse position through mouseX or Y is smaller than the value given by this.xspeed or yspeed this.x and yspeed will decrease using the value on the right | assigns to the variable new bnumber
            this.xspeed2 -= 0.1;
            this.yspeed2 -= 0.1;
        } else if (mouseX >= this.xspeed2 || mouseY >= this.yspeed2) {
            this.xspeed2 += 0.1;
            this.yspeed2 += 0.1;
        }
        if (this.xspeed2 > 2 || this.yspeed2 > 2) {
            this.xspeed2 -= 0.5;
            this.yspeed2 -= 0.5;
        }
       this.x2 += this.xspeed2;
       this.y2 += this.yspeed2;
    }
    display() {
        noStroke();
        fill(r, this.xspeed2, b, this.yspeed); //colour values pulled from 3 noise maps and the opactity is controlled by yspeed to create wispy effect
        //fill(c);
        rect(this.x2, this.y2, this.diameter2, 40); // size and shape of particles
        rotate(PI/3);
    }
    bounds() { //if this.x vaklue exceeds the width of screen this.xand y speed will be * by -1 to reverse direction of particle
        if(this.x2 < -width/2 || this.x2 > width/2) {
            this.xspeed2 *= -1;
        }
        if (this.y2 < -height/2 || this.y2 > height/2) {
            this.yspeed2 *= -1;
        }
    }
}
/** blur
 * "filter(blur)"
 */