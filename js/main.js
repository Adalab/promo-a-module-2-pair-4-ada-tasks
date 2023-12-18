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

// FUNCIÓN PINTAR TODAS LAS TAREAS

function renderList(task) {
  const listItem = document.createElement("li");
  listItem.innerHTML = `<input type="checkbox">${task.name}`;
  list.appendChild(listItem);

  // Añadir evento al checkbox
  const checkbox = listItem.querySelector("input[type='checkbox']");
  checkbox.addEventListener("click", () => {
    listItem.classList.toggle("crossed");
  });
}

// EVENTO AÑADIR TAREA

btnAdd.addEventListener("click", (event) => {
  event.preventDefault();
  const inputValue = input.value;
  const newTask = { name: inputValue };
  tasks.push(newTask);
  renderList(newTask);
});

//LO QUE APARECE AL CARGAR LA PÁGINA

tasks.forEach(renderList);