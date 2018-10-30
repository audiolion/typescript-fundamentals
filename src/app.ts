import { generateRandomId, Component } from "./utils";

function prop(x, name) {
  console.log(x, name);
}

function param(x, name, index) {
  console.log(x, name, index);
}

@Component({ id: "app" })
class App {
  @prop
  static version?: string;

  @prop
  version2?: string;

  onInit(@param ele: HTMLElement | null): void {
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
