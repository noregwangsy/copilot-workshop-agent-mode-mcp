const STORAGE_KEY = "offline-todo-items";

const form = document.querySelector("#todo-form");
const input = document.querySelector("#todo-input");
const list = document.querySelector("#todo-list");
const emptyMessage = document.querySelector("#empty-message");
const remainingCount = document.querySelector("#remaining-count");

let todos = loadTodos();

// 從瀏覽器儲存空間載入待辦資料。
function loadTodos() {
  try {
    const savedTodos = localStorage.getItem(STORAGE_KEY);
    const parsedTodos = savedTodos ? JSON.parse(savedTodos) : [];
    return Array.isArray(parsedTodos) ? parsedTodos : [];
  } catch (error) {
    return [];
  }
}

// 將目前清單保存到瀏覽器，讓重新整理後資料仍然存在。
function saveTodos() {
  localStorage.setItem(STORAGE_KEY, JSON.stringify(todos));
}

// 重新建立清單畫面與統計數字。
function renderTodos() {
  list.replaceChildren();
  emptyMessage.hidden = todos.length > 0;

  todos.forEach((todo) => {
    const item = document.createElement("li");
    item.className = `todo-item${todo.completed ? " completed" : ""}`;

    const checkbox = document.createElement("input");
    checkbox.className = "todo-check";
    checkbox.type = "checkbox";
    checkbox.checked = todo.completed;
    checkbox.setAttribute("aria-label", `完成待辦：${todo.text}`);
    checkbox.addEventListener("change", () => toggleTodo(todo.id));

    const text = document.createElement("span");
    text.className = "todo-text";
    text.textContent = todo.text;

    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.type = "button";
    deleteButton.textContent = "刪除";
    deleteButton.setAttribute("aria-label", `刪除待辦：${todo.text}`);
    deleteButton.addEventListener("click", () => deleteTodo(todo.id));

    item.append(checkbox, text, deleteButton);
    list.append(item);
  });

  const unfinishedCount = todos.filter((todo) => !todo.completed).length;
  remainingCount.textContent = `未完成：${unfinishedCount} 項`;
}

function addTodo(text) {
  todos.push({
    id: `${Date.now()}-${Math.random().toString(16).slice(2)}`,
    text,
    completed: false
  });
  saveTodos();
  renderTodos();
}

function toggleTodo(id) {
  todos = todos.map((todo) => (
    todo.id === id ? { ...todo, completed: !todo.completed } : todo
  ));
  saveTodos();
  renderTodos();
}

function deleteTodo(id) {
  todos = todos.filter((todo) => todo.id !== id);
  saveTodos();
  renderTodos();
}

form.addEventListener("submit", (event) => {
  event.preventDefault();
  const text = input.value.trim();

  if (!text) {
    input.focus();
    return;
  }

  addTodo(text);
  form.reset();
  input.focus();
});

renderTodos();
