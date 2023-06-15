async function weather_fetch(){
try {
    const temp1 = document.getElementById('temperature1');
        const tempDesc1 = document.getElementById('temp-condition1');
        const cityName1 = document.getElementById('city1');
        const weatherIcon1 =  document.getElementById('weather-icon1');
        const cityHumidity1 = document.getElementById('city-humidity1');
        const cityPressure1 = document.getElementById('city-pressure1');
        const cityWindSpeed1 = document.getElementById('wind-speed1');
        const cityWindDirection1 = document.getElementById('wind-direction1');
        let citySearch1 = document.getElementById('city-search1').value;
        let input1 = document.getElementById("city-search1");
        input1.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search-btn1").click();
        }
        });
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch1.trim()}&appid=09061035535b44d0032d51a114ab1bb3&units=metric`;
        const response = await fetch(url);
        const result = await response.json();
        cityName1.innerText=result.name;
        weatherIcon1.innerHTML=`<img src="https://openweathermap.org/img/wn/${result.weather[0].icon}@2x.png">`
        temp1.innerText=parseInt(result.main.temp);
        tempDesc1.innerText=`${result.weather[0].description}`;
        cityHumidity1.innerText=result.main.humidity;
        cityPressure1.innerText=result.main.pressure;
        cityWindSpeed1.innerText= result.wind.speed;
        cityWindDirection1.innerText= result.wind.deg;
    const temp2 = document.getElementById('temperature2');
        const tempDesc2 = document.getElementById('temp-condition2');
        const cityName2 = document.getElementById('city2');
        const weatherIcon2 =  document.getElementById('weather-icon2');
        const cityHumidity2 = document.getElementById('city-humidity2');
        const cityPressure2 = document.getElementById('city-pressure2');
        const cityWindSpeed2 = document.getElementById('wind-speed2');
        const cityWindDirection2 = document.getElementById('wind-direction2');
        let citySearch2 = document.getElementById('city-search2').value;
        ;
        let input2 = document.getElementById("city-search2");
        input2.addEventListener("keypress", function(event) {
        if (event.key === "Enter") {
            event.preventDefault();
            document.getElementById("search-btn2").click();
        }
        });
        const url2 = `https://api.openweathermap.org/data/2.5/weather?q=${citySearch2.trim()}&appid=09061035535b44d0032d51a114ab1bb3&units=metric`;
        const response2 = await fetch(url2);
        const result2 = await response2.json();
        cityName2.innerText=result2.name;
        weatherIcon2.innerHTML=`<img src="https://openweathermap.org/img/wn/${result2.weather[0].icon}@2x.png">`
        temp2.innerText=parseInt(result2.main.temp);
        tempDesc2.innerText=`${result2.weather[0].description}`;
        cityHumidity2.innerText=result2.main.humidity;
        cityPressure2.innerText=result2.main.pressure;
        cityWindSpeed2.innerText= result2.wind.speed;
        cityWindDirection2.innerText= result2.wind.deg;
    }
 catch (error) {
	console.error(error);
}
}
weather_fetch();

