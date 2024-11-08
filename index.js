const apiKey = "";
const url = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";
// const temperature = document.querySelector(".temperature").innerHTML;
// const city = document.querySelector(".city");
const searchBar = document.querySelector(".searchbar input");
const searchIcon = document.querySelector(".searchbar i");
const weatherImg = document.querySelector(".img");
// const humidity = document.querySelector(".Hquantity");
// const windSpeed = document.querySelector(".Wquantity");

searchIcon.addEventListener("click",()=>{
    checkWeather(searchBar.value);
});


const checkWeather = async (city)=>{
    const response = await fetch(url+city+`&appid=${apiKey}`);
    const data = await response.json();
    
    if(response.status == 404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".display").style.display="none";
    }
    else{
        document.querySelector(".temperature").innerHTML = Math.round(data.main.temp)+"°C";
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".Hquantity").innerHTML = data.main.humidity+" %";
        document.querySelector(".Wquantity").innerHTML = data.wind.speed+" Kmph"; 

        if(data.weather[0].main=="Clouds" || data.weather[0].main == "Mist"){
            weatherImg.src = "cloudy.JPG";
        }
        else if(data.weather[0].main=="Rain"){
            weatherImg.src = "rain.JPG";
        }
        else if(data.weather[0].main=="Drizzle"){
            weatherImg.src = "drizzle.JPG";
        }
        else if(data.weather[0].main=="Snow"){
            weatherImg.src = "snow.JPG";
        }
        else if(data.weather[0].main=="Clear"){
            weatherImg.src = "clear.JPG";
        }

        document.querySelector(".display").style.display="block";
        document.querySelector(".error").style.display="none";
    }

    



    // temperature.innerHTML = Math.round(data.main.temp);
    // city.innerHTML = data.name;
    // humidity.innerHTML = data.main.humidity;
    // windSpeed.innerHTML = data.wind.speed;
};
