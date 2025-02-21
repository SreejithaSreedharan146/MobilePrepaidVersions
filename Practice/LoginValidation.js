document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");
    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");

    const usernameError = document.createElement("p");
    usernameError.style.color = "red";
    usernameError.style.fontSize = "12px";
    usernameInput.insertAdjacentElement("afterend", usernameError);

    const passwordError = document.createElement("p");
    passwordError.style.color = "red";
    passwordError.style.fontSize = "12px";
    passwordInput.insertAdjacentElement("afterend", passwordError);

    form.addEventListener("submit", function (event) {
        let valid = true;

        const usernameRegex = /^[a-zA-Z0-9_]{4,16}$/;
        if (!usernameRegex.test(usernameInput.value)) {
            usernameError.textContent = "Username must be 4-16 characters long (letters, numbers, or underscores only).";
            valid = false;
        } else {
            usernameError.textContent = "";
        }

        const passwordRegex = /^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$/;
        if (!passwordRegex.test(passwordInput.value)) {
            passwordError.textContent = "Password should have minimum of 6 characters and include at least one letter and one number.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
