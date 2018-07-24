document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("get-weather").addEventListener("click", showWeather);
});

function showWeather() {
  const location = document.getElementById("location").value;
  const result = fetchWeather(location);
}

async function fetchWeather(location) {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&APPID=" + APPID, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
  }
  catch(e) {
    console.log(e);
  }
}

const APPID = "e25872c6e80b8a83e7ba15ec135fcbfc";