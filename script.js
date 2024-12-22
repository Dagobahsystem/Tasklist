// Function to store tasklist in local storage
function Task(task) {
  this.task = task;
}

// Array to store tasks
const taskList = [];

// Function to add task to the list
function handleAddNewTask(event) {
  event.preventDefault(); // Prevent the form from submitting
  const taskInputValue = document.getElementById("taskInput").value.trim();

  // Check if the input is empty
  if (!taskInputValue) {
    alert("Please enter a task.");
    return;
  }
  //   Create a new task object
  const newTask = new Task(taskInputValue);
  taskList.push(newTask);
  displayTask();
  // Clear the input field
  document.getElementById("taskInput").value = "";
}

// Function to display the task
function displayTask() {
  // Get the ul element
  const taskLocation = document.getElementById("taskList");
  if (!taskLocation) {
    console.error("Element with id 'taskList' not found.");
    return;
  }

  //   Create a list item
  // Clear the current list
  taskLocation.innerHTML = "";

  // Loop through the task list and display the tasks
  for (let i = 0; i < taskList.length; i++) {
    const listItem = document.createElement("li");
    listItem.className = "task-list-li";

    // Create a checkbox
    const checkbox = document.createElement("input");
    checkbox.type = "checkbox";
    checkbox.className = "task-checkbox";

    // Create a text node for the task
    const taskText = document.createTextNode(taskList[i].task);

    // Create a delete button
    const deleteButton = document.createElement("button");
    deleteButton.className = "delete-button";
    deleteButton.textContent = "Delete";
    deleteButton.onclick = function () {
      deleteTask(i);
    };

    // Append the checkbox and task text to the list item
    listItem.appendChild(checkbox);
    listItem.appendChild(taskText);
    listItem.appendChild(deleteButton);

    // Append the list item to the ul
    taskLocation.appendChild(listItem);
  }
}

//  Function to delete a task
function deleteTask(index) {
  taskList.splice(index, 1);
  displayTask();
}
