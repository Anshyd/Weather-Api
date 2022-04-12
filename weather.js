console.log('Weather.js');

let wind = document.getElementById('windID');
let climate = document.getElementById('climID');
let temprature = document.getElementById('tempID');
let countryName = document.getElementById('contID');
let getWeatherButton = document.getElementById('weatherButton');
let weatherButton = document.getElementById("weatherButton")
// WRITING FUNCTION TO FETCH THE WEATHER
function getData(){
    let url = "https://api.openweathermap.org/data/2.5/weather?q="+countryName.value+"&units=metric&appid=b4c1d70271adeb673f28a3414bc57af7";
    fetch(url).then(response=>{
        return response.json();
    }).then(
        (data)=>{
            console.log(data)
            
            const {description} = data.weather[0]
            const {temp} = data.main
            const {speed} = data.wind
            climate.innerText = description.toUpperCase();
            temprature.innerText = temp+'°F';
            wind.innerText = speed+'Km/h'
        }
    )
}
// APPLYING GetData() FUNCTION ON WEATHER BUTTON
getWeatherButton.addEventListener('click',getData);