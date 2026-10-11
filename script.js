// dark / ight 
const html = document.documentElement;
const themeButton = document.getElementById('theme-toggle');

themeButton.addEventListener('click', () => {
  if (html.dataset.theme === 'dark') {
    html.dataset.theme = 'light';
    themeButton.textContent = 'Dark mode';
  } else {
    html.dataset.theme = 'dark';
    themeButton.textContent = 'Light mode';
  }
});

// contact form validation
const form = document.getElementById('contact-form');
const status = document.getElementById('form-status');

// Pure function: values in, object of error messages out. {} means valid
function validate(values) {
  const errors = {};

  if (values.name.trim() === '') {
    errors.name = 'Please enter your name.';
  }

  if (values.email.trim() === '') {
    errors.email = 'Please enter your email address.';
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email.trim())) {
    errors.email = 'This email looks wrong. Use a format like name@example.com.';
  }

  if (values.message.trim() === '') {
    errors.message = 'Please write a message.';
  }

  return errors;
}

// show or hide the message under one field
function showError(field, message) {
  const input = document.getElementById(field);
  const errorText = document.getElementById(field + '-error');

  if (message) {
    errorText.textContent = message;
    errorText.hidden = false;
    input.setAttribute('aria-invalid', 'true');
    input.setAttribute('aria-describedby', field + '-error');
  } else {
    errorText.textContent = '';
    errorText.hidden = true;
    input.removeAttribute('aria-invalid');
    input.removeAttribute('aria-describedby');
  }
}

form.addEventListener('submit', (event) => {
  event.preventDefault(); // stop the page from reloading

  const values = {
    name: document.getElementById('name').value,
    email: document.getElementById('email').value,
    message: document.getElementById('message').value,
  };

  const errors = validate(values);

  showError('name', errors.name);
  showError('email', errors.email);
  showError('message', errors.message);

  if (Object.keys(errors).length > 0) {
    status.textContent = 'Please fix the errors above.';
    status.className = 'form-status error';
    return;
  }

  status.textContent = 'Thank you, ' + values.name.trim() + '! Your message was sent.';
  status.className = 'form-status success';
  form.reset();
});
