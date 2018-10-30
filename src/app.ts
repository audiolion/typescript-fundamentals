import { generateRandomId } from "./utils";

function main() {
  let app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("$", 7);
    }
  }, 1000);
}
