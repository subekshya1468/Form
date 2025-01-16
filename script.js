let nameError = document.getElementById("name-error");
let emailError = document.getElementById("email-error");
let passwordError = document.getElementById("password-error");
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
    passwordError.innerHTML = "";
    return true;
}

function validateForm() {
    let isNameValid = validateName();
    let isEmailValid = validateEmail();
    let isPasswordValid = validatePassword();

    if (isNameValid && isEmailValid && isPasswordValid) {
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
}
