/**

Alex and Katt

---Pattern Smash---


*/



"use strict";
var gameScreen;
var mode = 0;
var roundNum = 1;
var startTime = 3;
var roundCount = 0;
var timer = 25;
var speedUp = 100;

var chalkFont;
var joystixFont;
var luckiestGuyFont;
var RussoOneFont;
var VT323Font;
var rexliaFont;
var backTo1982Font;

var score = 0;
var combo = 0;
var lives = 3;
var arrShape = [87, 65, 83, 68];
var item = 0;
var item2 = 0;
var item3 = 0;
var item4 = 0;
var randBackgroundNum = 0;
var textBox;

var answered = false;
var firstChoice = true;
var isPressed = true;

var bg;
var backgrounds = [];
var groceryStoreBg;
var postOfficeBg;
var libraryBg;
var classRoomBg;
var titleBg;
var purpleBg;
var textBoxBg;

var groceryItems = [];
var apple;
var basket;
var croissant;
var knife;

var postOfficeItems = [];
var letter;
var box;
var stamp;
var tape;

var classRoomItems = [];
var backpack;
var chalk;
var globe;
var laptop;

var libraryItems = [];
var bag;
var beanBag;
var book;
var lCard;

var speedUpSounds = [];
var faster;
var heatinUp;
var hurryUp;
var keepUp;
var putp;
var tth;
var speedRun;
var speedRun2;
var speedUp;

var titleMusic; 
var gameMusic;
var gameOverMusic;

var dummyNum = 0;
var dummyNum2 = 0;
var dummyNum3 = 0;

var story = "HELP! A magical cube named Cubii crashed through space and crashed onto Earth, unleashing a curse that brought all inanimate objects into MONSTERS! That’s where you come in.Luckily, the cube also contained powerful magic that could be harnessed to fight the monsters! Only YOU can manifest this energy to destroy the monsters.Command Cubii to fight the monsters before they destroy the world! Use the Cubii controller in front of you to use the special attack for each different coloured monster.";

/**
Description of preload
*/
function preload() {
    //Fonts
    rexliaFont = loadFont('assets/fonts/rexlia rg.otf');
    backTo1982Font = loadFont('assets/fonts/BACKTO1982.TTF');

    //Music
    titleMusic = loadSound('assets/sounds/Peachy_-_half.cool.mp3');
    gameMusic = loadSound('assets/sounds/game_music.mp3');
    gameOverMusic = loadSound('assets/sounds/game-over-38511.mp3');

    //Sounds for the speed up each round
    // faster = loadSound('assets/sounds/audioClips/faster.m4a');
    // heatinUp = loadSound('assets/sounds/audioClips/heatinUp.m4a');
    // hurryUp = loadSound('assets/sounds/audioClips/hurryUp.m4a');
    // keepUp = loadSound('assets/sounds/audioClips/keepUp.m4a');
    // putp = loadSound('assets/sounds/audioClips/pickUpThePase.m4a');
    // speedRun = loadSound('assets/sounds/audioClips/speedRun.m4a');
    // speedRun2 = loadSound('assets/sounds/audioClips/speedRun2.m4a');
    // speedUp = loadSound('assets/sounds/audioClips/speedup.m4a');
    // tth = loadSound('assets/sounds/audioClips/timeToHustle.m4a');

    // speedUpSounds = [faster, heatinUp, hurryUp, keepUp, putp, speedRun, speedRun2, speedUp, tth];

    //backgrounds
    groceryStoreBg = loadImage('assets/images/backgrounds/Grocerybg.png'); 
    postOfficeBg = loadImage('assets/images/backgrounds/Post office bg.png');
    libraryBg = loadImage('assets/images/backgrounds/Librarybg.png');
    classRoomBg = loadImage('assets/images/backgrounds/classroom.png');
    backgrounds = [groceryStoreBg, postOfficeBg, libraryBg, classRoomBg];

    //title/gameOver background
    titleBg = loadImage('assets/images/backgrounds/Title.png');

    //story backgrounds
    purpleBg = loadImage('assets/images/backgrounds/purplebg.png');
    textBoxBg = loadImage('assets/images/backgrounds/Textwithbg.png');
    textBox = loadImage('assets/images/backgrounds/Text_bubbles.png');

    /*Items*/
    //grocery store 
    apple = loadImage('assets/images/grocery_store/Apple.png'); 
    basket = loadImage('assets/images/grocery_store/Basket.png');
    croissant = loadImage('assets/images/grocery_store/croissant.png');
    knife = loadImage('assets/images/grocery_store/Knife.png');

    groceryItems = [apple, basket, croissant, knife];

    //post office
    letter = loadImage('assets/images/post_office/letter.png');
    box = loadImage('assets/images/post_office/box.png');
    stamp = loadImage('assets/images/post_office/stamp.png');
    tape = loadImage('assets/images/post_office/tape.png');

    postOfficeItems = [letter, tape, box, stamp];

    //class room
    backpack = loadImage('assets/images/class_room/Backpack.png');
    chalk = loadImage('assets/images/class_room/Chalk.png');
    globe = loadImage('assets/images/class_room/Globe.png');
    laptop = loadImage('assets/images/class_room/Laptop.png');

    classRoomItems = [laptop, chalk, backpack, globe];
    
    //library
    bag = loadImage('assets/images/library/Bag.png');
    beanBag = loadImage('assets/images/library/Beanbag.png');
    book = loadImage('assets/images/library/Book.png');
    lCard = loadImage('assets/images/library/Library_card.png');

    libraryItems = [book, bag, beanBag, lCard];

}

