(()=>{"use strict";var e={};(e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})})(e);const t=(()=>{let t=[];class c{constructor(e){this.title=e,this.tasks=[]}}const n=()=>{const c=document.querySelector(".project-list");c.innerHTML="",t.forEach((t=>{const n=document.createElement("button");n.innerHTML=t.title,n.classList.add("projects"),c.appendChild(n),n.addEventListener("click",(()=>{const c=document.querySelector(".task-container-header");e.default=t.title,c.innerHTML=t.title,o(),n.classList.add("active"),s.displayTasks()}))}))},o=()=>{document.querySelectorAll(".projects").forEach((e=>{e.classList.remove("active")}))};return{projectsList:t,addProject:e=>{const s=new c(e);t.push(s),n()},displayProjects:n,getInfoFromInput:function(){return document.getElementById("title").value},setProjectType:t=>{e.default=t},unselectProjectBtns:o}})(),c=t,n=(()=>{class t{constructor(e,t,c,n,s){this.title=e,this.description=t,this.dueDate=c,this.priority=n,this.projectName=s,this.completed=!1}}const n=()=>{const t=document.querySelector(".tasks-container");t.innerHTML="",c.projectsList.forEach((c=>{c.title===e.default&&c.tasks.forEach((e=>{const c=document.createElement("div");c.classList.add("task-btn");const n=document.createElement("div");n.classList.add("task-left");const s=document.createElement("img");s.classList.add("check-button"),s.src="./images/unchecked.png";const o=document.createElement("div");o.innerHTML=e.title,o.classList.add("task-title"),n.append(s,o);const a=document.createElement("div");a.classList.add("task-right");const d=document.createElement("button");d.classList.add("delete-button");const r=document.createElement("div");r.innerHTML=e.dueDate,r.classList.add("task-due-date"),a.append(r,d),c.append(n,a),t.appendChild(c)}))}))};return{addTask:()=>{const s=function(){const c=document.getElementById("task-title").value,n=document.getElementById("task-title").value,s=document.getElementById("task-due-date").value,o=document.getElementById("priority-select").value,a=e.default;return new t(c,n,s,o,a)}();c.projectsList.forEach((e=>{e.title===s.projectName&&(e.tasks.push(s),n())}))},displayTasks:n}})(),s=n;(()=>{const e=document.querySelector("#project-form"),t=document.querySelector("#task-form"),n=document.querySelectorAll(".modal-close"),o=document.querySelector(".overlay"),a=document.getElementById("create-new-project"),d=document.getElementById("project-add-button"),r=document.querySelector("#add-task-btn"),l=document.querySelector("#task-add-button");return{domEvents:()=>{function i(e){event.preventDefault(),null!=e&&(e.classList.add("active"),o.classList.add("active"))}n.forEach((e=>{e.addEventListener("click",(()=>{var t;t=e.closest(".modal"),event.preventDefault(),null!=t&&(t.classList.remove("active"),o.classList.remove("active"))}))})),a.addEventListener("click",(()=>{i(document.querySelector("#project-modal"))})),d.addEventListener("click",(()=>{event.preventDefault(),c.addProject(c.getInfoFromInput()),e.reset()})),r.addEventListener("click",(()=>{i(document.querySelector("#task-modal"))})),l.addEventListener("click",(()=>{event.preventDefault(),s.addTask(),t.reset()}))}}})().domEvents()})();