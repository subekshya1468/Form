let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
let confirmPasswordError = document.getElementById("confirm-password-error");
let submitError = document.getElementById("submit-error");

function validateName() {
    let name = document.getElementById("contact-name").value;

    if (name.length === 0) {
        nameError.innerHTML = "Name is required";
        return false;
    }
    if (!name.match(/^[A-Za-z]+\s[A-Za-z]+$/)) {
        nameError.innerHTML = "Enter your full name (First and Last name)";
        return false;
    }
    nameError.innerHTML = "";
    return true;
}

function validateEmail() {
    let email = document.getElementById("contact-email").value;

    if (email.length === 0) {
        emailError.innerHTML = "Email is required";
        return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
        emailError.innerHTML = "Enter a valid email";
        return false;
    }
    emailError.innerHTML = "";
    return true;
}

function validatePassword() {
    let password = document.getElementById("contact-password").value;

    if (password.length === 0) {
        passwordError.innerHTML = "Password is required";
        return false;
    }
    if (password.length < 8) {
        passwordError.innerHTML = "Password must be at least 8 characters";
        return false;
    }
    if (!password.match(/[0-9]/)) {
        passwordError.innerHTML = "Password must contain at least 1 number";
        return false;
    }
    if (!password.match(/[!@#$%^&*]/)) {
        passwordError.innerHTML = "Password must contain at least 1 special character";
        return false;
    }
    passwordError.innerHTML = "";
    return true;
}

function validateConfirmPassword() {
    let password = document.getElementById("contact-password").value;
    let confirmPassword = document.getElementById("confirm-password").value;

    if (confirmPassword.length === 0) {
        confirmPasswordError.innerHTML = "Confirm Password is required";
        return false;
    }
    if (password !== confirmPassword) {
        confirmPasswordError.innerHTML = "Passwords do not match";
        return false;
    }
    confirmPasswordError.innerHTML = "";
    return true;
}

function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();
    let isConfirmPasswordValid = validateConfirmPassword();

    if (isNameValid && isEmailValid && isPasswordValid && isConfirmPasswordValid) {
        openPopup();
        return false;
    } else {
        submitError.innerHTML = "Please fix the errors above to submit";
        return false;
    }
}

let popup = document.getElementById("popup");

function openPopup() {
    popup.style.display = "block";
}

function closePopup() {
    popup.style.display = "none";
    document.getElementById("myform").reset(); 
}