/**
Description of setup
*/
function setup() {
    gameScreen = createCanvas(windowWidth, windowHeight);
    gameScreen.style('display', 'block');
    frameRate(60);
    background(50);
    imageMode(CENTER);

}

/**
Description of draw()
*/
function draw() {
    clear();
    image(titleBg, width/2, height/2, width, height);
// ------------ title screen ------------------
    if (mode == 0) {
        
        if(dummyNum == 0){ //our method for having the music not start playing constantly and only playing once. dummynum is to allow us to have a variable that changes so the music will only play if the number equals zero. Therefore only playing once - K
            titleMusic.loop();
            dummyNum++;
        }
        
    //title screen items
        textFont(backTo1982Font); 
        textAlign(CENTER);
        textSize(90);
        fill(129, 253, 224);
        text("Pattern Smash", width / 2, height / 2);
        textFont(rexliaFont);
        textSize(50);
        fill(0);
        text("Press Enter to Start", width / 2, height / 2 + 90);

    }
//the modes are to refer back to different screens at different times. These if statements will switch the modes based off key inputs - K
//---------- Instructions screen --------------
    if(mode == 1){ 
        image(purpleBg, width/2, height/2, width, height);
        image(textBox, width/2, height/2, 1280, 1020); //made to fit Alex's screen so text might move when attempted on different screens - K
        textSize(35);
        textAlign(CENTER);
        text(story, 790, 250, 950, 850);
        text("Please enter space to continue", width/2, height - height/10);
    }
//--------- Timer Countdown screen --------------
    if (mode == 2) {
        startTimer();
        timeIt();
        setTimeout(startGame, 2500); //this is in draw meaning that you're setting a call of startGame EVERY FRAME THAT MODE == 1, i.e startGame will be ran once for every frame that mode == 1

    }
//------------- Game screen --------------------
    if (mode == 3) {
        
        if(dummyNum2 == 0){
            titleMusic.stop();
            gameMusic.loop();
            dummyNum2++;
        }
        
        drawShapes();
        countDown();
        drawLives();
        drawCombo();
        drawRound();
        points();

    }
//----------- Game over screen ----------------
    if (mode == 4) {
        
        if(dummyNum3 == 0){
            gameMusic.stop();
            gameOverMusic.play();
            dummyNum3++;
        }
        textAlign(CENTER);
        textSize(60);
        fill(233, 14, 36);
        text("Game Over", width / 2, height / 2);
    }
}

function keyPressed() {
    if (keyCode == ENTER && mode == 0) { //The modes tell us which screen we are on at a given time. This means that when the player presses the "ENTER" Key it will switch to the background and text to what we named "mode 2" - K
        mode = 1;
       
    }

    if( mode == 1){
        bg = backgrounds[floor(random(4))];
        nextPress(); //generates your random sequence, once, for your first round. -t
        if(keyCode == 32){
            mode = 2;
        }
    }   

    if (mode == 2) {
        console.log('pressed' + keyCode);
        console.log("correct" + arrShape[item]);

    }

    if (mode == 3) { //when in the game, hitting a key runs keyFunction -t
        keyFunction(keyCode);
    }
}

