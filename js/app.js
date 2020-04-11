// selectors
let todoInput = document.querySelector('.todo-input');
let todoButton = document.querySelector('.todo-button');
let todoList = document.querySelector('.todo-list');
let filterOption = document.querySelector('.filter-todos select');

// events
todoButton.addEventListener('click', addTodo);
todoList.addEventListener('click', deleteCheck);
filterOption.addEventListener('click', filterTodos);

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

function deleteCheck(e) {
    let item = e.target;
    // delete todo
    if (item.classList.contains('trash-btn')) {
        let todo = item.parentElement;
        // animate
        todo.classList.add('fall');
        todo.addEventListener('transitionend', function () {
            todo.remove();
        });
    }
    // complete todo
    if (item.classList.contains('complete-btn')) {
        let todo = item.parentElement;
        todo.classList.toggle('completed');
    }
}

function filterTodos(e) {
    let todos = todoList.childNodes;
    todos.forEach(function (todo) {
        switch(e.target.value) {
            case 'all':
                todo.style.display = 'flex';
                break;
            case 'completed':
                if (todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
            case 'not-completed':
                if (!todo.classList.contains('completed')) {
                    todo.style.display = 'flex';
                } else {
                    todo.style.display = 'none';
                }
                break;
        }
    });
}
