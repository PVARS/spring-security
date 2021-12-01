"use strict";

const errorClassName = "error-border";
const errorBorder = document.getElementsByClassName(errorClassName);
const alert = document.getElementsByClassName("alert");

const alertMessage = (title = false, msg) => {
    $.alert({title: title, content: msg.join("<br>")})
};

const addClass = (element, className = errorClassName) => {
    element.classList.add(className);
};

const removeClass = (element, className = errorClassName) => {
    element.classList.remove(className);
};

const removeParamsFromUrl = () => {
    let uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        let cleanUri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, cleanUri);
    }
};

const removeElementsErrors = (element = alert) => {
    for (let errorBorderElement of errorBorder) {
        removeClass(errorBorderElement);
    }
    for (let i = 0; i < element.length; i++) {
        element[i].parentNode.removeChild(element[i]);
    }
};

const isEmpty = (str) => {
    return ((typeof str === undefined) || str === "" || !str.trim().length)
};

const getLength = (val) => {
    return val.length;
};