document.addEventListener("DOMContentLoaded", function(e) {
  document.getElementById("get-weather").addEventListener("click", () => fetchWeather(document.getElementById("location").value));
});

async function fetchWeather(location) {
  try {
    const response = await fetch("https://api.openweathermap.org/data/2.5/weather?q=" + location + "&units=metric&APPID=" + APPID, {mode: 'cors'});
    const data = await response.json();
    console.log(data);
    if(data.cod == "200") {
      document.getElementById("result").innerHTML = data.main.temp + " &deg;C";
    }
    else {
      this.error = "Woops, error!";
      this.shown = false;
    }
  }
  catch(e) {
    console.log(e);
  }
}

const APPID = "e25872c6e80b8a83e7ba15ec135fcbfc";