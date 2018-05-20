/* 
	A console running to do app, make with an array
	the window.setTimeout is used to let the html load
	before the js.

*/

var todos = ["buy new toy"];

window.setTimeout(function() {
	// begin asking for input with a prompt and storing in a variable
	var input = prompt("what would you like to do?");

	// create a while loop, this runs until input is equal to quit
	while(input !== "quit"){
	// if equal to list, just console the todos array
	if(input ==="list"){
		console.log(todos);
	}
	// if equal to new, a variable is created that takes a input prompt
	// and gets pushed to the todos array.
	else if(input === "new"){
		var newTodo = prompt("enter new todo");
		todos.push(newTodo);
	}
	// at the end of the conditionals, input runs again asking and
	// storing the users input from the prompted message
	input = prompt("what would you like to do?");
}

// when input is equal to quit
console.log("You quit the todo list app");
 
}, 500);