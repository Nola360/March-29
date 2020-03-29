const signup_button = document.querySelector('.signup_button');
const close_button = document.querySelector('.close_button');
const section_form = document.querySelector('section');

signup_button.addEventListener('click', function () {
  section_form.classList.add('active');
  signup_button.classList.add('active');
})

close_button.addEventListener('click', function () {
  section_form.classList.remove('active');
  signup_button.classList.remove('active');
})