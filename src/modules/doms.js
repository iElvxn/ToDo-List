import tasks from "./tasks";
import projects from "./project";
const dom = (() => {
    const closeModalButtons = document.querySelectorAll('.modal-close');
    const overlay = document.querySelector('.overlay');
    const addProjectBtn = document.getElementById('create-new-project');
    const projectSubmitBtn = document.getElementById('project-add-button');
    const addTaskBtn = document.querySelector('#add-task-btn');

    const domEvents = () => {
        // MODAL OPENING STUFF  
        closeModalButtons.forEach(button => {
            button.addEventListener('click', () => {
                const modal = button.closest('.modal')
                closeModal(modal);
            })
        })
    
        function openModal(modal){
            event.preventDefault();
            if(modal == null) return;
            modal.classList.add('active');
            overlay.classList.add('active');
        }
        
        function closeModal(modal){
            event.preventDefault();
            if(modal == null) return;
            modal.classList.remove('active');
            overlay.classList.remove('active');
        }

        //TASK AND PROJECT BUTTON STUFF 
        addProjectBtn.addEventListener('click', () => {
            openModal(document.querySelector('#project-modal'));
        })

        projectSubmitBtn.addEventListener('click', () => {
            event.preventDefault();
            projects.addProject(projects.getInfoFromInput())
        })
    
        addTaskBtn.addEventListener('click', () => {
            openModal(document.querySelector('#task-modal'));
        })
    } 

    return { domEvents }
})();

export default dom;
