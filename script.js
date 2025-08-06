// Javascript code to handle real time input validation edge cases whilst authenticating using hardcoded credentials and providing dynamic feedback
document.addEventListener('DOMContentLoaded', function() {
    const form = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const feedback = document.getElementById('feedback');

    form.addEventListener('submit', function(event) {
        event.preventDefault();
        validateCredentials();
    });


    usernameInput.addEventListener('input', function() {
        validateField(usernameInput, 'Username');
        feedback.textContent = '';
        feedback.style.color = '';
    });

    passwordInput.addEventListener('input', function() {
        validateField(passwordInput, 'Password');
        feedback.textContent = '';
        feedback.style.color = '';
    });

    function validateField(input, label) {
        if (input.value.trim() === '') {
            input.style.borderColor = '#dc3545';
        } else {
            input.style.borderColor = '#007bff';
        }
    }

    function validateCredentials() {
        const username = usernameInput.value.trim();
        const password = passwordInput.value.trim();

        // Edge case: empty fields
        if (!username && !password) {
            feedback.textContent = 'Username and password cannot be empty.';
            feedback.style.color = 'red';
            usernameInput.style.borderColor = '#dc3545';
            passwordInput.style.borderColor = '#dc3545';
            return;
        }
        if (!username) {
            feedback.textContent = 'Username cannot be empty.';
            feedback.style.color = 'red';
            usernameInput.style.borderColor = '#dc3545';
            return;
        }
        if (!password) {
            feedback.textContent = 'Password cannot be empty.';
            feedback.style.color = 'red';
            passwordInput.style.borderColor = '#dc3545';
            return;
        }

        // Edge case: minimum length
        if (username.length < 3) {
            feedback.textContent = 'Username must be at least 3 characters.';
            feedback.style.color = 'red';
            usernameInput.style.borderColor = '#dc3545';
            return;
        }
        if (password.length < 6) {
            feedback.textContent = 'Password must be at least 6 characters.';
            feedback.style.color = 'red';
            passwordInput.style.borderColor = '#dc3545';
            return;
        }

        // Hardcoded authentication
        if (username === 'admin' && password === 'password123') {
            feedback.innerHTML = `
                <span class="success-anim">
                    <span class="success-check">&#10004;</span>
                    Login successful! Welcome back.
                </span>
            `;
            usernameInput.style.borderColor = '#28a745';
            passwordInput.style.borderColor = '#28a745';
        } else {
            feedback.textContent = 'Invalid credentials. Please try again.';
            feedback.style.color = 'red';
            usernameInput.style.borderColor = '#dc3545';
            passwordInput.style.borderColor = '#dc3545';
        }
    }
});