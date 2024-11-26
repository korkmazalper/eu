class Task {
    constructor(description) {
        this.description = description;
        this.completed = false;
    }

    toggleCompletion() {
        this.completed = !this.completed;
    }
}

class TaskList {
    constructor() {
        this.tasks = [];
    }

    addTask(description) {
        const newTask = new Task(description);
        this.tasks.push(newTask);
        this.render();
    }

    removeTask(index) {
        this.tasks.splice(index, 1);
        this.render();
    }

    toggleTaskCompletion(index) {
        this.tasks[index].toggleCompletion();
        this.render();
    }

    render() {
        const taskListElement = document.getElementById('taskList');
        taskListElement.innerHTML = '';

        this.tasks.forEach((task, index) => {
            const taskItem = document.createElement('li');
            taskItem.classList.add('task-item');
            taskItem.style.textDecoration = task.completed ? 'line-through' : 'none';
            taskItem.innerHTML = `
                ${task.description}
                <button onclick="app.toggleTaskCompletion(${index})">Abgeschloßen</button>
                <button onclick="app.removeTask(${index})">Lösch</button>
            `;
            taskListElement.appendChild(taskItem);
        });
    }
}

class App {
    constructor() {
        this.taskList = new TaskList();
    }

    addTask() {
        const taskInput = document.getElementById('taskInput');
        const taskDescription = taskInput.value.trim();
        if (taskDescription) {
            this.taskList.addTask(taskDescription);
            taskInput.value = '';
        } else {
            alert('Bitte eine Aufgabe eingeben');
        }
    }

    removeTask(index) {
        this.taskList.removeTask(index);
    }

    toggleTaskCompletion(index) {
        this.taskList.toggleTaskCompletion(index);
    }
}

const app = new App();
