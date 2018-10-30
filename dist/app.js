"use strict";
var symbol = "#";
var hashLength = false;
function generateRandomId() {
    return (symbol +
        Math.random()
            .toString(36)
            .substr(2, hashLength));
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        if (app) {
            app.innerHTML = generateRandomId();
        }
    }, 1000);
}
