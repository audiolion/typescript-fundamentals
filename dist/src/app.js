"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var App = /** @class */ (function () {
    function App() {
        this.id = "app";
    }
    return App;
}());
function main() {
    var app = document.getElementById("app");
    setInterval(function () {
        if (app) {
            app.innerHTML = utils_1.generateRandomId("$", 7);
        }
    }, 1000);
}
main();
