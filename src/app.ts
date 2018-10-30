import { random } from "lodash";
import { generateRandomId, Component } from "./utils";

@Component({ id: "app" })
class App {
  onInit(ele: HTMLElement | null): void {
    setInterval(function() {
      if (ele) {
        ele.innerHTML = generateRandomId("$", random(7, 10));
      }
    }, 1000);
  }
}

function main(Component) {
  let ele = document.getElementById(Component.id);
  const App = new Component();
  App.onInit(ele);
}

main(App);
