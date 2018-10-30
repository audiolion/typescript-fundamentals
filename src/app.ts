import { generateRandomId, Component } from "./utils";

function enumerable(isEnumerable: boolean) {
  return (target, propertyKey, propertyDescriptor: PropertyDescriptor) => {
    propertyDescriptor.enumerable = isEnumerable;
  };
}

@Component({ id: "app" })
class App {
  @enumerable(false)
  onInit(ele: HTMLElement | null): void {
    setInterval(function() {
      if (ele) {
        ele.innerHTML = generateRandomId("$", 7);
      }
    }, 1000);
  }
}

for (let key in App.prototype) {
  console.log(key);
}

function main(Component) {
  let ele = document.getElementById(Component.id);
  const App = new Component();
  App.onInit(ele);
}

main(App);
