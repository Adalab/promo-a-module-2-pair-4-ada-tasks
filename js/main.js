"use strict";
const list = document.querySelector(".js__li");
const btnAdd = document.querySelector(".js_btnAdd");
const form = document.querySelector(".js_form");
const input = document.querySelector(".js_input");

// ARRAY DE TAREAS

const tasks = [
  { name: "Recoger setas en el campo", completed: true },
  { name: "Comprar pilas", completed: true },
  { name: "Poner una lavadora de blancos", completed: true },
  {
    name: "Aprender cómo se realizan las peticiones al servidor en JavaScript",
    completed: false,
  },
];

//FUNCIÓN PINTAR TODAS LAS TAREAS

function renderList(task) {
  list.innerHTML += `<li><input type="checkbox">${task.name}</li>`;
}

// //BOTÓN PARA AÑADIR A LA LISTA LO QUE SE PONGA EN EL INPUT

form.addEventListener("submit", (event) => {
  event.preventDefault();
});

btnAdd.addEventListener("click", (event) => {
  const inputValue = input.value;
  const newTask = { name: inputValue };
  tasks.push(newTask);
  renderList(newTask);
});

// function toggleCrossed() {
//   list.classList.toggle("completed");
// }

// checkBox.addEventListener("click", toggleCrossed);
// console.log(toggleCrossed);

//LO QUE APARECE AL CARGAR LA PÁGINA

tasks.forEach(renderList);
