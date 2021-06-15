const prompt = require("prompt-sync")();

// Establish variables
const toDoItem = "[1] Create a to-do item ";
const completeToDo = "[2] Complete a to-do item ";
const editItem = "[3] Edit an item";
const removeItem = "[4] Remove an item";
const sort = "[5] Sort (alphabetically or by priority)";
const end = "[6] End to-do list ";

// Establish a way to track the selection
let selector = "";

// Establish a way to get the current time
let today = new Date();
let time =
	today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();

// Create array to contain the to-do list
const toDoItemList = [];

// Create array to contain the completed status
const completedItemList = [];

// Create array to contain priority list
const priorityList = [];

// Create an array to contain the time stamp
const currentTime = [];

// Create a function to add initial items to the list
function addToList() {
	let item = prompt("Add your item: ");
	currentTime.push(time); // Stores the current time in the currentTime array
	toDoItemList.push(item); // Stores the item to the toDoItemList array
	completedItemList.push("[Incomplete]");
}

// Create a function to sort items either Alphabetically or by Priority (Not Working)
function sortItems() {
	console.log("~ Sorting the list ~");
	let sortBy = prompt("Sort by (1) Alphabetically or (2) by Priority ");
	if (sortBy === 1) {
		toDoItemList.sort();
	} else {
		priorityList.sort();
	}
}

// Create a function to assign a priority to the item
function prioritize() {
	console.log("");
	console.log("~ Set a priority ~");
	let priority = prompt("What is the priority of this to-do (0 -4) ");
	priorityList.push(priority); // Stores the priority in the priorityList array
}

// Create a function to mark items as Complete or Incomplete (if an item is already
// complete will change it to incomplete and vice versa)
function makeComplete() {
	const update = prompt("Which item should be completed? ");
	let found = false; // Had to create a boolean to not print out the 'invalid item'
	for (i = 0; i < toDoItemList.length; i++) {
		// Iterates throught the toDoItemList
		// to find the item typed in and changes the status of that item to Complete
		// or incomplete
		if (update === toDoItemList[i] && completedItemList[i] === "[Incomplete]") {
			completedItemList[i] = "[Complete]";
			found = true;
		} else {
			completedItemList[i] = "[Incomplete]";
		}
	}
	if (found == false) {
		// This tells the user that the item they want to update does not exist
		console.log("That is not a valid item!");
	}
}

// Creates a function that allows us to change the name of an item on the toDoItemList
function editItemOnList() {
	const edit = prompt("Which item should be edited? ");
	let found = false;
	for (i = 0; i < toDoItemList.length; i++) {
		// Iterates through the toDoItemList to find the name that is typed in and then
		// prompts the user for what to change that item to (removes than replaces)
		if (edit === toDoItemList[i]) {
			const edit2 = prompt(`Change ${edit} to what? `);
			toDoItemList.splice(i, 1, edit2);
			found = true;
		}
	}
	if (found === false) {
		// This tells the user that the item they want to update does not exist
		console.log("That is not a valid item!");
	}
}

// Creates a function to remove an item from the list as well as its associated
// completion status, priority list, and time stamp
function removeItemFromList() {
	const remove = prompt("Which item should be removed? ");
	let found = false;
	for (i = 0; i < toDoItemList.length; i++) {
		if (remove === toDoItemList[i]) {
			toDoItemList.splice(i, 1);
			completedItemList.splice(i, 1);
			priorityList.splice(i, 1);
			currentTime.splice(i, 1);
			found = true;
		}
	}
	if (found === false) {
		// This tells the user that the item they want to update does not exist
		console.log("That is not a valid item!");
	}
}

// Start the While loop until the users prompts an exit by inputting '6', resetting all the data
while (selector !== 6) {
	console.log(`You have ${toDoItemList.length} item(s) on your list`);
	console.log("");
	for (i = 0; i < toDoItemList.length; i++) {
		// iterate through to count the number of items and print out the number, give us the time
		// stamp, priority list, completion status and list items in a sequential list
		console.log(
			`${i + 1}. ${currentTime[i]} (P${priorityList[i]}) ${
				completedItemList[i]
			} ${toDoItemList[i]}`
		);
	}

	// The standard list of actions the user can take
	console.log("");
	console.log("~ Select an action ~");
	console.log(toDoItem);
	console.log(completeToDo);
	console.log(editItem);
	console.log(removeItem);
	console.log(sort);
	console.log(end);
	selector = Number(prompt("> "));

	if (selector === 1) {
		// This is where we will add items to the list and auto assign 'Incomplete' to them
		addToList();
		prioritize();
	}
	if (selector === 2) {
		// This is where we can select something to be marked as 'Complete'
		makeComplete();
	}
	if (selector === 3) {
		// This is where we can select something to be edited
		editItemOnList();
	}
	if (selector === 4) {
		// This is where we can select something to be removed
		removeItemFromList();
	}
	if (selector === 5) {
		// This is where we can sort our list (eventually)
		sortItems();
	}
}
