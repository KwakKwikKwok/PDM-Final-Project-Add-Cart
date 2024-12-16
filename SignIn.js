// Select DOM elements
const passwordField = document.getElementById("password");
const togglePassword = document.getElementById("togglePassword");
const eyeIcon = document.getElementById("eyeIcon");

togglePassword.addEventListener("click", function () {
    const isPassword = passwordField.type === "password";
    passwordField.type = isPassword ? "text" : "password";

    if (isPassword) {
        eyeIcon.src = "Assets/Icon/Eye-close.png"; // Closed-eye icon
    } else {
        eyeIcon.src = "Assets/Icon/Eye-open.png"; // Open-eye icon
    }
});
