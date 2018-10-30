type ValidSymbol = "#" | "$";

function generateRandomId(symbol: ValidSymbol, length: number): string {
  return (
    symbol +
    Math.random()
      .toString(36)
      .substr(2, length)
  );
}

function userAlert(): never {
  throw new Error("fail");
}

function main() {
  let app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId("$", 7);
    }
  }, 1000);
}
