import { generateRandomId } from "./utils";

function Component(options: { id: string }) {
  return target => {
    target.id = options.id;
  };
}

@Component({ id: "app" })
class App {
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
