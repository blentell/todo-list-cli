const prompt = require('prompt-sync')();

const toDoItem = '[1] Create a to-do item ';
const completeToDo = '[2] Complete a to-do item ';
const end = '[3] End to-do list ';
console.log(toDoItem);
console.log(completeToDo);
console.log(end);
let selector = Number(prompt('> '));

while (selector !== 3) {
    console.log(toDoItem);
    console.log(completeToDo);
    console.log(end);
    console.log(selector);

}


