function generateRandomId() {
  return "#" + Math.random.toString(36).substr(2, 7);
}

function main() {
  let app = document.getElementById("app");
  setInterval(function() {
    app.innerHTML = generateRandomId();
  }, 1000);
}
