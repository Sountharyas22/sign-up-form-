document.getElementById('signupForm').addEventListener('submit', function(event) {
    event.preventDefault();
    let isValid = true;

    // Username validation
    const username = document.getElementById('username');
    if (username.value.trim() === '') {
        username.classList.add('is-invalid');
        isValid = false;
    } else {
        username.classList.remove('is-invalid');
        username.classList.add('is-valid');
    }

    // Email validation
    const email = document.getElementById('email');
    const emailPattern = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!emailPattern.test(email.value)) {
        email.classList.add('is-invalid');
        isValid = false;
    } else {
        email.classList.remove('is-invalid');
        email.classList.add('is-valid');
    }

    // Password validation
    const password = document.getElementById('password');
    if (password.value.length < 6) {
        password.classList.add('is-invalid');
        isValid = false;
    } else {
        password.classList.remove('is-invalid');
        password.classList.add('is-valid');
    }

    // Confirm password validation
    const confirmPassword = document.getElementById('confirmPassword');
    if (confirmPassword.value !== password.value) {
        confirmPassword.classList.add('is-invalid');
        isValid = false;
    } else {
        confirmPassword.classList.remove('is-invalid');
        confirmPassword.classList.add('is-valid');
    }

    if (isValid) {
        alert('successfully!');
        // Add actual form submission logic here
    }
});

