//DOM elements
let rockBtn = document.querySelector("#rock");
let paperBtn = document.querySelector("#paper");
let scissorsBtn = document.querySelector("#scissors");
let buttons = [...document.querySelectorAll("button")];
console.log(buttons);

buttons.forEach(btn => {
  btn.addEventListener("click", e => {
    console.log(e.target.textContent);
  });
});
