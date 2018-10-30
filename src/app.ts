import { generateRandomId } from "./utils";

interface Component {
  onInit(ele: HTMLElement | null): void;
}

class App implements Component {
  static id = "app";

  onInit(ele: HTMLElement | null): void {
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
