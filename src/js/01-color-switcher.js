
const startBtnEl = document.querySelector('[data-start]');
const stopBtnEl = document.querySelector('[data-stop]');
const bodyEl = document.body;
let timerId = 0;


startBtnEl.addEventListener('click', onChangeColorClick);
stopBtnEl.addEventListener('click', onStopChangeColorClick);


function onChangeColorClick() {
    startBtnEl.setAttribute('disabled', 'true');
    
    timerId = setInterval(
        () => {bodyEl.style.backgroundColor = getRandomHexColor()},
        1000
    );
};

function onStopChangeColorClick() {
    clearInterval(timerId);
    startBtnEl.removeAttribute('disabled');
};

function getRandomHexColor() {
  return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
};