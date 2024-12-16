const passwordField = document.getElementById('password');
const togglePassword = document.getElementById('toggle-password');

togglePassword.addEventListener('click', () => {
    const type = passwordField.type === 'password' ? 'text' : 'password';
    passwordField.type = type;
    togglePassword.textContent = type === 'password' ? '🐵' : '🙈';
});