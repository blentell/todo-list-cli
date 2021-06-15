const prompt = require('prompt-sync')();
// Establish variables
const toDoItem = '[1] Create a to-do item ';
const completeToDo = '[2] Complete a to-do item ';
const editItem = '[3] Edit an item';
const removeItem = '[4] Remove an item';
const sort = '[5] Sort (alphabetically or by priority)'
const end = '[6] End to-do list ';
// Create array to contain the to-do list
const toDoItemList = [];
// Create array to contain the completed status
const completedItemList = [];
// Create array to contain priority list
const priorityList = [];
// Establish the selection method
let selector = "";
let today = new Date();
let time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
const currentTime = [];

function addToList() {
    let item = prompt("Add your item: ");
    currentTime.push(time);
            toDoItemList.push(item);
        completedItemList.push('[Incomplete]'); 
}


function sortItems() {
    console.log('~ Sorting the list ~');
    let sortBy = prompt("Sort by (1) Alphabetically or (2) by Priority ");
    if (sortBy === 1) {
        
            toDoItemList.sort();
        }
    
    else {
                priorityList.sort();
            }
        }


function prioritize() {  // Adds a priority to the item
    console.log("");
    console.log('~ Set a priority ~')
    let priority = prompt("What is the priority of this to-do (0 -4) ");
    priorityList.push(priority);
}

function makeComplete() {
        const update = prompt("Which item should be completed? ");
        let found = false;  // Had to create a boolean to not print out the 'invalid item'
        for (i = 0; i < toDoItemList.length; i++) {
            if (update === toDoItemList[i] && completedItemList[i] === '[Incomplete]') {
                completedItemList[i] = '[Complete]';
                found = true;
            }
            else {
                completedItemList[i] = '[Incomplete]';
            }
        }
        if (found == false) {  // This tells the user that the item they want to update does not exist
            console.log("That is not a valid item!");
        }   
}

function editItemOnList() { // This allows us to edit an item on the list
    const edit = prompt("Which item should be edited? ");
    let found = false;
    for (i = 0; i < toDoItemList.length; i++){
        if (edit === toDoItemList[i]) {
            const edit2 = prompt(`Change ${edit} to what? `);
            toDoItemList.splice(i, 1, edit2);
            found = true;
        }
    }
    if (found === false) {
        console.log("That is not a valid item!");
    }
}

function removeItemFromList() {  // This allows us to remove an item from the list
    const remove = prompt("Which item should be removed? ");
    let found = false;
    for (i = 0; i < toDoItemList.length; i++){
        if (remove === toDoItemList[i]) {
            toDoItemList.splice(i, 1);
            completedItemList.splice(i, 1);
            priorityList.splice(i, 1);
            currentTime.splice(i, 1);
            found = true;
        }
    }
    if (found === false) {
        console.log("That is not a valid item!");
    }
}

while (selector !== 6) {  // This will run until the user exits with a '5'
    console.log(`You have ${toDoItemList.length} item(s) on your list`)
    console.log("");
    for (i = 0; i < toDoItemList.length; i++){  // iterate through to count the number of items and print out the number
        console.log(`${i + 1}. ${currentTime[i]} (P${priorityList[i]}) ${completedItemList[i]} ${toDoItemList[i]}`);
    }
    console.log("");
    console.log("~ Select an action ~");
    console.log(toDoItem);
    console.log(completeToDo);
    console.log(editItem);
    console.log(removeItem);
    console.log(sort);
    console.log(end);
    selector = Number(prompt('> '));

    
    if (selector === 1) {  // This is where we will add items to the list and auto assign 'Incomplete' to them
        addToList();
        prioritize();
    }
    if (selector === 2) {  // This is where we can select something to be marked as 'Complete'
        makeComplete();
    }
    if (selector === 3) { // This is where we can select something to be edited
        editItemOnList();
    }
    if (selector === 4) {  // This is where we can select something to be removed
        removeItemFromList();
    }
    if (selector === 5) {
        sortItems();
    }
    }



