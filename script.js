const mainPasswordInput = document.querySelector('.password');
const confirmPasswordInput = document.querySelector('.confirm-password');

const checkPasswordsEquals = () => {
  if (mainPasswordInput.value === confirmPasswordInput.value) {
    mainPasswordInput.classList.remove('error');
    mainPasswordInput.setCustomValidity('');
    confirmPasswordInput.setCustomValidity('');
  } else if (!mainPasswordInput.classList.contains('error')) {
    mainPasswordInput.classList.add('error');
    mainPasswordInput.setCustomValidity('Please provide the same passwords.');
    confirmPasswordInput.setCustomValidity(
      'Please provide the same passwords.'
    );
  }
};

mainPasswordInput.addEventListener('input', checkPasswordsEquals);
confirmPasswordInput.addEventListener('input', checkPasswordsEquals);
