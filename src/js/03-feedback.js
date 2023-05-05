import throttle from 'lodash.throttle';

const STORAGE_KEY = 'feedback-form-state';
const refs = {
  form: document.querySelector('.feedback-form'),
  textarea: document.querySelector('.feedback-form textarea'),
  input: document.querySelector('input'),
};


//correo
const formData = {};
refs.form.addEventListener('input', throttle(onTextareaInput, 500));

refs.form.addEventListener('submit', event => {
  event.preventDefault();
  event.currentTarget.reset();
  const objData = JSON.parse(localStorage.getItem(STORAGE_KEY));
  localStorage.removeItem(STORAGE_KEY);
});

function onTextareaInput(event) {
  formData[event.target.name] = e.target.value;
  const stringifiedData = JSON.stringify(formData);
  localStorage.setItem(STORAGE_KEY, stringifiedData);
}

//area grande
textArea();
function textArea() {
  const savedMessage = JSON.parse(localStorage.getItem(STORAGE_KEY));

  if (savedMessage === null) {
    //null
    return;
  }
  refs.textarea.value = savedMessage['message'] || '';
  refs.input.value = savedMessage['email'] || '';
}
