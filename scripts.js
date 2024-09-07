const testDiv = document.createElement("div");
testDiv.setAttribute("id", "test");
testDiv.textContent = "TEST"
const body = document.querySelector("body");
body.insertBefore(testDiv, body.children[0]);