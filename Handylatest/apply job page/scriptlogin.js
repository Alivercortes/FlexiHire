// This script runs when the document is fully loaded
document.addEventListener('DOMContentLoaded', function() {
    // Select the login form element
    const loginForm = document.querySelector('.login-form');

    // Add event listener to handle form submission
    loginForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent the default form submission

        // Get input values from the form
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;

        // Basic validation (You can enhance this logic as needed)
        if (email === 'test@gmail.com' && password === 'password123') {
            alert('Login successful!');
            // Redirect to the inner page after successful login
            window.location.href = 'inner-page.html'; // Change 'inner-page.html' to your actual inner page URL
        } else {
            alert('Invalid email or password. Please try again.');
        }
    });
});
