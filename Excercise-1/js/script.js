/**
Pong
by Katt for Cart 263 :)
*/

"use strict";

//font
let font;

/**
 Preload function
 */
/**
 function preload() {
    font = loadFont('pixel.ttf');
 }
 */


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
    
// Ball 
let x = 320;
let y;
let xspeed = 20;
let yspeed = 10;
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
    rect(40, paddle1, 25, 100);
    rect(980, paddle2, 25, 100);

//functions
    keyPressed();
    move();
    paddle();
    scoreboard();

    textSize(50);
    textAlign(CENTER);
    text('PONG', 530, 70);
    text(score1, 150, 70);
    text(score2, 880, 70);
}
//for moving ball 
function move() {
    x += xspeed;
    fill(255);
    ellipse(x, y, 20, 20);

// makes ball hit wall

}

function point() {
    if (x > WIDTH) {
        score1 + 1;
    } else if (x > -WIDTH) {
        score2 + 1; 
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
}

// paddle hits 
function paddle() {
    if (x = paddle1) {
        xspeed = -xspeed;
    } else if ( y = paddle1) {
        yspeed = -yspeed;
    } 
    if (x = paddle2) {
        xspeed= -xspeed;
    } else if (y = paddle2) {
        yspeed = -yspeed;
    }
}
 function scoreboard() {

    if (score1 > 10) {
        textFont(50);
        text("Winner Player 1!!", 550, 550);
    } else if (score2 > 10) {
        textFont(50);
        text("Winner Player 2!!", 550, 550);
    }
 }

