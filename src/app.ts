import { generateRandomId } from "./utils";

class Component {
  constructor() {
    this.log();
  }
  log() {
    console.log("Component created");
  }
}

class App extends Component {
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
