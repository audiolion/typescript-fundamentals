import { generateRandomId } from "./utils";

class App {
  id: string;
  constructor() {
    this.id = "app";
  }
}

function main(Component) {
  const cmp = new Component();
  let app = document.getElementById(cmp.id);
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("$", 7);
    }
  }, 1000);
}

main(App);
