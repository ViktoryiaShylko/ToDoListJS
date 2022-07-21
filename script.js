let tasks = ["Сходить в магазин" ,"Убраться в квартире" ,"Выгулять собаку" ,"Забрать машину"]; 
function finishTask(sender){
    sender.parentElement.classList.toggle("done");//добавить-убрать класс при клике на задачу
}
function addTask(){
    let name = document.getElementById("newTask").value;
    tasks.push(name);
    generateTask();
    console.log(tasks);
}
function generateTask(){
    let optionsString = "";
    for (let task of tasks){
        optionsString += `<div><input type ='checkbox' onchange = 'finishTask(this)'><span>${task}</span></div>`;
    }
    document.getElementById("container").innerHTML = optionsString;
}
document.addEventListener("DOMContentLoaded", function () {
generateTask();
});