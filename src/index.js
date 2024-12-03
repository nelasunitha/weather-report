const state = {
  tempValue: 32,
  increaseTempControlButton: null,
  decreaseTempControlButton: null,
  currentTempButton: null,
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
};

let temperature;

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
};

const changeColorByTemperature = (temperature) => {
  if (temperature >= 80) {
    tempValue.style.color = 'red';
  } else if (temperature >= 70 && temperature <= 79) {
    tempValue.style.color = 'purple';
  } else if (temperature >= 60 && temperature <= 69) {
    tempValue.style.color = 'baby blue';
  } else if (temperature >= 50 && temperature <= 59) {
    tempValue.style.color = 'orange';
  } else {
    tempValue.style.color = 'teal';
  }
};

// state.resetButton.addEventListener('click', () => {
//   state.parrotCount = 0;
//   state.addParrotCountLabel.textContent = state.parrotCount;
// });
//  };

document.addEventListener('DOMContentLoaded', registerEventHandlers);
