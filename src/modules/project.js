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
        });
    }

    function getInfoFromInput() {
        const title = document.getElementById('title').value;
        return title;
    }

    return{ addProject, displayProjects, getInfoFromInput }
})();

export default projects;