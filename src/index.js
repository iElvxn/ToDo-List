import dom from "./modules/doms";
import projects from "./modules/project";

export let activeProjectType;

dom.domEvents();
projects.loadSavedProjects(); // load the projects that are already svaed on the computer