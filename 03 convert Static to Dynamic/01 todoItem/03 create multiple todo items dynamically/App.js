let todoItemsContainer = document.getElementById("todoItemsContainer");

// create static todoList
let todoList = [{
    text: "Learn HTML"
},
    {
        text: "Learn CSS"
    },
    {
        text: "Learn Javascript"
    },
    {
        text: "Learn React"
    }
];

// function for reuse todoItem code snippet
function createAndAppendTodo(todo){
    // create li Element
    let todoElement = document.createElement("li");
    todoElement.classList.add("todo-item-container", "d-flex", "flex-row");
    todoItemsContainer.appendChild(todoElement);
// console.log(todoItemsContainer);

// create input Element
    let inputElement = document.createElement("input");
    inputElement.type = "checkbox";
    inputElement.id = "checkboxInput";
    inputElement.classList.add("checkbox-input");
    todoElement.appendChild(inputElement);


// create label container
    let labelContainer = document.createElement("div");
    labelContainer.classList.add("label-container", "d-flex", "flex-row");
    todoElement.appendChild(labelContainer);

// create label Element
    let labelElement = document.createElement("label");
    labelElement.setAttribute("for", "checkboxInput");
    labelElement.classList.add("checkbox-label");
    labelElement.textContent = todo.text; // from object
    labelContainer.appendChild(labelElement);

// delete icon container
    let deleteIconContainer = document.createElement("div");
    deleteIconContainer.classList.add("delete-icon-container");
    labelContainer.appendChild(deleteIconContainer);

// create delete icon Element
    let deleteIcon = document.createElement("i");
    deleteIcon.classList.add("far", "fa-trash-alt", "delete-icon");
    labelContainer.appendChild(deleteIcon);
}

// createAndAppendTodo(todoList[0]);
// createAndAppendTodo(todoList[1]);
// createAndAppendTodo(todoList[2]);

for (let eachTodo of todoList){
    createAndAppendTodo(eachTodo);
}