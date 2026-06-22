document.addEventListener('DOMContentLoaded', () => {
    const togglePassword = document.querySelector('#togglePassword');
    const passwordInput = document.querySelector('#password');

    if (togglePassword && passwordInput) {
        togglePassword.addEventListener('click', () => {
            // Read and toggle field type toggle
            const isPasswordType = passwordInput.getAttribute('type') === 'password';
            passwordInput.setAttribute('type', isPasswordType ? 'text' : 'password');
            
            // Toggle UI Eye Icons state class structures
            togglePassword.classList.toggle('fa-eye');
            togglePassword.classList.toggle('fa-eye-slash');
        });
    }
});