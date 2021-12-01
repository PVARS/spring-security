"use strict";

const errorBorder = document.getElementsByClassName("error-border");
const alert = document.getElementsByClassName("alert");

const alertMessage = (title = false, msg) => {
    $.alert({title: title, content: msg.join("<br>")})
};

const removeParamsFromUrl = () => {
    let uri = window.location.toString();
    if (uri.indexOf("?") > 0) {
        let cleanUri = uri.substring(0, uri.indexOf("?"));
        window.history.replaceState({}, document.title, cleanUri);
    }
};

const removeElementsErrors = (element = alert, classErrorBorder = "error-border") => {
    for (let errorBorderElement of errorBorder) {
        errorBorderElement.classList.remove(classErrorBorder);
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