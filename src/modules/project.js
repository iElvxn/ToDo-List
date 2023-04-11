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

            projectBtn.addEventListener('click', () => {
                activeProjectType = project.title
                console.log('Project type: ' + activeProjectType);
                tasks.displayTasks();
            })
        });
    }

    function getInfoFromInput() {
        const title = document.getElementById('title').value;
        return title;
    }

    const setProjectType = (projectTitle) => {
        activeProjectType = projectTitle;
    }

    return{ projectsList, addProject, displayProjects, getInfoFromInput, setProjectType }
})();

export default projects;