const dummyAccount = {
            username: "testuser",
            password: "12345678"
        };

        // Form validation and login logic
        document.getElementById('loginForm').addEventListener('submit', function (e) {
            e.preventDefault(); // Prevent form submission

            const username = document.getElementById('username').value;
            const password = document.getElementById('password').value;

            if (username === dummyAccount.username && password === dummyAccount.password) {
                window.location.href = "inner-page.html"; // Redirect to inner page
            } else {
                alert("Invalid username or password.");
            }
        });