function drawShapes() { //This randomizes item order
   
    if (bg == backgrounds[0]) { // calls the first image in the background array 
        image(backgrounds[0], width / 2, height / 2, width, height);

        for (var i = 0; i < 4; i++) {  //for every spot in the array take one item (not specified) and put it in that place | same code for every separate setting 
            if (i == 0) {
                image(groceryItems[item], width / 5, height / 2, 250, 250);
            }

            if (i == 1) {
                image(groceryItems[item2], width / 2 - 250, height / 2, 250, 250);
            }

            if (i == 2) {
                image(groceryItems[item3], width / 2 + 250, height / 2, 250, 250);
            }

            if (i == 3) {
                image(groceryItems[item4], width - width / 5, height / 2, 250, 250);
            }
        }
    }
    else if (bg == backgrounds[1]) {
        image(backgrounds[1], width / 2, height / 2, width, height);
        for (var i = 0; i < 4; i++) {
            if (i == 0) {
                image(postOfficeItems[item], width / 5, height / 2, 250, 250);
            }

            if (i == 1) {
                image(postOfficeItems[item2], width / 2 - 250, height / 2, 250, 250);
            }

            if (i == 2) {
                image(postOfficeItems[item3], width / 2 + 250, height / 2, 250, 250);
            }

            if (i == 3) {
                image(postOfficeItems[item4], width - width / 5, height / 2, 250, 250);
            }
        }
    }
    else if(bg == backgrounds[2]){
        image(backgrounds[2], width / 2, height / 2, width, height);
        for (var i = 0; i < 4; i++) {
            if (i == 0) {
                image(libraryItems[item], width / 5, height / 2, 250, 250);
            }

            if (i == 1) {
                image(libraryItems[item2], width / 2 - 250, height / 2, 250, 250);
            }

            if (i == 2) {
                image(libraryItems[item3], width / 2 + 250, height / 2, 250, 250);
            }

            if (i == 3) {
                image(libraryItems[item4], width - width / 5, height / 2, 250, 250);
            }
        }
    }
    else if(bg == backgrounds[3]){
        image(backgrounds[3], width / 2, height / 2, width, height);
        for (var i = 0; i < 4; i++) {
            if (i == 0) {
                image(classRoomItems[item], width / 5, height / 2, 250, 250);
            }

            if (i == 1) {
                image(classRoomItems[item2], width / 2 - 250, height / 2, 250, 250);
            }

            if (i == 2) {
                image(classRoomItems[item3], width / 2 + 250, height / 2, 250, 250);
            }

            if (i == 3) {
                image(classRoomItems[item4], width - width / 5, height / 2, 250, 250);
            }
        }
    }

}

//----------------------------------------- UI counter, lives, combo, points and rounds ------------------------------------------------------
function countDown() {

    timer -= 1 / speedUp;
    if (timer <= 0) {
        loselives();
        timer = 25;

    }
    textFont(rexliaFont);
    textSize(60);
    fill(255);
    text(floor(timer), width / 2, height - height / 10);


}

function drawLives() {
    textFont(rexliaFont);
    textSize(60);
    fill(255);
    text("Lives " + lives, width - width / 8, height - height / 10);

}

function drawCombo() {
    textFont(rexliaFont);
    textSize(60);
    fill(255);
    text("Combo " + combo, width - width / 8, height / 10);

}

function drawRound() {
    textFont(rexliaFont);
    textSize(60);
    fill(255);
    text("Round " + roundNum, width / 2, height / 10);
}

function points() {
    fill(255);
    text("Score = " + score, width / 8, height / 10);

}

function getPoint() {
    answered = true;
    score += 100;
    combo++;
    roundCount++;
    nextPress();
    if (roundCount % 4 == 0) {
        roundNum++;
        bg = backgrounds[floor(random(4))];
        nextRound();
        

    }
}

function loselives() { //if the answered flag is true or false then the combo resets and you lose a life | This happens every time you press a wrong key
    answered = false;
    combo = 0;
    lives -= 1;
    if (lives < 1) {
        mode = 4;
    }
}

function nextRound() { //controls when the round ends, the round ends when you finish one sequence
    timer = 25;
    if (speedUp != 20) {
        speedUp -= 20;
    }
    else {
        speedUp = 20;
    }
    console.log("round change");
    randBackgroundNum = floor(random(4));
}

function nextPress() { 
    itemList.splice(0, itemList.length); //clears the itemList array -t
    item = floor(random(4));
    item2 = floor(random(4));
    item3 = floor(random(4));
    item4 = floor(random(4));
    itemList = [item, item2, item3, item4]; //sets up your item list with the randomly generated items -t
    itemIndex = 0; //reset itemIndex to determine in which order you need to hit the items -t
}


function startTimer() {
    if (startTime > 1) {
        text(Math.round(startTime), width / 2, height / 2);

    } else {
        text("GO", width / 2, height / 2);
    };

}

function timeIt() {
    if (startTime > 0) {
        startTime -= deltaTime / 1000;
    }

}

function startGame() {
    mode = 3;
}

var itemIndex = 0; //which item in the list are we on? -t
var itemList = []; //contains item 1 through 4 in a handy dandy array -t
function keyFunction(KEYCODE) { //called on keyPressed when mode == 2 -t
    print("received keyFunction" + keyCode);
    if (KEYCODE == arrShape[itemList[itemIndex]]) { //basically we are using arrShape which stores the keyCodes from WASD in order 0 through 3 and comparing it with the input keyCode, to determine WHICH value in arrShape we use itemList which contains our four items in order, and we use itemIndex to keep track of which item we are currently on. -t
        print("Correct!");
        //  getPoint();
        itemIndex++;
        if (itemIndex >= itemList.length) {
            getPoint();
        }
    } else {
        print("wrong");
        loselives();
    }
} 