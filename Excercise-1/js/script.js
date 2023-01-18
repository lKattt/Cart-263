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
let x = 100;
let y = 0;
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
    x += xbounce;
    y -= ybounce;
    fill(255);
    ellipse(x, y, 20, 20);
// If the value of x or y exceeds the limits of the screen, the ball goes back the way it came || ISSUES: The ball goes one way and won't bounce anywhere else & it leaves the top part of the screen but comes back? 
    if (x > width || x < - width%2) {
        xbounce = -xbounce;
    } 
    if (y > height || y < - height%2) {
        ybounce = -ybounce;
    }
// makes ball hit wall

}
// function when points hit one side it assigns a point
function point() {
    if (x > width) {
        score1++;;
    } else if (x < -width) {
        score2++;; 
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
        xbounce = -xbounce;
    } else if ( y = paddle1) {
        ybounce = -ybounce;
    } 
    if (x = paddle2) {
        xbounce= -xbounce;
    } else if (y = paddle2) {
        ybounce = -ybounce;
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

