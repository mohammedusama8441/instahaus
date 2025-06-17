document.getElementById('signup-form').addEventListener('submit', function(e) {
  e.preventDefault(); // stops the page from reloading
  const email = document.getElementById('email').value; // gets the email typed
  document.getElementById('form-message').textContent = `Thanks! We'll notify you at ${email}`; // shows message
  this.reset(); // clears the form
});
