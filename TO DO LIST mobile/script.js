const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('task');
const inputAdd = document.querySelector('input.add');

const removeTask = (e) => {
    e.target.parentNode.remove();
    taskNumber.textContent = listItems.length;
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = '<i class="fas fa-dot-circle"></i>' + titleTask + ' <button><i class="fas fa-minus-circle"></i></button>';
    ul.appendChild(task);
    inputAdd.value = '';

    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const inputSearch = document.querySelector('input.search');
// const liElements = document.querySelectorAll('li');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = [...listItems];
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));
}

inputSearch.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);