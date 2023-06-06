const keyweather = 'a04260457def2b62c3d641eeecb410bc';
const lat = 19.4326296;
const lon = -99.1331785;
const nameCity = 'bogota';

const description = document.getElementById('description');
const coord = document.getElementById('cloud');


const currentWeather = async (weather) => {
    const url = `http://api.openweathermap.org/geo/1.0/direct?q=${nameCity}&limit=1&appid=${keyweather}`;
    const response = await fetch(url);
    const data = await response.json();
    console.log(data);
    return data;

}
currentWeather()
    .then(response => {
        nameCity.innerText = response.name;
        coord.innerText = response.coord.lat;
        description.innerText = response.weather[0].description;
    })
    .catch(error => console.log(error));
