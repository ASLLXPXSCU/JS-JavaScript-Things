<html>
  <head>
    <title>To-Do List</title>
  </head>
  <body>
    <h1>To-Do List</h1>
    <form id="todo-form">
      <input type="text" id="todo-input" placeholder="Enter a new to-do">
      <button type="submit">Add</button>
    </form>
    <ul id="todo-list"></ul>
    <script>
      const todoForm = document.getElementById("todo-form");
      const todoInput = document.getElementById("todo-input");
      const todoList = document.getElementById("todo-list");

      // Add a new to-do when the form is submitted
      todoForm.addEventListener("submit", event => {
        event.preventDefault();
        if (todoInput.value) {
          const newTodo = document.createElement("li");
          newTodo.textContent = todoInput.value;
          todoList.appendChild(newTodo);
          todoInput.value = "";
        }
      });
    </script>
  </body>
</html>
