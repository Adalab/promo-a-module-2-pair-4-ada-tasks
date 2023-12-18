"use strict";
const list = document.querySelector(".js__li");
const checkBox = document.querySelector(".js__checkbox");

function toggleCrossed() {
  list.classList.toggle("crossed");
}

checkBox.addEventListener("click", (event) => {
  toggleCrossed();
});
