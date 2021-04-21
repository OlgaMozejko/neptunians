

// token from OpenWeatherMap (you may have to wait for it)
const appId = 'b9aaa31ff2febb546def86d1d3c56442';

// get the weather JSON data via query URI
fetch("http://api.openweathermap.org/data/2.5/weather?q=Aarhus&lang=eng&units=metric&appid=" + appId)
    .then( response => {
        return response.json(); // get weather data as JSON
})
    .then(data => {

        // display the JSON in the console
        console.log(data); 

        // add weather data to #result
        document.getElementById('result').innerHTML =

            // append a div and add
            '<div class="weatherInfo">' +

            // add a weather symbol via an img element
            '<figure class="weathericon">' +
            '<img src="http://openweathermap.org/img/wn/' + data.weather[0].icon +
            '.png" alt="Actual weather symbol">' +
            '</figure>' + '<p class="wetext">' + data.main.temp + '&deg;' +
            '</p>' +

            '</div>'; // ends the weather info tag

            // @URL to the weather icons: https://openweathermap.org/weather-conditions 

}).catch(err => {
    // Do something with error here
    console.log('There was an error');
});