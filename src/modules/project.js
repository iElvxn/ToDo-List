import activeProjectType from "..";
import tasks from "./tasks";

const projects = (() => {
    let projectsList = [];

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
            projectList.appendChild(projectBtn);

            projectBtn.addEventListener('click', () => { /// when a project is selected
                const header = document.querySelector('.task-container-header');
                activeProjectType = project.title;
                header.innerHTML = project.title;
                unselectProjectBtns();
                projectBtn.classList.add('active');
                tasks.displayTasks();
            })
        });
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

    return{ projectsList, addProject, displayProjects, getInfoFromInput, setProjectType, unselectProjectBtns }
})();

export default projects;