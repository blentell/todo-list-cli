const prompt = require('prompt-sync')();
// Establish variables
const toDoItem = '[1] Create a to-do item ';
const completeToDo = '[2] Complete a to-do item ';
const end = '[3] End to-do list ';
// Create array to contain the to-do list
const toDoItemList = [];
// Create array to contain the completed status
const completedItemList = [];
// Establish the selection method
let selector = "";

function addToList() {
        let item = prompt("Add your item: ");
        toDoItemList.push(item);
        completedItemList.push('[Incomplete]'); 
}

function makeComplete() {
        const update = prompt("Which item should be completed? ");
        let found = false;  // Had to create a boolean to not print out the 'invalid item'
        for (i = 0; i < toDoItemList.length; i++) {
            if (update === toDoItemList[i]) {
                completedItemList[i] = '[Complete]';
                found = true;
            }        
        }
        if (found == false) {  // This tells the user that the item they want to update does not exist
            console.log("That is not a valid item!");
        }   
}

while (selector !== 3) {  // This will run until the user exits with a '3'
    console.log(`You have ${toDoItemList.length} item(s) on your list`)
    console.log("");
    for (i = 0; i < toDoItemList.length; i++){  // iterate through to count the number of items and print out the number
        console.log(`${i + 1}. ${completedItemList[i]} ${toDoItemList[i]}`);
    }
    console.log("");
    console.log("~ Select an action ~");
    console.log(toDoItem);
    console.log(completeToDo);
    console.log(end);
    selector = Number(prompt('> '));

    
    if (selector === 1) {  // This is where we will add items to the list and auto assign 'Incomplete' to them
        addToList();
    }
    if (selector === 2) {  // This is where we can select something to be marked as 'Complete'
        makeComplete();
    }
    }



