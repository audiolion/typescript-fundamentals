"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var utils_1 = require("./utils");
var App = /** @class */ (function () {
    function App() {
    }
    App.id = "app";
    return App;
}());
function main(Component) {
    var app = document.getElementById(Component.id);
    setInterval(function () {
        if (app) {
            app.innerHTML = utils_1.generateRandomId("$", 7);
        }
    }, 1000);
}
main(App);
