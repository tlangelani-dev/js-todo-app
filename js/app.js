// selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');

// events
todoButton.addEventListener('click', addTodo);

// functions
function addTodo(e) {
    e.preventDefault();
    let div = document.createElement('div');
    div.classList.add('todo');
    let li = document.createElement('li');
    li.innerText = todoInput.value;
    li.classList.add('todo-item');
    div.appendChild(li);
    // check mark button
    let completedButton = document.createElement('button');
    completedButton.innerHTML = '<a class="fas fa-check"></i>';
    completedButton.classList.add('complete-btn');
    div.appendChild(completedButton);
    // check trash button
    let trashButton = document.createElement('button');
    trashButton.innerHTML = '<a class="fas fa-trash"></i>';
    trashButton.classList.add('trash-btn');
    div.appendChild(trashButton);
    // append to todo list
    todoList.appendChild(div);
    // clear input
    todoInput.value = '';
}
