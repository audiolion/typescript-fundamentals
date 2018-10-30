import { generateRandomId } from "./utils";

class App {
  static id = "app";

  onInit(ele: HTMLElement | null): void {
    var id = App.id;
    setInterval(function() {
      if (ele) {
        ele.innerHTML = generateRandomId("$", 7);
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
