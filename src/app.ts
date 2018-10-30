import { generateRandomId } from "./utils";

class App {
  static id = "app";
}

function main(Component) {
  let app = document.getElementById(Component.id);
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("$", 7);
    }
  }, 1000);
}

main(App);
