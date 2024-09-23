const inputBox = document.getElementById('input-box');
const tasksTodoList = document.getElementById('tasks-todo-list');
const tasksDoneList = document.getElementById('tasks-done-list');
const tasksTodoCount = document.getElementById('tasks-todo-count');
const tasksDoneCount = document.getElementById('tasks-done-count');

let todoCount = 0;
let doneCount = 0;

// Load tasks from local storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks'));
  if (storedTasks) {
    storedTasks.forEach(task => {
      addTask(task.name, task.completed);
    });
  }
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];
  tasksTodoList.querySelectorAll('.task-item').forEach(taskItem => {
    tasks.push({
      name: taskItem.querySelector('.task-name').textContent,
      completed: false
    });
  });
  tasksDoneList.querySelectorAll('.task-item').forEach(taskItem => {
    tasks.push({
      name: taskItem.querySelector('.task-name').textContent,
      completed: true
    });
  });
  
  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add task event
document.querySelector('.add').addEventListener('click', () => {
  const taskName = inputBox.value.trim();
  if (taskName !== '') {
    addTask(taskName);
    inputBox.value = '';
    saveTasks();
  }
});

// Add task on enter key press
function addTask(taskName, completed = false) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');

  taskItem.innerHTML = `
    <span class="task-name ${completed ? 'completed' : ''}">${taskName}</span>
    ${!completed ? `
    <button class="check">
      <span class="material-symbols-outlined">check_circle</span>
    </button>
    ` : ''}
    <button class="delete">
      <span class="material-symbols-outlined">delete</span>
    </button>
  `;

  if (completed) {
    tasksDoneList.appendChild(taskItem);
  } else {
    tasksTodoList.appendChild(taskItem);
  }

  updateTaskCounts();

  // Add event listeners
  if (!completed) {
    taskItem.querySelector('.check').addEventListener('click', () => {
      taskItem.classList.add('completed');
      tasksDoneList.appendChild(taskItem);
      taskItem.querySelector('.check').remove();
      saveTasks();
      updateTaskCounts();
    });
  }

  taskItem.querySelector('.delete').addEventListener('click', () => {
    taskItem.remove();
    saveTasks();
    updateTaskCounts();
  });
}

  // Update task counts
function updateTaskCounts() {
  todoCount = tasksTodoList.children.length;
  doneCount = tasksDoneList.children.length;

  tasksTodoCount.textContent = todoCount;
  tasksDoneCount.textContent = doneCount;
}

window.onload = loadTasks;
