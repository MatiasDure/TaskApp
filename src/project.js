import { RetreiveTasks } from "./tasks";
const projectTitle = document.getElementById("projectTitle");

const _projects = [
    {
        type:"Inbox",
        tasksIds: [],
    },
    {
        type:"Today",
        tasksIds: [],
    },
    {
        type:"This week",
        tasksIds: [],
    },
];

let _currentProject = _projects[0];

const CreateProject = () =>
{

}

const ChangeProjectTitle = (pNewTitle) =>{
    projectTitle.textContent = pNewTitle;
}

export const SwitchProject = (pProject) => 
{
    _currentProject = _projects.find(projects => projects.type === pProject);
    ChangeProjectTitle(pProject);
}

export const AddTaskToProject = (pTaskId) =>
{
    _currentProject.tasksIds.push(pTaskId);
}
