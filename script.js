const weatherAPI = "YOUR_API_KEY";

async function getWeather(location) {
  const url = `https://api.openweathermap.org/data/2.5/weather?q=${location}&appid=${weatherAPI}`;
  const response = await fetch(url);
  const data = await response.json();
  return data;
}

function renderWeather(data) {
  const temperature = data.main.temp;
  const description = data.weather[0].description;
  const icon = data.weather[0].icon;
  const html = `
    <p>Temperature: ${temperature}°F</p>
    <p>Description: ${description}</p>
    <img src="https://openweathermap.org/img/wn/${icon}.png" alt="Weather icon">
  `;
  document.getElementById("weather").innerHTML = html;
}

document.addEventListener("submit", async (event) => {
  event.preventDefault();
  const location = event.target.elements["location"].value;
  const data = await getWeather(location);
  renderWeather(data);
});
