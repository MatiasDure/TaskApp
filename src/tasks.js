import { HandleCheckboxClick, HandleRemoveTask, HandleAddInputClick, HandleInputTextSend } from "./UI";
import { CreateCookie, LoadCookiesByKey } from "./cookies";

const taskBtn = document.getElementById("task-btn");
const taskAdder = document.getElementById("task-adder");
const tasksDiv = document.getElementById("tasks-container");
const taskInputField = document.getElementById("task-input");
const taskCancelBtn = document.getElementById("task-cancel");

const _tasks = [];
const checkboxes = [];
let _counter = 0;

const AddTask = (pValue) =>
{
    _tasks.push(Task(_counter, pValue));
    
    return _counter++;
}

export const RetreiveTasks = (pTaskId) =>
{
    return _tasks.find(task => task.taskId === pTaskId);
}

export const CreateNewTask = (pTask) => {
    let trimmedTask = pTask.trim();

    if(trimmedTask.length === 0) return;

    CreateCookie("tasks", pTask);
    CreateTask(pTask);
}

const CreateTask = (pTask) => 
{
    if(pTask.length === 0) return;

    CreateTaskElementUI(pTask);
    return AddTask(pTask);
}

function Task(pTaskId, pTask)
{
    return {taskId: pTaskId, task: pTask};
}

export const LoadTasksCookies = () => {
    const tasks = LoadCookiesByKey("tasks");
    console.log(tasks);
    tasks.forEach(task => {
        CreateTask(task);
    });
}

const CreateTaskElementUI = (pTask) =>
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
    HandleRemoveTask(removeTaskBtn,tasksDiv, div, pTask);
    let removeIcon = document.createElement("i");
    removeIcon.classList.add("fa-solid","fa-xmark");
    removeTaskBtn.appendChild(removeIcon);
    div.appendChild(removeTaskBtn);

    tasksDiv.appendChild(div);
}

HandleAddInputClick(taskBtn, taskBtn, taskAdder);
HandleAddInputClick(taskCancelBtn, taskBtn, taskAdder);
HandleInputTextSend(taskInputField, taskBtn, taskAdder);
