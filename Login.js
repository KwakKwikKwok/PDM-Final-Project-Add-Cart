document.addEventListener("DOMContentLoaded", function() {
    const submitBtn = document.getElementById("submitBtn");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

        const usernameField = document.querySelector('input[name="username"]');
        const passwordField = document.querySelector('input[name="password"]');
        const username = usernameField.value;
        const password = passwordField.value;

        if (username === "admin123" && password === "admin123") {
            window.location.href = "AdminPage/Admin.html";
        } else {
            alert("Invalid username or password.");
            usernameField.value = "";
            passwordField.value = "";
        }
    });
});

const togglePassword = document.getElementById("toggle-password");
const passwordField = document.querySelector('input[name="password"]');

togglePassword.addEventListener("click", function() {
    const type = passwordField.type === "password" ? "text" : "password";
    passwordField.type = type;

    togglePassword.textContent = type === "password" ? "🐵" : "🙈";
});