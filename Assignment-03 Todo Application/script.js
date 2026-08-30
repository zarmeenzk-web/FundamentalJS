// JS: CRUD Application with Array
let todos = []; // Todos store karne ke liye array
let nextId = 1; // Har naye todo ke liye auto ID

// Helper: Table ko dobara render karna - READ operation
function renderTodos() { // Read: Todos display karna【666917682298240894483†L16-L18】
  let todoList = document.getElementById("todoList");
  todoList.innerHTML = ""; // pehle table clear karo

  todos.forEach(todo => { // har todo ke liye row banao
    let row = `
      <tr>
        <td>${todo.id}</td>
        <td>${todo.title}</td>
        <td>
          <button class="edit-btn" onclick="updateTodo(${todo.id})">Edit</button>
          <button class="delete-btn" onclick="deleteTodo(${todo.id})">Delete</button>
        </td>
      </tr>
    `;
    todoList.innerHTML += row;
  });
}

// 1. CREATE: New Todo add karna【666917682298240894483†L11-L12】
function createTodo() {
  let input = document.getElementById("todoInput");
  let title = input.value.trim(); // space hata do

  if(title === "") { // validation
    alert("Please enter Todo Title!");
    return;
  }

  let newTodo = { id: nextId, title: title }; // Sirf ID aur Title【657096337229516113112†L13-L15】
  todos.push(newTodo); // array me add
  nextId++; // agle ID ke liye
  input.value = ""; // input clear
  renderTodos(); // table update
}

// 3. UPDATE: Todo title update karna【666917682298240894483†L22-L24】
function updateTodo(id) {
  let newTitle = prompt("Enter new Title:"); // user se naya title
  if(newTitle!== null && newTitle.trim()!== "") {
    // find karke update
    let todo = todos.find(t => t.id === id); // HOF find use kiya
    if(todo) {
      todo.title = newTitle.trim();
      renderTodos();
    }
  }
}

// 4. DELETE: Todo delete karna【666917682298240894483†L24-L25】
function deleteTodo(id) {
  // filter se wo id wala todo hata do, naya array banao
  todos = todos.filter(t => t.id!== id); // HOF filter use kiya
  renderTodos();
}

// Page load hote hi 3 sample todos show karo
todos = [
  {id: 1, title: "Learn JavaScript"}, // Example【666917682298240894483†L19-L20】
  {id: 2, title: "Complete Assignment"},
  {id: 3, title: "Practice CRUD"}
];
nextId = 4;
renderTodos();