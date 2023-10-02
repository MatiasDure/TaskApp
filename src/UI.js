import { RemoveCookie } from "./cookies";
import { ManageTaskCreation } from "./addItem";

export function HandleCheckboxClick(pCheckbox)
{
    pCheckbox.addEventListener("click", () => {
        pCheckbox.classList.toggle("checked");
    });
}

export function HandleRemoveTask(pRemoveBtn, pContainer, pElement, pTask)
{
    pRemoveBtn.addEventListener("click", () => {
        pContainer.removeChild(pElement);
        RemoveCookie("tasks",pTask);
    });
}

export function HandleAddInputClick(pBtnTrigger, pAddBtn, pInputField)
{
    pBtnTrigger.addEventListener("click", () => {
        ToggleAddTask(pAddBtn, pInputField);
    });
}

export function ToggleAddTask(pAddBtn, pInputField)
{
    pAddBtn.classList.toggle("hidden");
    pInputField.classList.toggle("hidden");
}

export function HandleInputTextSend(pInputField, pAddBtn, pTaskElement)
{
    pInputField.addEventListener("keyup", (event) => {
        if(event.key !== "Enter") return;
    
        ManageTaskCreation(pInputField.value); 
        pInputField.value = "";
        ToggleAddTask(pAddBtn, pTaskElement);
    });
}