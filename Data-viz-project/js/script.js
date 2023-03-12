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
}

function draw() {
  //background(50);
  for(let i = 0; i < 10; i++){
    points[i].display();
    //points[i].specify();
   // points[i].move();
}
background(10, 0.05);
}

class DataPoint { 
    constructor(title, genre, bpm, year, ID){ 
        // Add each data point to the object
        this.title = title;
        this.genre = genre;
        this.bpm = bpm;
        this.year = year;
        this.ID = ID;
        this.x = random(0, width);
        this.y = random(0, height);
        this.w = random(this.genre);
        this.xspeed = 2;
        this.yspeed = 1;
    }
    display() { //displays particles using this.genre which returns values from the genre column | changes every refresh (not intended don't know why it does that but hey, something's better than nothing at this point)
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.genre);
     // filter(BLUR, this.genre);
    // print(this.w);
    print(this.bpm);
    }
   specify() { //finds bpm in rows that also have the year 2010 (or that's what it's supposed to do) | why does it only return one? 
   let row = table.findRows('2010', 'year');
  if (row = table.findRows('2010', 'year')) {
    row = getStrings('bpm');
  }
    print(row);
   }
   move() {
  this.x += this.xspeed;
  this.y += this.yspeed;

   }
   
}




