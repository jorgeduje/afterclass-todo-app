// {
//     id: 1,
//     text: "estudiar javascript",
//     completed: false
// }

let todos = []; // 5
let contador = 1;
let addTodoButton = document.getElementById("btn-add"); // btn add
let todosList = document.getElementById("todo-list"); // container cards

let addTodo = () => {
  let todoText = prompt("Ingresa tu tarea");
  let todo = { id: contador, text: todoText, completed: false };
  todos.push(todo);

  contador++;

  pintarTarjetas();
};

addTodoButton.addEventListener("click", addTodo);

const toogleCompleted = (elemento) => {
  let encontrado = todos.find((todo) => todo.id === elemento.id);
  encontrado.completed = !encontrado.completed; // !false --> true
  pintarTarjetas();
};

const deleteTodo = (elemento) => {
  todos = todos.filter((todo) => todo.id !== elemento.id); // [ ]
  pintarTarjetas();
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
