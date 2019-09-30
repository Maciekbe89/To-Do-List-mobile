const toDoList = [];

const form = document.querySelector('form');
const ul = document.querySelector('ul');
const taskNumber = document.querySelector('h2 span');
const listItems = document.getElementsByClassName('task');
const inputAdd = document.querySelector('input.add');

const removeTask = (e) => {
    e.target.parentNode.remove();
    const index = e.target.parentNode.dataset.key;
    toDoList.splice(index, 1)
    taskNumber.textContent = listItems.length;
    renderList();
}

const addTask = (e) => {
    e.preventDefault();
    const titleTask = inputAdd.value;
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = '<i class="fas fa-dot-circle"></i>' + titleTask + ' <button><i class="fas fa-minus-circle"></i></button>';
    toDoList.push(task)
    renderList()
    ul.appendChild(task);
    inputAdd.value = '';
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const addTaskFromStorage = (titleTask) => {
    if (titleTask === '') return;
    const task = document.createElement('li');
    task.className = 'task';
    task.innerHTML = '<i class="fas fa-dot-circle"></i>' + titleTask + ' <button><i class="fas fa-minus-circle"></i></button>';
    toDoList.push(task);
    renderList();
    ul.appendChild(task);
    taskNumber.textContent = listItems.length;
    task.querySelector('button').addEventListener('click', removeTask);
}

const renderList = () => {
    ul.textContent = "";
    toDoList.forEach((toDoElement, key) => {
        toDoElement.dataset.key = key;
        ul.appendChild(toDoElement);
        taskNumber.textContent = listItems.length;
    });
    const toDoData = toDoList.map(e => e.textContent);
    localStorage.setItem('todo', JSON.stringify(toDoData));
}

const inputSearch = document.querySelector('input.search');

const searchTask = (e) => {
    const searchText = e.target.value.toLowerCase();
    let tasks = toDoList;
    tasks = tasks.filter(li => li.textContent.toLowerCase().includes(searchText));
    ul.textContent = "";
    tasks.forEach(task => ul.appendChild(task));
}

inputSearch.addEventListener('input', searchTask);
form.addEventListener('submit', addTask);

window.onload = () => {
    const tasks = JSON.parse(localStorage.getItem('todo'));
    if (!tasks) {
        return;
    }
    tasks.forEach(task => addTaskFromStorage(task));
}