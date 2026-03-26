// Array where to store tasks
const tasks = [];

// constructor
function Task(title) {
  this.id = crypto.randomUUID();
  this.title = title;
  this.completed = false;
}

// function to create new task and push to the array
function addTask(title) {
  const task = new Task(title);
  tasks.push(task);
}

// Add event listener
const input = document.getElementById("taskInput");
const addBtn = document.getElementById("addTaskBtn");

addBtn.addEventListener("click", () => {
  const title = input.value;

  if (title === "") return;

  addTask(title);
  displayTasks();

  input.value = ""; // clear the input
});

// function to display tasks
function displayTasks() {
  const container = document.getElementById("taskList");

  container.innerHTML = "";

  tasks.forEach((task) => {
    const div = document.createElement("div");
    div.classList.add("task");

    div.textContent = task.title;
    container.appendChild(div);
  });
}
