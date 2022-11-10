import throttle from 'lodash.throttle';

const formEl = document.querySelector('.feedback-form');
const localStorageKey = 'feedback-from-state';
const formData = {};

formEl.addEventListener('input', throttle(onInput, 500));
formEl.addEventListener('submit', onSubmit);

storageForm();

function onInput(e) {
  formData[e.target.name] = e.target.value;
  localStorage.setItem(localStorageKey, JSON.stringify(formData));
}

function onSubmit(e) {
  e.preventDefault();
  formData.email = formEl.elements.email.value;
  formData.message = formEl.elements.message.value;

  console.log(formData);

  formEl.reset();
  localStorage.removeItem(localStorageKey, JSON.stringify(formData));
}

function storageForm() {
  const saveForm = localStorage.getItem(localStorageKey);
  if (saveForm) {
    const parseForm = JSON.parse(saveForm);
    for (const parse in parseForm) {
      if (parseForm.hasOwnProperty(parse)) {
        formEl.elements[parse].value = parseForm[parse];
        formData[parse] = parseForm[parse];
      }
    }
  }
}

// function storageForm() {
//   let parseForm = localStorage.getItem('localStorageKey');
//   if (parseForm) {
//     parseForm = JSON.parse(parseForm);
//     console.log(parseForm);
//     Object.entries(parseForm).forEach(([name, value]) => {
//       formEl.elements[name].value = value;
//       formData.elements[name].value = value;
//     });
//   }
// }

// function onInput() {
//   const formData = new FormData(formEl);
//   let userForm = {};
//   formData.forEach((value, name) => (userForm[name] = value));
//   localStorage.setItem(localStorageKey, JSON.stringify(userForm));
// }

// function onSubmit(evt) {
//   evt.preventDefault();
//   localStorage.removeItem(localStorageKey);
//   let userForm = {};
//   // const formData = new FormData(formEl);
//   formData.forEach((value, name) => (userForm[name] = value));
//   console.log(userForm);
//   formEl.reset();
// }
