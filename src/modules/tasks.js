import activeProjectType from "..";
import projects from "./project";

const tasks = (() => {
    class Task {
        constructor(title, description, dueDate, priority, projectName) {
        this.title = title;
        this.description = description;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
        this.completed = false;
        }
    }

    const addTask = () => {
        const task = getInfoFromInput();
        projects.projectsList.forEach(project => {
            if(project.title === task.projectName){
                project.tasks.push(task);
                displayTasks();
            }
        })
    }

    const displayTasks = () => {
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.innerHTML = '';
        projects.projectsList.forEach(project => {
            if(project.title === activeProjectType){
                project.tasks.forEach(task => {
                    const taskBtn = document.createElement('div');
                    taskBtn.classList.add('task-btn');
                    const left = document.createElement('div');
                    left.classList.add('task-left');
                    const checkBtn = document.createElement('img');
                    checkBtn.classList.add('check-button');
                    checkBtn.src = './images/unchecked.png'
                    const title = document.createElement('div');
                    title.innerHTML = task.title;
                    title.classList.add('task-title');

                    left.append(checkBtn, title);

                    const right = document.createElement('div');
                    right.classList.add('task-right');
                    const deleteBtn = document.createElement('img');
                    deleteBtn.classList.add('delete-button');
                    deleteBtn.src = './images/trashcan.png';
                    const taskDueDate = document.createElement('div');
                    taskDueDate.innerHTML = task.dueDate;
                    taskDueDate.classList.add('task-due-date');
                    right.append(taskDueDate, deleteBtn);

                    taskBtn.append(left, right);
                    tasksContainer.appendChild(taskBtn);

                    checkBtn.addEventListener('click', () => {
                        taskCompleted(task, checkBtn);
                    })
                    
                    deleteBtn.addEventListener('click', () => {
                        deleteTask(project, task);
                    })
                })
            }
        })
    }
    
    const taskCompleted = (task, checkBtn) => {
        if(task.completed === false){
            task.completed = true;
            checkBtn.src = './images/checked.png';
        } else {
            task.completed = false;
            checkBtn.src = './images/unchecked.png';
        }
    }

    const deleteTask = (project, task) => {
        project.tasks.splice(project.tasks.indexOf(task), 1);
        displayTasks();
    }

    const displayDetails = (task) => {
        
    }

    function getInfoFromInput() {
        const title = document.getElementById('task-title').value;
        const description = document.getElementById('task-title').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('priority-select').value;
        const projectName = activeProjectType;

        const task = new Task(title, description, dueDate, priority, projectName);
        return task;
    }

    return{ addTask, displayTasks, deleteTask, displayDetails, taskCompleted }
})();

export default tasks;