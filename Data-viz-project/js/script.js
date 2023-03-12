let table;
let points = [];

function preload() {
  table = loadTable("Spotifytop.csv", "csv", "header");
}

function setup() {
  createCanvas(800, 800);
  background(0);
  for (var r = 0; r < table.getRowCount(); r++){ // Cycle through each row of the table
      points[r] = new DataPoint(table.getString(r, 0), 
                                table.getString(r, 2), 
                                table.getString(r, 4)); 
                              //  table.getString(r, 7));
                                // Pass through the values in each row
  }
  let rows = table.findRows('2010', 'year');
  print(rows.length + ' Songs found');
  for (let i = 0; i < rows.length; i++){
  print(rows[i]);
  }
}

function draw() {
  //background(50);
  for(let i = 0; i < 10; i++){
    points[i].display();
}
}

class DataPoint { 
    constructor(title, genre, bpm, year, ID){ 
        // Add each data point to the object
        this.title = title;
        this.genre = genre;
        this.bpm = bpm;
        this.year = year;
        this.ID = ID;
        this.x = random(width);
        this.y = random(height);
        this.w = this.genre;
        this.xspeed = 0;
        this.yspeed = 0;
    }
    display() {
      noStroke();
      fill(255);
      ellipse(this.x, this.y, this.w);
     // filter(BLUR, this.genre);
    }
   // move() {

   // }
}




