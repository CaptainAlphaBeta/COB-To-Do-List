const newTodoInput = document.querySelector("#new-todo");
const addTodoButton = document.querySelector("#add-todo");
const todoList = document.querySelector(".todo-list");
const clearAllButton = document.querySelector("#clear-all");

addTodoButton.addEventListener("click", () => {
  const newTodo = newTodoInput.value;

  if (newTodo) {
    const todoItem = document.createElement("li");
    todoItem.textContent = newTodo;
    todoItem.classList.add("todo-item");

    const deleteButton = document.createElement("button");
    deleteButton.textContent = "Delete";
    deleteButton.addEventListener("click", () => {
      todoItem.remove();
    });

    todoItem.appendChild(deleteButton);

    todoList.appendChild(todoItem);

    newTodoInput.value = "";
  }
});

clearAllButton.addEventListener("click", () => {
  todoList.innerHTML = "";
});

todoList.addEventListener("click", (e) => {
  const todoItem = e.target.closest(".todo-item");

  if (todoItem) {
    todoItem.classList.toggle("completed");
  }
});