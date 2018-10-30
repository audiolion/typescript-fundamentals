"use strict";
function generateRandomId(symbol, length) {
    return (symbol +
        Math.random()
            .toString(36)
            .substr(2, length));
}
function userAlert() {
    throw new Error("fail");
}
function neverReturns() {
    while (true) {
        setInterval(function () { return console.log("hello"); }, 1000);
    }
}
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        if (app) {
            app.innerHTML = generateRandomId("$", 7);
        }
    }, 1000);
}
