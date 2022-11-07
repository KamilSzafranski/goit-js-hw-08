import { save, load } from './storage';
import lodash from 'lodash';

const form = document.querySelector('.feedback-form');
const inputData = {};
const localStorageValue = load('feedback-form-state');

const inputTracking = event => {
  const {
    elements: { email, message },
  } = event.currentTarget;

  inputData.email = email.value;
  inputData.message = message.value;
};

const updateStorage = lodash.throttle(() => {
  save('feedback-form-state', inputData);
}, 1500);

const formSubmit = event => {
  event.preventDefault();
  console.log(
    `Aktualna wartość email: [${inputData.email}], Aktualna wartość message: [${inputData.message}]`
  );
  localStorage.clear();
  form.reset();
};

const checkStorage = () => {
  if (localStorage.length > 0) {
    form.email.value = localStorageValue.email;
    form.message.value = localStorageValue.message;
  }
};

form.addEventListener('input', inputTracking);
form.addEventListener('input', updateStorage);
form.addEventListener('submit', formSubmit);
checkStorage();
