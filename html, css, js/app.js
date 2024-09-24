const inputBox = document.getElementById('input-box');
const tasksTodoList = document.getElementById('tasks-todo-list');
const tasksDoneList = document.getElementById('tasks-done-list');
const tasksTodoCount = document.getElementById('tasks-todo-count');
const tasksDoneCount = document.getElementById('tasks-done-count');

let todoCount = 0;
let doneCount = 0;

window.onload = () => loadTasks();

// Load tasks from local storage
function loadTasks() {
  const storedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
  
  storedTasks.forEach(task => {
    addTask(task.name, task.completed);
  });
}

// Save tasks to local storage
function saveTasks() {
  const tasks = [];

  tasksTodoList.querySelectorAll('.task-item').forEach(taskItem => {
    tasks.push({ name: taskItem.querySelector('.task-name').textContent, completed: false });
  });

  tasksDoneList.querySelectorAll('.task-item').forEach(taskItem => {
    tasks.push({ name: taskItem.querySelector('.task-name').textContent, completed: true });
  });

  localStorage.setItem('tasks', JSON.stringify(tasks));
}

// Add a task on button click
document.querySelector('.add').addEventListener('click', () => {
  const taskName = inputBox.value.trim();
  
  if (taskName) {
    addTask(taskName);
    inputBox.value = '';
    saveTasks();
  }
});

// Add a task to the appropriate list (to do or done)
function addTask(taskName, completed = false) {
  const taskItem = document.createElement('li');
  taskItem.classList.add('task-item');
  
  taskItem.innerHTML = `
    <span class="task-name ${completed ? 'completed' : ''}">${taskName}</span>
    ${!completed ? `
      <button class="check">
        <span class="material-symbols-outlined">check_circle</span>
      </button>` : ''}
    <button class="delete">
      <span class="material-symbols-outlined">delete</span>
    </button>
  `;

  completed ? tasksDoneList.appendChild(taskItem) : tasksTodoList.appendChild(taskItem);


  updateTaskCounts();

  // Add event listeners for the buttons
  if (!completed) {
    taskItem.querySelector('.check').addEventListener('click', () => {
      markAsDone(taskItem);
    });
  }

  taskItem.querySelector('.delete').addEventListener('click', () => {
    deleteTask(taskItem);
  });
}

// Mark a task as done
function markAsDone(taskItem) {
  taskItem.classList.add('completed');
  taskItem.querySelector('.check').remove();
  tasksDoneList.appendChild(taskItem);
  saveTasks();    
  updateTaskCounts();              
}

// Delete a task
function deleteTask(taskItem) {
  taskItem.remove();
  saveTasks();
  updateTaskCounts();
}

// Update the task counts
function updateTaskCounts() {
  todoCount = tasksTodoList.children.length;
  doneCount = tasksDoneList.children.length;

  tasksTodoCount.textContent = todoCount;
  tasksDoneCount.textContent = doneCount;
}
