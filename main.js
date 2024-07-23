//
// let todos = JSON.parse(localStorage.getItem("todos")); // null
// let todos = [];

// let valorInicial = JSON.parse(localStorage.getItem("todos"));

// if (valorInicial !== null) {
//   // [{}{}{}] !== null --> true
//   todos = valorInicial;
// }

//  a || b || c || d --> truthy

let todos = JSON.parse(localStorage.getItem("todos")) || [];

let contador = 1;
let addTodoButton = document.getElementById("btn-add"); // btn add
let todosList = document.getElementById("todo-list"); // container cards

let addTodo = () => {
  let todoText = prompt("Ingresa tu tarea");
  let todo = { id: contador, text: todoText, completed: false };
  todos.push(todo);

  contador++;

  pintarTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};

addTodoButton.addEventListener("click", addTodo);

const toogleCompleted = (elemento) => {
  let encontrado = todos.find((todo) => todo.id === elemento.id);
  encontrado.completed = !encontrado.completed; // !false --> true
  pintarTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};

const deleteTodo = (elemento) => {
  todos = todos.filter((todo) => todo.id !== elemento.id); // [ ]
  pintarTarjetas();
  localStorage.setItem("todos", JSON.stringify(todos));
};

const pintarTarjetas = () => {
  todosList.innerHTML = "";

  todos.forEach((elemento) => {
    let item = document.createElement("li");
    item.className = "card";
    if (elemento.completed === true) {
      item.classList.add("completed");
    }
    item.innerHTML = `<span>${elemento.text}</span> 
      <button class="toggle-button">
       ${elemento.completed === false ? "No completada" : "Completada"}
      </button>
      <button class="delete-button">Borrar</button>`;

    let toogleButton = item.querySelector(".toggle-button");
    let deleteButton = item.querySelector(".delete-button");

    toogleButton.addEventListener("click", () => {
      toogleCompleted(elemento);
    });

    deleteButton.addEventListener("click", () => {
      deleteTodo(elemento);
    });

    todosList.appendChild(item);
  });
};

pintarTarjetas();

// let botonDeLocalStorage = document.getElementById("local-btn");

// botonDeLocalStorage.addEventListener("click", () => {
//   localStorage.setItem(
//     "tareas",
//     JSON.stringify([
//       {
//         id: 1,
//         text: "estudiar javascript",
//         completed: false,
//       },
//     ])
//   );
// });

// // localStorage.setItem(); // ---> guardar info
// // localStorage.getItem(); // ---> obtener info
// // localStorage.removeItem(); // ---> eliminar info
// // localStorage.clear(); // ---> limpiar el localStorage

// let btnGetLocal = document.getElementById("local-btn-get");
// btnGetLocal.addEventListener("click", () => {
//   let tareas = JSON.parse(localStorage.getItem("tareas"));
//   console.log(tareas);
// });

// let btnRemove = document.getElementById("local-btn-remove");
// btnRemove.addEventListener("click", () => {
//   localStorage.removeItem("frase");
// });

// let btnClear = document.getElementById("local-btn-clear");
// btnClear.addEventListener("click", () => {
//   localStorage.clear();
// });

// let convertir = JSON.parse("true");
// let convertir = "true";
// let x = JSON.stringify([{ name: "pepe", id: 2 }]);
// let convertir = JSON.parse(x);
// console.log(typeof convertir);
