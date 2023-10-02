import { CreateTaskUI } from "./UI";
import { CreateCookie, LoadCookiesByKey } from "./cookies";

const taskBtn = document.getElementById("task-btn");
const taskAdder = document.getElementById("task-adder");

const _tasks = [];
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
    //SaveTaskCookies(pTask);
    CreateTask(pTask);
}

const CreateTask = (pTask) => 
{
    if(pTask.length === 0) return;

    CreateTaskUI(pTask);
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

export const RemoveTaskCookie = (pTask) => {

}