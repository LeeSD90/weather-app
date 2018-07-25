document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("get-weather").addEventListener("click", updateWeatherDisplay);
});

function setCardColour(result) {
  const card = document.getElementById('card');
  const temp = parseInt(result.main.temp);

  if(temp > 25) { card.style.background = "linear-gradient(red, orange)"; }
  else if(temp > 15 && temp < 25) { card.style.background = "linear-gradient(orange, yellow)"; }
  else { card.style.background = "linear-gradient(yellow, blue)"; }
}

function updateWeatherDisplay() {
  const data = fetchWeather(document.getElementById("location").value);
  data.then(r => {
    console.log(r);
    setCardColour(r);
    document.getElementById("result").innerHTML = 
    `
    <div>Temperature: ${r.main.temp}&deg;C</div>
    <div>Humidity: ${r.main.humidity}%</div>
    <div>Wind Speed: ${r.wind.speed} m/s</div>
    `;
  });
}

async function fetchWeather(location) {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&APPID=" + APPID, {mode: 'cors'});
    const data = await response.json();
    if(data.cod == "200") {
      return data;
    }
  }
  catch(e) {
    console.log(e);
  }
}

const APPID = "e25872c6e80b8a83e7ba15ec135fcbfc";