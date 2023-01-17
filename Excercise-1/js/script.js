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
let Xpos;
let Ypos;
let ball;

//score
let score1 = 0;
let score2 = 0;

/**
Description of draw()
*/
//game screen
function draw() {
    background(0);

    fill(255);
    rect(40, paddle1, 50, 100);

    fill(255);
    rect(980, paddle2, 50, 100);
// Press the corresponding key | ISSUES: Have to press un specified key for paddle to stop moving 
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

    ellipse(Xpos, Ypos, 20, 20);

    textSize(50);
    text('PONG', 450, 50);
    text('0', 150, 70);
    text('0', 880, 70);
 }

 //scoreboard process
 /** function scoreboard() {
    if (x >= width) {
        score1++;
    } else if (-x <= width) {
        score2++;
    }
    println("working");
    if (score1 > 10) {
        textFont(50);
        textAlign(CENTER, CENTER);
        text("Winner Player 1!!");
    } else if (score2 > 10) {
        textFont(50);
        textAlign(CENTER, CENTER);
        text("Winner Player 2!!");
    }
 }
 **/