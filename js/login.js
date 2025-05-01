const container = document.getElementById('container');
const signUpButton = document.getElementById('signUp');
const signInButton = document.getElementById('signIn');

// Form elements
const signUpForm = document.querySelector('.sign-up-container form');
const signInForm = document.querySelector('.sign-in-container form');

// Slide effects
signUpButton.addEventListener('click', () => {
  container.classList.add("right-panel-active");
});

signInButton.addEventListener('click', () => {
  container.classList.remove("right-panel-active");
});

// Signup logic
signUpForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = signUpForm.querySelector('input[type="text"]').value;
  const password = signUpForm.querySelector('input[type="password"]').value;

  if (username && password) {
    localStorage.setItem('username', username);
    localStorage.setItem('password', password);
    alert('Signup successful! You can now log in.');
    container.classList.remove("right-panel-active");
  } else {
    alert('Please enter both username and password.');
  }
});

// Login logic
signInForm.addEventListener('submit', function (e) {
  e.preventDefault();
  const username = signInForm.querySelector('input[type="text"]').value;
  const password = signInForm.querySelector('input[type="password"]').value;

  const savedUsername = localStorage.getItem('username');
  const savedPassword = localStorage.getItem('password');

  if (username === savedUsername && password === savedPassword) {
    alert('Login successful!');
    window.location.href = './home.html';
    // Redirect or do something after successful login
  } else {
    alert('Invalid credentials. Please try again.');
  }
});
