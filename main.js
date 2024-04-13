function debouncer(delay, cd) {
  let timeout;
  return (...arguements) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => {
      cd(...arguements);
    }, delay);
  };
}

function cordinates(event) {
  console.log(event.clientX, event.clientY);
}
const cords = debouncer(1000, cordinates);

document.addEventListener("mousemove", cords);

let container = document.querySelector(".container");
let main = document.querySelector(".main");
const firsturl = "https://fakestoreapi.com/users";
const secoundurl = "https://jsonplaceholder.typicode.com/users";