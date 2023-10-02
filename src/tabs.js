import { SwitchProject } from "./project";

let _currentActiveBtn = null;

const _btns = Array.from(document.getElementsByClassName("side-btn"));

_btns.forEach((btn) => {
    if(_currentActiveBtn === null) _currentActiveBtn = btn;

    btn.addEventListener("click", () => {HandleBtnClick(btn)});
});

export const SetTabs = () => {}

function HandleBtnClick(pBtn)
{
    if(_currentActiveBtn === pBtn) return;
            
    SwitchProject(pBtn.dataset.type);
    _currentActiveBtn.classList.remove("active");
    _currentActiveBtn = pBtn;
    pBtn.classList.add("active");
}

function SetBtnsTrigger()
{
    _btns.forEach((btn) => {
        btn.button.addEventListener("click", () => {btn.func();});
    })
}

function CreateNewTab(pType, pBtn, pFunc)
{
    _btns.push(Button(pType, pBtn, pFunc));
}

function Button(pType, pBtn, pFunc)
{
    return {type:pType, button:pBtn, func:pFunc};
}