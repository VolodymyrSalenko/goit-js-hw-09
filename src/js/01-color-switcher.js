
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.body;
let timerId = 0;


startBtnEl.addEventListener('click', onChangeColorClick);
stopBtnEl.addEventListener('click', onStopChangeColorClick);


function onChangeColorClick() {
    startBtnEl.setAttribute('disabled', 'true');
    stopBtnEl.removeAttribute('disabled');
    
    timerId = setInterval(
        () => {bodyEl.style.backgroundColor = getRandomHexColor()},
        1000
    );
};

function onStopChangeColorClick() {
    stopBtnEl.setAttribute('disabled', 'true');
    startBtnEl.removeAttribute('disabled');

    clearInterval(timerId);
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};