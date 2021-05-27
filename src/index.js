let now = new Date();
let hour = addZeroBefore(now.getHours());
let minutes = addZeroBefore(now.getMinutes());
function addZeroBefore(n) {
  return (n < 10 ? `0` : ``) + n;
}
let days = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
let day = days[now.getDay()];
let time = document.getElementById("date");
time.innerHTML = `${day} ${hour}:${minutes}`;

function changeCity(event) {
  event.preventDefault();
  let searchInput = document.querySelector("#search-text-input");
  let city = document.querySelector("h1");
  city.innerHTML = searchInput.value;
  searchCity(searchInput.value);
}
function searchCity(city) {
  let apiKey = "699508a491907727bb31dca229c66150";
  let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric`;
  axios.get(`${apiUrl}&appid=${apiKey}`).then(showTemperature);
}

let searchForm = document.querySelector("#search-form");
searchForm.addEventListener("submit", changeCity);
function showTemperature(response) {
  let city = document.querySelector("h1");
  city.innerHTML = response.data.name;
  let temperture = Math.round(response.data.main.temp);
  let temperatureElement = document.querySelector("#current-temperture");
  temperatureElement.innerHTML = temperture;
  let weatherDescription = document.querySelector("#weather-description");
  weatherDescription.innerHTML = response.data.weather[0].description;
}
