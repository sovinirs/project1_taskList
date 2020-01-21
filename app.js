const form = document.querySelector("#task-form");
const tasks = document.querySelector(".collection");
const addTask = document.querySelector(".add-task");
const clearTasks = document.querySelector(".clear-tasks");
const taskValue = document.querySelector("#task");

addTask.addEventListener('click', addTaskEvent);

function addTaskEvent(e){
  if(taskValue.value === ''){
    alert("Add Task");
  } else {
    // Creating the list item
  const taskItem = document.createElement("li");
  taskItem.className = "collection-item";
  taskItem.appendChild(document.createTextNode(taskValue.value));
  const link = document.createElement("a");
  link.className = "delete-item secondary-content";
  link.innerHTML = '<i class="fa fa-remove"></i>';
  taskItem.appendChild(link);

  // Adding the list item to the task list
  tasks.appendChild(taskItem);
  e.preventDefault();
  }
}

console.log("Success");