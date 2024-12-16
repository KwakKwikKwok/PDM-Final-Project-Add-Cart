document.addEventListener("DOMContentLoaded", function () {
    const submitBtn = document.getElementById("submitBtn");
    const usernameField = document.querySelector('input[name="username"]');
    const passwordField = document.querySelector('input[name="password"]');
    const togglePassword = document.getElementById("togglePassword");
    const eyeIcon = document.getElementById("eyeIcon");

    submitBtn.addEventListener("click", (e) => {
        e.preventDefault();

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

    togglePassword.addEventListener("click", function () {
        const isPassword = passwordField.type === "password";
        passwordField.type = isPassword ? "text" : "password";

        if (isPassword) {
            eyeIcon.src = "Assets/Icon/Eye-close.png";
        } else {
            eyeIcon.src = "Assets/Icon/Eye-open.png";
        }
    });
});

