/**
Pong
by Katt for Cart 263 :)
*/

"use strict";

/**
Description of setup
*/
function setup() {
    createCanvas(1080, 720);
    background(0, 0, 0);
}

// Paddles
let paddle1 = 500;
let paddle2 = 500;;
let xpaddle1 = 80;
let xpaddle2 = 980;
    
// Ball 
let xball = 100;
let yball = 100;
let xbounce = 20;
let ybounce = 15;
//score
var score1 = 0;
var score2 = 0;

/**
Description of draw()
*/
//game screen
function draw() {
    background(0);
//paddles
    fill(255);
    rect(xpaddle1, paddle1, 25, 100);
    rect(xpaddle2, paddle2, 25, 100);

//functions
    keyPressed();
    move();
    paddle();
    scoreboard();

    textSize(50);
    textAlign(CENTER);
    text('PONG', 530, 70);
    text(score1, 350, 70);
    text(score2, 710, 70);
}
//for moving ball 
function move() {
    xball += xbounce;
    yball -= ybounce;
    fill(255);
    ellipse(xball, yball, 20, 20);
// If the value of xball or yball exceeds the limits of the screen, the ball goes back the way it came 
    if (xball > width || xball < - width%4) {
        xbounce = -xbounce;
    } 
    if (yball > height || yball < - height%2) {
        ybounce = -ybounce;
    }
}



 //scoreboard process
function keyPressed() {
// Press the corresponding key to move paddle
    if (keyIsPressed) { //When key is pressed and held it will continually move | ISSUES: each paddle stops moving when other paddle is moved
        if (keyCode == 87) { // W
            paddle1 -= 5;
        } 
        if (keyCode == 83) { // S
            paddle1 += 5;
        }
        if (keyCode == 38) { // up arrow
            paddle2 -= 5;
        }
        if (keyCode == 40) { // down arrow
            paddle2 += 5;
        }
            print("working"); 
    } 
    // stops paddles from going off the screen | ISSUES: Only stops them from going up not down
    if (paddle1 > height || paddle1 < -height%2) {
        paddle1 = -paddle1;
    } else if (paddle2 > height || paddle2 < -height%2) {
        paddle2 = -paddle2;
    }
}

function paddle() {
// makes ball hit paddle || ISSUES: Sometimes it registers the paddle as being hit when it wasn't, bugs out and gets ball stuck sometimes
    if (xball < xpaddle1 && yball > paddle1) {
        xbounce = -xbounce;
        ybounce = -ybounce;
    }    
    if (xball > xpaddle2 && yball > paddle2) {
        xbounce = -xbounce;
        ybounce = -ybounce;
    }
}
// Adds points whenever the opposite wall is hit | ISSUES: Doesn't stop counting after 10
function scoreboard() {
    if (xball > width) {
        score1++;
    } 
    if (xball < -width%2) {
        score2++; 
    }
    if (score1 >= 10) {
        textFont(50);
        text("Winner Player 1!!", 550, 550);
    } else if (score2 >= 10) {
        textFont(50);
        text("Winner Player 2!!", 550, 550);
    }
}

