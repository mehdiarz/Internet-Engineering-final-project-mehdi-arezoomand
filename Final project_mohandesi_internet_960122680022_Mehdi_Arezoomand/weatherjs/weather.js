class Weather {
  constructor(city) {
    this.apiKey = '0365450e586c98d1278724e98c4c1a48'
    this.city = city
  }

  // Fetch weather from API
  async getWeather() {
    const response = await fetch(
      `http://api.openweathermap.org/data/2.5/weather?q=${this.city}&appid=${this.apiKey}`
    )

    const responseData = await response.json()

    // return responseData.current_observation;
    return responseData
  }

  //Change weather location
  changeLocation(city) {
    this.city = city
    console.log('city changed')
    // this.state = state;
  }
}
