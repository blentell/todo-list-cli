const prompt = require('prompt-sync')();

const toDoItem = '[1] Create a to-do item ';
const completeToDo = '[2] Complete a to-do item ';
const end = '[3] End to-do list ';
const toDoItemList = [];
const completedItemList = [];
let selector = "";

while (selector !== 3) {
    console.log(`You have ${toDoItemList.length} item(s) on your list`)
    console.log("");
    for (i = 0; i < toDoItemList.length; i++){
        console.log(`${i + 1}. ${completedItemList[i]} ${toDoItemList[i]}`);
    }
    console.log("");
    console.log("~ Select an action ~");
    console.log(toDoItem);
    console.log(completeToDo);
    console.log(end);
    selector = Number(prompt('> '));

    
    if (selector === 1) {
        let item = prompt("Add your item: ");
        toDoItemList.push(item);
        completedItemList.push('[Incomplete]');
    }
    if (selector === 2) {
        const update = prompt("Which item should be completed? ");
        let found = false;
        for (i = 0; i < toDoItemList.length; i++) {
            if (update === toDoItemList[i]) {
                completedItemList[i] = '[Complete]';
                found = true;
            }
            
        }
        if (found == false) {
            console.log("That is not a valid item!");
        }
    }
    }



