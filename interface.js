document.addEventListener("DOMContentLoaded", () => {
  const updateTemperature = () => {
    document.querySelector('#temperature').innerText = thermostat.temperature + " °C";
    document.querySelector('#forecast').className = thermostat.energyUsage();
  }
  const thermostat = new Thermostat();
  updateTemperature();
  

  document.querySelector('#temperature-up').addEventListener('click', () => {
    thermostat.up();
    updateTemperature();
  });

  document.querySelector('#temperature-down').addEventListener('click', () => {
    thermostat.down();
    updateTemperature();
  });

  document.querySelector('#temperature-reset').addEventListener('click', () => {
    thermostat.resetTemperature();
    updateTemperature();
  });

  document.querySelector('#powersaving-on').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOn()
    document.querySelector('#power-saving-mode').innerText = "On";
  });

  document.querySelector('#powersaving-off').addEventListener('click', () => {
    thermostat.switchPowerSavingModeOff()
    document.querySelector('#power-saving-mode').innerText = "Off";
  });

  document.querySelector('#select-city').addEventListener('submit', (event) => { 
    event.preventDefault();
    const city = document.querySelector('#current-city').value;                 
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=de921a59d74548c35e12b3768f7b0e4c&units=metric`
  
    fetch(url)
      .then((response) => {
        return response.json()
      })
      .then((data) => {
        document.querySelector('#current-temperature').innerText = data.main.temp
        document.querySelector('#min-temperature').innerText = data.main.temp_min
        document.querySelector('#max-temperature').innerText = data.main.temp_max
        document.querySelector('#wind-speed').innerText = data.wind.speed
    })   

  })
})
