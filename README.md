# task-manager
The Task Manager application is a web-based tool designed for users organize and manage their tasks efficiently. Developed using HTML, CSS, and JavaScript, it provides a user-friendly interface for adding, completing, and removing tasks. 

Upon loading, the application displays a list of initial tasks, which users can interact with by marking them as completed or removing them. Additionally, users can add new tasks through a submission form, which dynamically updates the task list and accompanying statistics. The application leverages event listeners and DOM manipulation to facilitate task management operations, ensuring a seamless user experience. With its intuitive design and functionality, the Task Manager app empowers users to stay organized and productive in their daily tasks.

The backend JavaScript code performs several key functions:

Task Management: It handles the addition, completion, and removal of tasks within the application. When a user adds a new task through the form, the backend code creates a new task object and appends it to the list of tasks displayed on the webpage. Similarly, when a task is marked as completed or removed, the backend code updates the DOM to reflect these changes.

Statistics Updates: The backend code calculates and updates the statistics displayed on the page. It determines the total number of tasks, the number of completed tasks, and the percentage of tasks completed. These statistics are then dynamically updated and displayed to the user, providing insights into their task management progress.

Event Handling: It listens for user interactions, such as form submissions and button clicks, using event listeners. When a relevant event occurs, such as submitting a new task or completing a task, the backend code executes the appropriate functions to update the task list and statistics accordingly.

Initial Task Loading: Upon page load, the backend code initializes the application by loading a set of initial tasks. These tasks are displayed to the user, providing a starting point for managing their tasks.

While this "backend" code operates within the user's browser rather than on a remote server, it still performs essential backend-like functions, managing the application's logic and data manipulation to create a responsive and interactive user experience.


