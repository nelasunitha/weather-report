const state = {
  tempValue: 32,
  increaseTempControlButton: null,
  decreaseTempControlButton: null,
  currentTempButton: null,
  landscape:null,
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
  state.headerCityName = document.getElementById('headerCityName')
  state.cityNameInput = document.getElementById('cityNameInput')
};

let temperature;


const changeCityName = () => {
  headerCityName.innerText = state.cityNameInput.value
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

const registerEventHandlers = () => {
  loadControls();
  state.increaseTempControlButton.addEventListener('click', increaseTemp);
  state.decreaseTempControlButton.addEventListener('click', decreaseTemp);
  state.cityNameInput.addEventListener('keyup', changeCityName)
};

const changeColorByTemperature = (temperature) => {
  if (temperature >= 80) {
    tempValue.style.color = 'red';
    landscape.textContent = `"🌵__🐍_🦂_🌵🌵__🐍_🏜_🦂"` 
  } else if (temperature >= 70 && temperature <= 79) {
    tempValue.style.color = 'purple';
    landscape.textContent = "🌸🌿🌼__🌷🌻🌿_☘️🌱_🌻🌷"
  } else if (temperature >= 60 && temperature <= 69) {
    tempValue.style.color = 'blue';
    landscape.textContent = "🌾🌾_🍃_🪨__🛤_🌾🌾🌾_🍃"
  } else if (temperature >= 50 && temperature <= 59) {
    tempValue.style.color = 'orange';
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  } else {
    tempValue.style.color = 'teal';
    landscape.textContent = "🌲🌲⛄️🌲⛄️🍂🌲🍁🌲🌲⛄️🍂🌲"
  }
};



document.addEventListener('DOMContentLoaded', registerEventHandlers);
