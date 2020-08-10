var buttonEl = document.querySelector("#save-task");
var taskToDoEl = document.querySelector("#tasks-to-do");
var createTaskHandler = function(){
    var listItems = document.createElement("li");
    listItems.className = "task-item";
    listItems.textContent = " This is a new task. ";
    taskToDoEl.appendChild(listItems);
};

buttonEl.addEventListener("click", createTaskHandler);
