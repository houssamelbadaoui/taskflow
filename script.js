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
