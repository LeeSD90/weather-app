document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("get-weather").addEventListener("click", updateWeatherDisplay);
});

function updateWeatherDisplay() {
  const data = fetchWeather(document.getElementById("location").value);
  data.then(r => {
    document.getElementById("result").innerHTML = "Temperature: " + r.main.temp + " &deg;C";
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

