import { CreateNewTask } from "./tasks";
import { AddTaskToProject } from "./project";

const taskBtn = document.getElementById("task-btn");
const taskAdder = document.getElementById("task-adder");
const taskInputField = document.getElementById("task-input");

taskBtn.addEventListener("click", () => ToggleTaskAdder);

taskInputField.addEventListener("keyup", (event) => {
    if(event.key !== "Enter") return;

    ManageTaskCreation(taskInputField.value); 
    taskInputField.value = "";
})

const ManageTaskCreation = (pTask) => {
    AddTaskToProject(CreateNewTask(pTask));
}

export const CreateProject = () =>
{
}

function ToggleTaskAdder()
{
    taskAdder.classList.toggle("hidden");
}
