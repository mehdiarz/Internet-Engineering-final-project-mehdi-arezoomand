// init storage
const storage = new Storage()

// / get stored location data
const locationData = storage.getLocationData()

const weather = new Weather(locationData.city)

// init ui
const ui = new UI()

// load Dom
addEventListener('DOMContentLoaded', getWeather)

// weather.changeLocation('Tehran');
document.getElementById('w-change-btn').addEventListener('click', (e) => {
  const city = document.getElementById('city').value
  weather.changeLocation(city)

  // store in LS
  storage.setLocationData(city)

  getWeather()

  // close modal
  $('#locModal').modal('hide')
})

function getWeather() {
  weather
    .getWeather()
    .then((results) => {
      console.log(results)
      ui.paint(results)
    })
    .catch((err) => console.log(err))
}
