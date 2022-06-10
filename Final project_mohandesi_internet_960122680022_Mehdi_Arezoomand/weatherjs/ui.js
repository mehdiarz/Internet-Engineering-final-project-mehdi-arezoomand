// class UI{
//   constructor(){
//     this.location = document.getElementById('w-location')
//     this.desc = document.getElementById('w-desc')
//     this.string = document.getElementById('w-string')
//     this.details = document.getElementById('w-details')
//     this.icon = document.getElementById('w-icon')
//     this.humidity = document.getElementById('w-humidity')
//     this.feelsLike = document.getElementById('w-feelsLike')
//     this.dewpoint = document.getElementById('w-dewpoint')
//     this.wind = document.getElementById('w-wind')
    
//   }

//   paint(weather){
//     this.location.textContent= weather.display_location.full;
//     this.desc.textContent= weather.weather;
//     this.string.textContent=weather.temperature_string;
//     this.icon.setAttribute('src',weather.icon_url);
//     this.humidity.textContent=`Relative Humidity: ${weather.relative_humidity}`;
//     this.humidity.textContent=`Feels Like: ${weather.feelsLike_string}`;
//     this.humidity.textContent=`DewPoint: ${weather.dewpoint_string}`;
//     this.humidity.textContent=`Wind: ${weather.wind_string}`;
//   }
// }




//----------------------------------
class UI{
  constructor(){
    this.location= document.getElementById('w-location');
    this.desc = document.getElementById('w-desc');
    this.string = document.getElementById('w-string')
    this.details = document.getElementById('w-details')
    this.icon = document.getElementById('w-icon')
    this.humidity = document.getElementById('w-humidity')
    this.feelsLike = document.getElementById('w-feelsLike')
    this.dewpoint = document.getElementById('w-dewpoint')
    this.wind = document.getElementById('w-wind')
  }

  paint(weather){
    console.log(weather);
    this.location.textContent=weather.name;
    this.desc.textContent= weather.weather[0].description;
    this.string.textContent=weather.main.temp;
    this.icon.setAttribute('src',`http://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`);
    this.humidity.textContent= `Reletive Humidity: ${weather.main.humidity}%`;
    this.dewpoint.textContent=`Dew Point: ${weather.main.temp}`;
    this.feelsLike.textContent=`Feels Like: ${weather.main.feels_like}`;
    this.wind.textContent=`Wind: ${weather.wind.speed}`;

  }
}













