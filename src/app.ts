import { generateRandomId } from "./utils";

class App {
  id: string;
  constructor() {
    this.id = "app";
  }
}

function main() {
  let app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("$", 7);
    }
  }, 1000);
}

main();
