import { generateRandomId } from "./utils";

class App {
  private readonly foo = "bar";
  private static id = "app";

  protected onInit(ele: HTMLElement | null): void {
    this.foo = "x";
    var id = App.id;
    setInterval(function() {
      if (ele) {
        ele.innerHTML = generateRandomId("$", 7);
      }
    }, 1000);
  }
}

new App().onInit;

class Foo extends App {
  bar() {
    this.onInit;
  }
}

function main(Component) {
  let ele = document.getElementById(Component.id);
  const App = new Component();
  App.onInit(ele);
}

main(App);
