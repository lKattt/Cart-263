/** This project has defeated me. I will be back before the end of the semester just for my state of mind but for now I'm leaving it be */


let table;
let points = [];

function preload() {
  table = loadTable("Spotifytop.csv", "csv", "header");
}

function setup() {
  createCanvas(1080, 720);
  background(0);
  for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
      points[r] = new DataPoint(table.getString(r, 0), 
                                table.getString(r, 2), 
                                table.getString(r, 4)); 
                              //  table.getString(r, 7));
                                // Pass through the values in each row
  }
  filter(BLUR); // supposed to blur circles | takes a while to do, not sure why
  rectMode(CENTER);
}

function draw() {
  //background(50);
  stroke(5);
  fill(255);
  textAlign(CENTER);
  textSize(25);
  text("Spotify Top 100", width/2, height/6);
  for(let i = 0; i < 10; i++){ // creates array for particle information limited to 10 circles to have a cleaner screen
    points[i].display();
    //points[i].specify();
   // points[i].move();
}
background(10, 0, 0, 0.05); //used this for when the circles moved around, would create sort of a 3d effect with the blur and movement
}

class DataPoint { 
    constructor(title, genre, bpm, year, ID){ //finds information stored under these catagories
        // Add each data point to the object
        this.title = title;
        this.genre = genre;
        this.bpm = bpm;
        this.year = year;
        this.ID = ID;
        this.x = random(0, width);
        this.y = random(0, height);
        this.w = random(this.genre);
    }
    display() { //displays particles using this.genre which returns values from the genre column | changes every refresh (not intended don't know why it does that but hey, something's better than nothing at this point)
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.w);
    // print(this.w);
    }
   specify() { //finds bpm in rows that also have the year 2010 (or that's what it's supposed to do) | why does it only return one? 
   let row = table.findRows('2010', 'year');
  if (row = table.findRows('2010', 'year')) {
    row = getStrings('bpm');
  }
    print(row);
   }
   move() { //caused the particles to move randomly around the screen | didn't make boundaries so itwould just fly off the screen
  this.x += this.xspeed;
  this.y += this.yspeed;

   }
   
}




