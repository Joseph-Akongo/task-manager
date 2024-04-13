// Sample initial tasks
const initialTasks = [
    { id: 1, text: 'Task 1', description: 'Description of Task 1', completed: false },
    { id: 2, text: 'Task 2', description: 'Description of Task 2', completed: false },
    { id: 3, text: 'Task 3', description: 'Description of Task 3', completed: false }
];

// Load initial tasks
const tasksContainer = document.getElementById('tasks-container');
initialTasks.forEach(task => {
    appendTaskToContainer(task);
});

// Event listener for form submission
document.getElementById('task-form').addEventListener('submit', function (event) {
    event.preventDefault(); // Prevent the default form submission behavior

    const taskInput = document.getElementById('task-input');
    const taskText = taskInput.value.trim();

    if (taskText !== '') {
        const newTask = { id: Date.now(), text: taskText, description: 'Description for ' + taskText, completed: false };
        appendTaskToContainer(newTask);
        taskInput.value = ''; // Clear the input field
        updateStatistics();
    }
});

// Function to append a task to the tasks container
function appendTaskToContainer(task) {
    const taskCard = document.createElement('div');
    taskCard.classList.add('col-md-4', 'mb-3');

    taskCard.innerHTML = `
        <div class="card" id="${task.id}">
            <div class="card-body">
                <h5 class="card-title">${task.text}</h5>
                <p class="card-text">${task.description}</p>
                <button class="btn btn-success mr-2" onclick="completeTask(${task.id})">Complete</button>
                <button class="btn btn-danger" onclick="removeTask(${task.id})">Remove</button>
            </div>
        </div>
    `;

    tasksContainer.appendChild(taskCard);
}

// Function to remove a task by ID
function removeTask(taskId) {
    const taskToRemove = document.getElementById(taskId);
    if (taskToRemove) {
        taskToRemove.remove();
        updateStatistics();
    }
}

// Function to mark a task as completed
function completeTask(taskId) {
    const taskCard = document.getElementById(taskId);
    if (taskCard) {
        taskCard.classList.add('completed');
        updateStatistics();
    }
}

// Function to update the statistics page
function updateStatistics() {
    const totalTasks = initialTasks.length;
    const completedTasks = document.querySelectorAll('.completed').length;
    const percentageCompleted = (completedTasks / totalTasks) * 100;

    // Update the statistics page content
    const statisticsContainer = document.getElementById('statistics-container');
    statisticsContainer.innerHTML = `
        <h2>Statistics</h2>
        <p>Total Tasks: ${totalTasks}</p>
        <p>Completed Tasks: ${completedTasks}</p>
        <p>Percentage Completed: ${percentageCompleted.toFixed(2)}%</p>
    `;
}

// Initial update of statistics
updateStatistics();