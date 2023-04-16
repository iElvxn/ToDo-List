import activeProjectType from "..";
import tasks from "./tasks";

const projects = (() => {
    let projectsList;

    class Project {
        constructor(title) {
        this.title = title;
        this.tasks = [];
        }
    }

    const addProject = (title) => {
        const project = new Project(title);
        projectsList.push(project);
        displayProjects();
    }

    const displayProjects = () => {
        const projectList = document.querySelector('.project-list');
        projectList.innerHTML = '';
        projectsList.forEach(project => {
            const projectBtn = document.createElement('button');
            projectBtn.innerHTML = project.title;
            projectBtn.classList.add('projects');
            const deleteBtn = document.createElement('img');
            deleteBtn.classList.add('project-delete-btn');
            deleteBtn.src = './images/x.png';
            projectBtn.appendChild(deleteBtn);
            projectList.appendChild(projectBtn);

            projectBtn.addEventListener('click', () => { /// when a project is selected
                const header = document.querySelector('.task-container-header');
                activeProjectType = project.title;
                header.innerHTML = project.title;
                unselectProjectBtns();
                projectBtn.classList.add('active');
                tasks.displayTasks();
            })

            deleteBtn.addEventListener('click', () => {
                deleteProject(project);
            })
        });
        storeProjects(); //stores the project to the computer's local storage
    }

    const unselectProjectBtns = () => {
        const projectBtns = document.querySelectorAll('.projects');
        projectBtns.forEach(project => {
            project.classList.remove('active');
        });
    }

    function getInfoFromInput() {
        const title = document.getElementById('title').value;
        return title;
    }

    const setProjectType = (projectTitle) => {
        activeProjectType = projectTitle;
    }

    const deleteProject = (project) => {
        projectsList.splice(projectsList.indexOf(project), 1)
        displayProjects();
    }

    const storeProjects = () => {
        localStorage.setItem('projects', JSON.stringify(projectsList));
    }

    const loadSavedProjects = () => {
        const savedProjects = JSON.parse(localStorage.getItem('projects'));

        if(localStorage.getItem('projects') === null){
            projectsList = [];
        } else {
            projectsList = savedProjects;
            displayProjects();
        }
    }

    const getProjectList = () => {
        return projectsList;
    }


    return{ projectsList, addProject, displayProjects, getInfoFromInput, setProjectType, unselectProjectBtns, storeProjects, loadSavedProjects, getProjectList, deleteProject }
})();

export default projects;
