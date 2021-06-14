const prompt = require('prompt-sync')();

const toDoItem = '[1] Create a to-do item ';
const completeToDo = '[2] Complete a to-do item ';
const end = '[3] End to-do list ';
const toDoItemList = [];
const completedItemList = [];
let selector = "";

while (selector !== 3) {
    console.log(toDoItemList);
    console.log(toDoItem);
    console.log(completeToDo);
    console.log(end);
    selector = Number(prompt('> '));
    
    if (selector === 1) {
        let item = prompt("Add your item: ");
        toDoItemList.push(item);
    }
    if (selector === 2) {
        completedItemList = prompt("Which item should be completed? ");
    }
}


