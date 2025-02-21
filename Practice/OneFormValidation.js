document.addEventListener("DOMContentLoaded", function () {
    const form = document.querySelector("form");

    const usernameInput = document.getElementById("username");
    const passwordInput = document.getElementById("password");
    const confirmPasswordInput = document.getElementById("confirm-password");
    const firstNameInput = document.getElementById("first-name");
    const lastNameInput = document.getElementById("last-name");
    const emailInput = document.getElementById("email");
    const phoneInput = document.getElementById("phone");
    const dobInput = document.getElementById("dob");
    const departmentInput = document.getElementById("department");
    const experienceInput = document.getElementById("experience");

    const createErrorElement = (inputElement) => {
        const errorElement = document.createElement("p");
        errorElement.style.color = "red";
        errorElement.style.fontSize = "12px";
        inputElement.insertAdjacentElement("afterend", errorElement);
        return errorElement;
    };

    const usernameError = createErrorElement(usernameInput);
    const passwordError = createErrorElement(passwordInput);
    const confirmPasswordError = createErrorElement(confirmPasswordInput);
    const firstNameError = createErrorElement(firstNameInput);
    const lastNameError = createErrorElement(lastNameInput);
    const emailError = createErrorElement(emailInput);
    const phoneError = createErrorElement(phoneInput);
    const dobError = createErrorElement(dobInput);
    const departmentError = createErrorElement(departmentInput);
    const experienceError = createErrorElement(experienceInput);

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
            passwordError.textContent = "Password must have at least 6 characters, including a letter and a number.";
            valid = false;
        } else {
            passwordError.textContent = "";
        }

        if (passwordInput.value !== confirmPasswordInput.value) {
            confirmPasswordError.textContent = "Passwords do not match.";
            valid = false;
        } else {
            confirmPasswordError.textContent = "";
        }

        const nameRegex = /^[A-Za-z]+$/;
        if (!nameRegex.test(firstNameInput.value)) {
            firstNameError.textContent = "First name should contain only letters.";
            valid = false;
        } else {
            firstNameError.textContent = "";
        }

        if (!nameRegex.test(lastNameInput.value)) {
            lastNameError.textContent = "Last name should contain only letters.";
            valid = false;
        } else {
            lastNameError.textContent = "";
        }

        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(emailInput.value)) {
            emailError.textContent = "Please enter a valid email address.";
            valid = false;
        } else {
            emailError.textContent = "";
        }

        const phoneRegex = /^\d{10}$/;
        if (!phoneRegex.test(phoneInput.value)) {
            phoneError.textContent = "Phone number must be a 10-digit number.";
            valid = false;
        } else {
            phoneError.textContent = "";
        }

        if (!dobInput.value) {
            dobError.textContent = "Please select a date of birth.";
            valid = false;
        } else {
            dobError.textContent = "";
        }

        let genderError = document.getElementById("genderError");
        if (!document.querySelector('input[name="gender"]:checked')) {
            genderError.innerText = "Please select your gender.";
            isValid = false;
        } else {
            genderError.innerText = "";
        }

        let maritalStatusError = document.getElementById("maritalStatusError");
        if (!document.querySelector('input[name="maritalStatus"]:checked')) {
            maritalStatusError.innerText = "Please select your marital status.";
            isValid = false;
        } else {
            maritalStatusError.innerText = "";
        }


        if (departmentInput.value === "") {
            departmentError.textContent = "Please select a department.";
            valid = false;
        } else {
            departmentError.textContent = "";
        }

        if (experienceInput.value === "" || isNaN(experienceInput.value) || experienceInput.value < 0) {
            experienceError.textContent = "Please enter valid years of experience.";
            valid = false;
        } else {
            experienceError.textContent = "";
        }

        if (!valid) {
            event.preventDefault();
        }
    });
});
