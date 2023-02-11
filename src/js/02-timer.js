
import flatpickr from "flatpickr";
import Notiflix from 'notiflix';
import "flatpickr/dist/flatpickr.min.css";

const inputDataEl = document.getElementById('datetime-picker');
const startBtnEl = document.querySelector('[data-start]');
const daysEl = document.querySelector('[data-days]');
const hoursEl = document.querySelector('[data-hours]');
const minutesEl = document.querySelector('[data-minutes]');
const secondsEl = document.querySelector('[data-seconds]');

let selectDate = 0;
let timerId = null;

const options = {
  enableTime: true,
  time_24hr: true,
  defaultDate: new Date(),
  minuteIncrement: 1,
  
  onClose(selectedDates) {
      console.log(selectedDates[0]);

      selectDate = selectedDates[0];
      clearInterval(timerId);
      
      if ((selectDate - Date.now()) < 0) {
          Notiflix.Notify.failure("Please choose a date in the future");
          startBtnEl.setAttribute('disabled', 'true');
      }
      else { startBtnEl.removeAttribute('disabled') };
  },
};


startBtnEl.setAttribute('disabled', 'true');
flatpickr(inputDataEl, options);
startBtnEl.addEventListener('click', onStartTimerClick);


function onStartTimerClick() {
    timerId = setInterval(() => {
        const diffTime = selectDate - Date.now();
        if (diffTime < 1000) {clearInterval(timerId)};
        addTimerDocument(diffTime);
    },
    1000);
};

function addTimerDocument(time) {
    const timer = convertMs(time);

    daysEl.textContent = addLeadingZero(timer.days);
    hoursEl.textContent = addLeadingZero(timer.hours);
    minutesEl.textContent = addLeadingZero(timer.minutes);
    secondsEl.textContent = addLeadingZero(timer.seconds);    
};

function addLeadingZero(value) {
    const result = `${value}`;

    if (result.length < 2) {return result.padStart(2, "0")};
    return result;
};

function convertMs(ms) {
  const second = 1000;
  const minute = second * 60;
  const hour = minute * 60;
  const day = hour * 24;

  const days = Math.floor(ms / day);
  const hours = Math.floor((ms % day) / hour);
  const minutes = Math.floor(((ms % day) % hour) / minute);
  const seconds = Math.floor((((ms % day) % hour) % minute) / second);

  return { days, hours, minutes, seconds };
};






