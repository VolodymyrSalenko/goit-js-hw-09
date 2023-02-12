
import Notiflix from 'notiflix';

const inputFirstDelayEl = document.querySelector('[name="delay"]');
const inputStepDelayEl = document.querySelector('[name="step"]');
const inputAmountEl = document.querySelector('[name="amount"]');
const btnSubmitEl = document.querySelector('[type="submit"]');

btnSubmitEl.addEventListener('click', onStartCreatePromise);


function onStartCreatePromise(element) {
  element.preventDefault();

  const firstDelay = Number(inputFirstDelayEl.value);
  const stepDelay = Number(inputStepDelayEl.value);
  const amountCalls = Number(inputAmountEl.value);
  let delayTime = firstDelay;

  for (let i = 1; i <= amountCalls; i += 1) {

    createPromise(i, delayTime)
    .then(({ position, delay }) => {
      console.log(`✅ Fulfilled promise ${position} in ${delay}ms`);
      Notiflix.Notify.success(`✅ Fulfilled promise ${position} in ${delay}ms`);
    })
    .catch(({ position, delay }) => {
      console.log(`❌ Rejected promise ${position} in ${delay}ms`);
      Notiflix.Notify.failure(`❌ Rejected promise ${position} in ${delay}ms`);
    });

    delayTime += stepDelay;
  };
};

function createPromise(position, delay) {
  const shouldResolve = Math.random() > 0.3;

  return new Promise((resolve, reject) => {
    setTimeout(() => {
      if (shouldResolve) {
        resolve({ position, delay });
      } else {
        reject({ position, delay });
      }
    },
    delay);
  });  
};