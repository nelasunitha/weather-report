const state = {
  tempValue: 32,
  increaseTempControlButton: null,
  decreaseTempControlButton: null,
  currentTempButton: null,
  landscape: null,
  headerCityName: null,
  cityNameInput: null,
};

const loadControls = () => {
  // state.tempValue = document.getElementById('tempValue');
  state.increaseTempControlButton = document.getElementById(
    'increaseTempControl'
  );
  state.decreaseTempControlButton = document.getElementById(
    'decreaseTempControl'
  );
  state.currentTempButton = document.getElementById('currentTempButton');
  state.landscape = document.getElementById('landscape');
  state.headerCityName = document.getElementById('headerCityName');
  state.cityNameInput = document.getElementById('cityNameInput');
};

let temperature;

const changeCityName = () => {
  headerCityName.innerText = state.cityNameInput.value;
};

const increaseTemp = () => {
  ++state.tempValue;
  document.getElementById('tempValue').textContent = state.tempValue;
  temperature = state.tempValue;
  changeColorByTemperature(temperature);
};

const decreaseTemp = () => {
  --state.tempValue;
  document.getElementById('tempValue').textContent = state.tempValue;
  temperature = state.tempValue;
  changeColorByTemperature(temperature);
};
const getLatAndLon = () => {
  const city = state.cityNameInput.value;
  console.log(city);
  let longitude, latitude;

  return axios
    .get('http://127.0.0.1:5000/location', {
      params: {
        q: city,
      },
    })
    .then((response) => {
      latitude = response.data[0].lat;
      longitude = response.data[0].lon;
      // console.log('lat: ', {latitude, longitude});
      return { latitude, longitude };
    })
    .catch((e) => {
      console.log('error in finding latitude/longitude!');
    });
};
const getWeather = (latitude, longitude) => {
  console.log('lat: ', latitude, 'lon: ', longitude);
  let cityTemp;

  return axios
    .get('http://127.0.0.1:5000/weather', {
      params: {
        lat: latitude,
        lon: longitude,
      },
    })
    .then((response) => {
      cityTemp = response.data.main.temp;
      console.log(cityTemp);
      return cityTemp;
    })
    .catch((error) => {
      console.log(error, 'error in weather');
    });
};

const getCurrentTemp = () => {
  getLatAndLon()
    .then(({ latitude, longitude }) => {
      return getWeather(latitude, longitude);
    })
    .then((weatherData) => {
      console.log('Temperature in °F :', weatherData);
    })
    .catch((error) => {
      console.error('Error in overall flow:', error);
    });
};

const changeColorByTemperature = (temperature) => {
  if (temperature >= 80) {
    tempValue.style.color = 'red';
    landscape.textContent = '🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂';
  } else if (temperature >= 70 && temperature <= 79) {
    tempValue.style.color = 'purple';
    landscape.textContent = '🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷';
  } else if (temperature >= 60 && temperature <= 69) {
    tempValue.style.color = 'blue';
    landscape.textContent = '🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃';
  } else if (temperature >= 50 && temperature <= 59) {
    tempValue.style.color = 'orange';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  } else {
    tempValue.style.color = 'teal';
    landscape.textContent = '🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲';
  }
};

const registerEventHandlers = () => {
  loadControls();
  state.increaseTempControlButton.addEventListener('click', increaseTemp);
  state.decreaseTempControlButton.addEventListener('click', decreaseTemp);
  state.cityNameInput.addEventListener('input', changeCityName);
  state.currentTempButton.addEventListener('click', getCurrentTemp);
};

document.addEventListener('DOMContentLoaded', registerEventHandlers);
