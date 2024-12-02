const state = {
    tempValue: 32,
    increaseTempControlButton: null,
    decreaseTempControlButton: null,
    currentTempButton: null,
  };

  const loadControls = () => {
    // state.tempValue = document.getElementById('tempValue');
    state.increaseTempControlButton = document.getElementById('increaseTempControl');
    state.decreaseTempControlButton = document.getElementById('decreaseTempControl');
    state.currentTempButton = document.getElementById('currentTempButton')
  };

  const increaseTemp = () => {
    ++state.tempValue;
    document.getElementById('tempValue').textContent = state.tempValue
    if (state.tempValue >= 80){
        tempValue.style.color = 'red';
      } else if (state.tempValue >=70 && state.tempValue <= 79 ) {
          tempValue.style.color = 'pink';
      } else if (state.tempValue >=60 && state.tempValue <= 69 ) {
          tempValue.style.color = 'baby blue';
      } else if (state.tempValue >=50 && state.tempValue <= 59 ) {
          tempValue.style.color = 'orange';
      } else {
          tempValue.style.color = 'teal';
      };
  };

  const decreaseTemp = () => {
    --state.tempValue;
    document.getElementById('tempValue').textContent = state.tempValue
    if (state.tempValue >= 80){
        tempValue.style.color = 'red';
      } else if (state.tempValue >=70 && state.tempValue <= 79 ) {
          tempValue.style.color = 'pink';
      } else if (state.tempValue >=60 && state.tempValue <= 69 ) {
          tempValue.style.color = 'baby blue';
      } else if (state.tempValue >=50 && state.tempValue <= 59 ) {
          tempValue.style.color = 'orange';
      } else {
          tempValue.style.color = 'teal';
      };
  };

  const registerEventHandlers = () => {
    loadControls();
    state.increaseTempControlButton.addEventListener('click', (increaseTemp))
    state.decreaseTempControlButton.addEventListener('click', (decreaseTemp))
  };



    // state.resetButton.addEventListener('click', () => {
    //   state.parrotCount = 0;
    //   state.addParrotCountLabel.textContent = state.parrotCount;
    // });
//  };

  document.addEventListener('DOMContentLoaded', registerEventHandlers);