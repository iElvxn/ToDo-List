import activeProjectType from "..";
import projects from "./project";
import dom from "./doms";

const tasks = (() => {
    class Task {
        constructor(title, dueDate, priority, projectName) {
        this.title = title;
        this.dueDate = dueDate;
        this.priority = priority;
        this.projectName = projectName;
        this.completed = false;
        }
    }

    const addTask = () => {
        const task = getInfoFromInput();
        let projectsList = projects.getProjectList();
        projectsList.forEach(project => {
            if(project.title === task.projectName){
                project.tasks.push(task);
                displayTasks();
            }
        })
    }

    const displayTasks = () => {
        const tasksContainer = document.querySelector('.tasks-container');
        tasksContainer.innerHTML = '';
        let projectsList = projects.getProjectList();
        projectsList.forEach(project => {
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
                    title.classList.add('task-title')
                    title.innerHTML = task.title;
                    title.classList.add('task-title');
                    checkTaskCompletion(task, checkBtn, title);

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
                        taskCompleted(task, checkBtn, title);
                    })
                    
                    deleteBtn.addEventListener('click', () => {
                        deleteTask(project, task);
                    })
                })
            }
        })
        projects.storeProjects();
    }
    
    const taskCompleted = (task, checkBtn, title) => {
        console.log(task.completed)
        if(task.completed === false){
            task.completed = true;
            title.classList.add('completed');
            checkBtn.src = './images/checked.png';
        } else {
            task.completed = false;
            title.classList.remove('completed');
            checkBtn.src = './images/unchecked.png';
        }
        projects.storeProjects();
    }

    const checkTaskCompletion = (task, checkBtn, title) => {
        if(task.completed === false){
            title.classList.remove('completed')
            checkBtn.src = './images/unchecked.png';
        } else {
            checkBtn.src = './images/checked.png';
            title.classList.add('completed')
        }
    }

    const deleteTask = (project, task) => {
        project.tasks.splice(project.tasks.indexOf(task), 1);
        displayTasks();
    }

    function getInfoFromInput() {
        const title = document.getElementById('task-title').value;
        const dueDate = document.getElementById('task-due-date').value;
        const priority = document.getElementById('priority-select').value;
        const projectName = activeProjectType;
        const task = new Task(title, dueDate, priority, projectName);
        return task;
    }

    return{ addTask, displayTasks, deleteTask, taskCompleted, checkTaskCompletion }
})();

export default tasks;