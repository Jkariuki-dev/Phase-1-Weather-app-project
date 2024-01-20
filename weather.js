let weather = {
    apikey: "3a15d44658d4796b1f1187beffaf104e",
    fetchWeather: function (city) {
      fetch(
        "https://api.openweathermap.org/data/2.5/" +
          city +
          "&units=metric&appid=" +
          this.apikey
      )
        .then((response) => {
          return response.json();
        })
        .then((data) => this.displayWeather(data));
    },
}
const searchbox = document.querySelector('.search-box');
searchbox.addEventListener('keypress', setQuery)

function setQuery(event) {
    if (event.keyCode == 10) {
        getResults(searchbox.value);
    }
}

function getResults (query) {
    fetch(`${api.base}weather?q=${query}&units=metric&APPID=${api.key}`)
    .then(weather => {
        return weather.json();
        }).then(displayResults);
}

function displayResults (weather) {
    let city = document.querySelector('.location .city');
    city.innerText = `${weather.name}, ${weather.sys.country}`;

    let now = new Date();
    let date = document.querySelector('.location .date');
    date.innerText = dateBuilder(now);

    let temp = document.querySelector('.current .temp');
    temp.innerHTML = `${Math.round(weather.main.temp)}<span>°c</span>`;

    let weather_el = document.querySelector('.current .weather');
    weather_el.innerText = weather.weather[0].main;

    let hilow = document.querySelector('.hi-low');
    hilow.innerText = `${Math.round(weather.main.temp_min)}°c / ${Math.round(weather.main.temp_max)}°c`;
}

function dateBuilder (d) {
    let months =["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "Novemeber", "December"];
    let days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];

    let day = days[d.getDay()];
    let date = d.getDate();
    let month = months[d.getMonth()];
    let year = d.getFullYear();

return `${day} ${date} ${month} ${year}`;
}