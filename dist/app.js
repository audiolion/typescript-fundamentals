"use strict";
function identity(arg) {
    return arg;
}
identity("James");
function generateRandomId(optionsOrSymbol) {
    if (typeof optionsOrSymbol === "string") {
        return (optionsOrSymbol +
            Math.random()
                .toString(36)
                .substr(2, length));
    }
    return (optionsOrSymbol.symbol +
        Math.random()
            .toString(36)
            .substr(2, optionsOrSymbol.length));
}
generateRandomId("#", 7);
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        if (app) {
            app.innerHTML = generateRandomId({ symbol: "$", length: 7 });
        }
    }, 1000);
}
