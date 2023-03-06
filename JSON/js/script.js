let weather;
function preload() {
  weather = loadJSON('https://api.open-meteo.com/v1/forecast?latitude=42.98&longitude=-81.23&hourly=temperature_2m,cloudcover,windspeed_80m,winddirection_80m&daily=temperature_2m_max,temperature_2m_min,sunrise,sunset,windspeed_10m_max,winddirection_10m_dominant&current_weather=true&timezone=America%2FNew_York&past_days=1');
}

function setup() {
  createCanvas(800, 500);
  background(40);
  print("The Weather:")
  print("Located at: "+ weather.latitude+", "+weather.longitude);  
  print("Current temp: "+ weather.current_weather.temperature);
  print("Current wind speed: "+ weather.current_weather.windspeed);
  print("The hourly temperature is (in C): ")
  for(let i = 0; i < 5; i++){
    print(weather.hourly.temperature_2m[i]+" C");
  } 
  print("cloud cover  " +weather.hourly.cloudcover);
}


function draw() {
  for(let i = 0; i < 10; i++){
    background(weather.hourly.cloudcover[i]);
    print(weather.hourly.cloudcover[4]);
  }
  textSize(20);
  fill(255);
  text(weather.current_weather.windspeed + ' km/h', width/2, height/2);
  text(weather.current_weather.winddirection, 490, height/2);
  ellipse(250, 250, weather.latitude, weather.longitude);
  print(weather.latitude, weather.longitude);
  
}
