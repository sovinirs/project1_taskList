const form = document.querySelector("#task-form");
const tasks = document.querySelector(".collection");
const addTask = document.querySelector(".add-task");
const clearTasks = document.querySelector(".clear-tasks");
const taskValue = document.querySelector("#task");
const clearEvents = document.querySelector(".clear-tasks");

addTask.addEventListener('click', addTaskEvent);
tasks.addEventListener('click', removeTaskEvent);
clearEvents.addEventListener('click', clearEvent);

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

  //Setting the text value to null
  taskValue.value = "";

  }
}

// Removing the element
function removeTaskEvent(e){
  if(e.target.parentElement.classList.contains("delete-item")){
    if(confirm("Are You Sure you want to remove the selected task item ?")){
      e.target.parentElement.parentElement.remove();
    }
  }
}

// Clear Event
function clearEvent(e){
  if(confirm("Are you sure you want to clear the tasks ?")){
    tasks.children.remove();
  }
  e.preventDefault();
}

console.log("Success");