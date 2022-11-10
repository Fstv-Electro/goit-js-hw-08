import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-from-state';

storageForm();

function onInput() {
  const formData = new FormData(formEl);
  let userForm = {};
  formData.forEach((value, name) => (userForm[name] = value));
  localStorage.setItem(localStorageKey, JSON.stringify(userForm));
}

formEl.addEventListener('input', throttle(onInput, 500));

function storageForm() {
  let parseForm = localStorage.getItem('localStorageKey');
  if (parseForm) {
    parseForm = JSON.parse(parseForm);
    console.log(parseForm);
    Object.entries(parseForm).forEach(([name, value]) => {
      formEl.elements[name].value = value;
    });
  }
}

formEl.addEventListener('submit', onSubmit);

function onSubmit(evt) {
  evt.preventDefault();
  localStorage.removeItem(localStorageKey);
  let userForm = {};
  const formData = new FormData(formEl);
  formData.forEach((value, name) => (userForm[name] = value));
  console.log(userForm);
  formEl.reset();
}
