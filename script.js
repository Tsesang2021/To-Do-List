const container = document.getElementById("to-do-list");
const button = document.querySelector("button");

function myList() {
  fetch(
    "https://jsonplaceholder.typicode.com/todos/1" +
      (Math.floor(Math.random() * 200) + 1)
  )
    .then((response) => response.json())
    .then((data) => {
      const output = document.createTextNode(data.title);
      const li = document.createElement("li");
      li.appendChild(output);
      container.appendChild(li);
    });
}
button.addEventListener("click", myList);
