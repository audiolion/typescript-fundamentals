const symbol: string = "#";
const hashLength: number = false;

function generateRandomId() {
  return (
    symbol +
    Math.random()
      .toString(36)
      .substr(2, hashLength)
  );
}

function main() {
  let app = document.getElementById("app");
  setInterval(function() {
    if (app) {
      app.innerHTML = generateRandomId();
    }
  }, 1000);
}
