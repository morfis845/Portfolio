const divProjects=document.querySelector(".projects"),arrow=document.querySelector(".arrow"),selecTech=document.querySelector(".select-tech"),ulProjects=document.querySelector(".ul-projects"),allCheckbox=document.querySelectorAll(".checkbox"),titlePojects=document.querySelector("section .title span");let filter=[],arrayProyects=[];async function getProjects(){arrayProyects=[];const e=await fetch("projects.json?=v0.1"),t=await e.json();if(filter.length>0){for(let e=0;e<filter.length;e++)t.forEach(t=>{t.tech.includes(filter[e])&&(arrayProyects.includes(t)||arrayProyects.push(t))});return titlePojects.textContent="/ "+filter,void createCard(arrayProyects)}titlePojects.textContent="/ all",arrayProyects=[...t],createCard(arrayProyects)}function createCard(e=[]){divProjects.innerHTML="";let t=0;e.forEach(e=>{const c=document.createElement("DIV"),r=document.createElement("P"),n=document.createElement("SPAN"),a=document.createElement("DIV"),o=document.createElement("DIV"),d=document.createElement("IMG"),l=document.createElement("DIV"),s=document.createElement("P"),i=document.createElement("A"),u=document.createElement("DIV");c.classList.add("card"),a.classList.add("project"),o.classList.add("header-card"),l.classList.add("body-card"),i.classList.add("btn"),i.classList.add("btn-default"),i.setAttribute("target","_blank"),i.href=e.link,u.classList.add("tech-icons"),r.textContent="Project "+t,n.textContent=e.title,d.src=e.img,s.textContent=e.description,i.textContent="ver-pagina",r.appendChild(n),a.appendChild(o),a.appendChild(l),o.appendChild(d),o.appendChild(u),e.icons.forEach(e=>{for(const t in e){const c=document.createElement("IMG");c.classList.add("icon-box",t),c.src=e[t],u.appendChild(c)}}),l.appendChild(s),l.appendChild(i),c.appendChild(r),c.appendChild(a),divProjects.appendChild(c),t++})}document.addEventListener("DOMContentLoaded",(function(){getProjects()})),allCheckbox.forEach(e=>{e.addEventListener("input",(function(e){e.target.checked?filter.push(e.target.id):filter=filter.filter(t=>e.target.id!==t),getProjects()}))}),selecTech.addEventListener("click",(function(){arrow.classList.toggle("rotate"),ulProjects.classList.toggle("show")}));