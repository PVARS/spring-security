"use strict";

const formLogin = document.querySelector("form");
const btnLogin = document.getElementById("btn-login");
const username = document.getElementById("username");
const password = document.getElementById("password");

const validation = () => {
    const MIN_STR = 3;
    const MAX_STR = 50;
    let errors = [];

    if (isEmpty(username.value) || isEmpty(password.value)) {
        errors.push("Please enter username and password.");
        username.classList.add("error-border");
        password.classList.add("error-border");
    } else {
        if (getLength(username.value) < MIN_STR || getLength(username.value) > MAX_STR) {
            errors.push(`Username should be in between ${MIN_STR} - ${MAX_STR} character.`);
            username.classList.add("error-border");
        }

        if (getLength(password.value) < MIN_STR || getLength(password.value) > MAX_STR) {
            errors.push(`Password should be in between ${MIN_STR} - ${MAX_STR} character.`);
            password.classList.add("error-border");
        }
    }

    if (errors.length > 0) {
        alertMessage(false, errors);
        return false;
    }
    return true
};

btnLogin.addEventListener("click", (e) => {
    e.preventDefault();

    removeParamsFromUrl();
    removeElementsErrors();

    if (validation()) {
        formLogin.submit();
    }
    return false;
});