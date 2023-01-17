/**
Title of Project
Author Name

This is a template. You must fill in the title,
author, and this description to match your project!
*/

"use strict";

//score
let score = 0;

/**
 Preload function
 */

 let font;


/**
Description of setup
*/
function setup() {
    createCanvas(1080, 720);
    background(0, 0, 0);
    font = loadFont('pixel.ttf');
}

// Paddles
let paddle1 = 500;
let paddle2 = 500;;
    
// The ball 
let ball;
/**
Description of draw()
*/
function draw() {
    background(0);

    fill(255);
    rect(40, paddle1, 50, 100);

    fill(255);
    rect(980, paddle2, 50, 100);
// Press the corresponding key | ISSUES: Have to press un specified key for paddle to stop moving 
    if (keyIsDown) { //When key is pressed and held it will continually move | ISSUES: each paddle stops moving when other paddle is moved
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

    textSize(50);
    textFont(font);
    text('PONG', 450, 50);
    text('0', 150, 70);
    text('0', 880, 70);
 }

 /** function scoreboard() {
    if () {

    }
 }
 **/