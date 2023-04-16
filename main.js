(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=(()=>{let t;class c{constructor(e){this.title=e,this.tasks=[]}}const s=()=>{const c=document.querySelector(".project-list");c.innerHTML="",t.forEach((t=>{const s=document.createElement("button");s.innerHTML=t.title,s.classList.add("projects");const d=document.createElement("img");d.classList.add("project-delete-btn"),d.src="./images/x.png",s.appendChild(d),c.appendChild(s),s.addEventListener("click",(()=>{const c=document.querySelector(".task-container-header");e.default=t.title,c.innerHTML=t.title,n(),s.classList.add("active"),o.displayTasks()})),d.addEventListener("click",(()=>{a(t)}))})),d()},n=()=>{document.querySelectorAll(".projects").forEach((e=>{e.classList.remove("active")}))},a=e=>{t.splice(t.indexOf(e),1),s()},d=()=>{localStorage.setItem("projects",JSON.stringify(t))};return{projectsList:t,addProject:e=>{const o=new c(e);t.push(o),s()},displayProjects:s,getInfoFromInput:function(){return document.getElementById("title").value},setProjectType:t=>{e.default=t},unselectProjectBtns:n,storeProjects:d,loadSavedProjects:()=>{const e=JSON.parse(localStorage.getItem("projects"));null===localStorage.getItem("projects")?t=[]:(t=e,s())},getProjectList:()=>t,deleteProject:a}})(),c=t,s=(()=>{class t{constructor(e,t,c,s){this.title=e,this.dueDate=t,this.priority=c,this.projectName=s,this.completed=!1}}const s=()=>{const t=document.querySelector(".tasks-container");t.innerHTML="",c.getProjectList().forEach((c=>{c.title===e.default&&c.tasks.forEach((e=>{const s=document.createElement("div");s.classList.add("task-btn");const d=document.createElement("div");d.classList.add("task-left");const l=document.createElement("img");l.classList.add("check-button"),l.src="./images/unchecked.png";const r=document.createElement("div");r.classList.add("task-title"),r.innerHTML=e.title,r.classList.add("task-title"),n(e,l,r),d.append(l,r);const i=document.createElement("div");i.classList.add("task-right");const u=document.createElement("img");u.classList.add("delete-button"),u.src="./images/trashcan.png";const m=document.createElement("div");m.innerHTML=e.dueDate,m.classList.add("task-due-date"),i.append(m,u),s.append(d,i),t.appendChild(s),l.addEventListener("click",(()=>{o(e,l,r)})),u.addEventListener("click",(()=>{a(c,e)}))}))})),c.storeProjects()},o=(e,t,s)=>{console.log(e.completed),!1===e.completed?(e.completed=!0,s.classList.add("completed"),t.src="./images/checked.png"):(e.completed=!1,s.classList.remove("completed"),t.src="./images/unchecked.png"),c.storeProjects()},n=(e,t,c)=>{!1===e.completed?(c.classList.remove("completed"),t.src="./images/unchecked.png"):(t.src="./images/checked.png",c.classList.add("completed"))},a=(e,t)=>{e.tasks.splice(e.tasks.indexOf(t),1),s()};return{addTask:()=>{const o=function(){const c=document.getElementById("task-title").value,s=document.getElementById("task-due-date").value,o=document.getElementById("priority-select").value,n=e.default;return new t(c,s,o,n)}();c.getProjectList().forEach((e=>{e.title===o.projectName&&(e.tasks.push(o),s())}))},displayTasks:s,deleteTask:a,taskCompleted:o,checkTaskCompletion:n}})(),o=s;(()=>{const e=document.querySelector("#project-form"),t=document.querySelector("#task-form"),s=document.querySelectorAll(".modal-close"),n=document.querySelector(".overlay"),a=document.getElementById("create-new-project"),d=document.getElementById("project-add-button"),l=document.querySelector("#add-task-btn"),r=document.querySelector("#task-add-button");function i(e){event.preventDefault(),null!=e&&(e.classList.add("active"),n.classList.add("active"))}function u(e){event.preventDefault(),null!=e&&(e.classList.remove("active"),n.classList.remove("active"))}return{domEvents:()=>{s.forEach((e=>{e.addEventListener("click",(()=>{u(e.closest(".modal"))}))})),a.addEventListener("click",(()=>{i(document.querySelector("#project-modal"))})),d.addEventListener("click",(()=>{event.preventDefault(),c.addProject(c.getInfoFromInput()),e.reset()})),l.addEventListener("click",(()=>{i(document.querySelector("#task-modal"))})),r.addEventListener("click",(()=>{event.preventDefault(),o.addTask(),t.reset()}))},openModal:i,closeModal:u}})().domEvents(),c.loadSavedProjects()})();