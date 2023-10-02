import { RemoveCookie } from "./cookies";

const projectsDiv = document.getElementById("projects-container");
const tasksDiv = document.getElementById("tasks-container");

const checkboxes = Array.from(document.getElementsByClassName("checkbox"));
checkboxes.forEach((checkbox) => {
    HandleCheckboxClick(checkbox);
});

export const CreateTaskUI = (pTask) =>
{
    let div = document.createElement("div");
    div.classList.add("task");
    let taskCheckbox = document.createElement("div");
    taskCheckbox.classList.add("task-checkbox");
    div.appendChild(taskCheckbox);
    let checkbox = document.createElement("div");
    checkbox.classList.add("checkbox","clickable");
    checkboxes.push(checkbox);
    HandleCheckboxClick(checkbox);
    taskCheckbox.appendChild(checkbox);
    let icon = document.createElement("i");
    icon.classList.add("fa-regular","fa-circle");
    checkbox.appendChild(icon);
    let task = document.createElement("p");
    task.textContent = pTask;
    div.appendChild(task);
    
    let removeTaskBtn = document.createElement("div");
    removeTaskBtn.classList.add("remove-task","clickable");
    HandleRemoveClick(removeTaskBtn,div,pTask);
    let removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid","fa-xmark");
    removeTaskBtn.appendChild(removeIcon);
    div.appendChild(removeTaskBtn);

    tasksDiv.appendChild(div);
}

function HandleCheckboxClick(checkbox)
{
    checkbox.addEventListener("click", () => {
        checkbox.classList.toggle("checked");
    });
}

function HandleRemoveClick(removeBtn, task, taskValue)
{
    removeBtn.addEventListener("click", () => {
        console.log(task);
        tasksDiv.removeChild(task);
        RemoveCookie("tasks",taskValue);
    });
}