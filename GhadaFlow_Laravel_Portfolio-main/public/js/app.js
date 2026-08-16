const LANGUAGE_KEY="ghadaflow-language";
const THEME_KEY="ghadaflow-theme";
let currentLanguage=localStorage.getItem(LANGUAGE_KEY)||"en";

function getText(value){if(!value)return "";if(typeof value==="string")return value;return value[currentLanguage]||""}
function getTranslation(path){let value=translations[currentLanguage];for(const part of path.split(".")){if(value==null)return "";value=value[part]}return value??""}
function escapeHTML(value){const div=document.createElement("div");div.textContent=value??"";return div.innerHTML}

function applyLanguage(){
  const html=document.documentElement;
  html.lang=currentLanguage;
  html.dir=currentLanguage==="ar"?"rtl":"ltr";
  document.body.classList.toggle("rtl",currentLanguage==="ar");
  const btn=document.getElementById("languageCurrent");
  if(btn)btn.textContent=currentLanguage==="ar"?"EN":"AR";
  document.querySelectorAll("[data-i18n]").forEach(el=>{
    const text=getTranslation(el.dataset.i18n);
    if(text)el.textContent=text;
  });
  document.title=currentLanguage==="ar"?"غادة فلو | مطوّرة ويب":"GhadaFlow | Web Developer";
  localStorage.setItem(LANGUAGE_KEY,currentLanguage);
}
function toggleLanguage(){currentLanguage=currentLanguage==="en"?"ar":"en";applyLanguage();renderAll()}

function getTheme(){return localStorage.getItem(THEME_KEY)||"dark"}
function applyTheme(theme){
  document.documentElement.setAttribute("data-theme",theme);
  const icon=document.getElementById("themeIcon");
  if(icon)icon.textContent=theme==="light"?"\u2600":"\u263D";
  const btn=document.getElementById("themeToggle");
  if(btn)btn.setAttribute("aria-label",theme==="light"?"Switch to dark mode":"Switch to light mode");
  localStorage.setItem(THEME_KEY,theme);
}
function toggleTheme(){applyTheme(getTheme()==="light"?"dark":"light")}
function setupTheme(){
  applyTheme(getTheme());
  document.getElementById("themeToggle")?.addEventListener("click",toggleTheme);
}

function setupMobileMenu(){
  const button=document.getElementById("mobileMenuButton"),menu=document.getElementById("mainNavigation");
  if(!button||!menu)return;
  button.addEventListener("click",()=>{const open=menu.classList.toggle("open");button.setAttribute("aria-expanded",String(open))});
  document.querySelectorAll("[data-nav-link]").forEach(link=>link.addEventListener("click",()=>{menu.classList.remove("open");button.setAttribute("aria-expanded","false")}));
}
function setupNavigation(){
  const links=document.querySelectorAll(".nav-link[data-section]"),sections=document.querySelectorAll("main section[id]");
  if(!sections.length)return;
  const observer=new IntersectionObserver(entries=>entries.forEach(entry=>{
    if(entry.isIntersecting)links.forEach(link=>link.classList.toggle("active",link.dataset.section===entry.target.id));
  }),{rootMargin:"-35% 0px -55% 0px"});
  sections.forEach(s=>observer.observe(s));
}
function renderKafaatResponsibilities(){
  const c=document.getElementById("kafaatResponsibilities");if(!c)return;
  c.innerHTML=portfolioData.experience.kafaat.responsibilities[currentLanguage].map(x=>`<li>${escapeHTML(x)}</li>`).join("");
}
function renderProjects(){
  const c=document.getElementById("projectsGrid");if(!c)return;
  c.innerHTML=portfolioData.projects.map(p=>{
    const features=p.features?.[currentLanguage]||[];
    return `<article class="project-card">
      <div class="project-media">
        <span class="project-index">${escapeHTML(p.number)}</span>
        <span class="project-media-label">${escapeHTML(getTranslation("ui.videoPreview"))}</span>
        <video controls playsinline preload="metadata">
          <source src="/${escapeHTML(p.video)}">
          ${escapeHTML(getTranslation("project.unableToPlay"))}
        </video>
      </div>
      <div class="project-body">
        <span class="project-type">${escapeHTML(getText(p.type))}</span>
        <h3>${escapeHTML(getText(p.name))}</h3>
        <p class="project-context">${escapeHTML(getText(p.context))}</p>
        <p class="project-description">${escapeHTML(getText(p.overview))}</p>
        <div class="project-tags">${features.slice(0,3).map(f=>`<span class="project-tag">${escapeHTML(f)}</span>`).join("")}</div>
        <div class="project-footer"><span class="project-link">${escapeHTML(getTranslation("ui.viewProject"))}<span class="project-arrow">→</span></span></div>
      </div>
    </article>`;
  }).join("");

  c.querySelectorAll(".project-card").forEach((card, index) => {
    const project = portfolioData.projects[index];
    if (!project) return;

    card.setAttribute("tabindex", "0");
    card.setAttribute("role", "link");
    card.setAttribute("aria-label", `${getTranslation("ui.viewProject")}: ${getText(project.name)}`);

    const openProject = () => {
      window.location.href = `/projects/${encodeURIComponent(project.id)}`;
    };

    card.addEventListener("click", event => {
      if (event.target.closest("video")) return;
      openProject();
    });

    card.addEventListener("keydown", event => {
      if (event.key === "Enter" || event.key === " ") {
        event.preventDefault();
        openProject();
      }
    });
  });

  c.querySelectorAll("video").forEach(video => {
    ["click", "mousedown", "pointerdown"].forEach(type => {
      video.addEventListener(type, event => event.stopPropagation());
    });
  });
}
function renderCertificatePreview(){
  const c=document.getElementById("certificatePreviewGrid");if(!c)return;
  c.innerHTML=portfolioData.certificates.slice(0,6).map(x=>`<article class="certificate-card"><span class="certificate-organization">${escapeHTML(x.organization)}</span><h3>${escapeHTML(x.title)}</h3><a class="certificate-link" href="${escapeHTML(x.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(getTranslation("certificates.view"))}</a></article>`).join("");
}
function renderSkills(){
  const c=document.getElementById("skillsGrid");if(!c)return;
  const groups=[["frontend","skills.frontend"],["backend","skills.backend"],["programmingLanguages","skills.programmingLanguages"],["databases","skills.databases"],["frameworksLibraries","skills.frameworksLibraries"],["ai","skills.ai"],["tools","skills.tools"]];
  c.innerHTML=groups.map(([key,title])=>`<article class="skill-group"><h3>${escapeHTML(getTranslation(title))}</h3><div class="skill-list">${portfolioData.skills[key].map(x=>`<span class="skill-item">${escapeHTML(x)}</span>`).join("")}</div></article>`).join("");
}
function renderVolunteer(){
  const hours=document.getElementById("volunteerHours"),certs=document.getElementById("volunteerCertificates"),activities=document.getElementById("volunteerActivities");
  if(hours)hours.textContent=getText(portfolioData.volunteer.totalHours);
  if(certs)certs.innerHTML=portfolioData.volunteer.certificates[currentLanguage].map(x=>`<span>${escapeHTML(x)}</span>`).join("");
  if(activities)activities.innerHTML=portfolioData.volunteer.activities[currentLanguage].map(x=>`<li>${escapeHTML(x)}</li>`).join("");
}
function createList(items){return !items?.length?"":`<ul>${items.map(x=>`<li>${escapeHTML(x)}</li>`).join("")}</ul>`}
function createWorkflow(items){return !items?.length?"":`<div class="how-it-works">${items.map((x,i)=>`<div class="workflow-step"><span class="workflow-number">${String(i+1).padStart(2,"0")}</span><span>${escapeHTML(x)}</span></div>${i<items.length-1?'<div class="workflow-arrow">↓</div>':""}`).join("")}</div>`}
function createDetailSection(title,content){if(!content)return "";return `<section class="detail-section"><h2>${escapeHTML(title)}</h2>${Array.isArray(content)?createList(content):`<p>${escapeHTML(content)}</p>`}</section>`}
function getProjectId(){
  const fromQuery=new URLSearchParams(location.search).get("id");
  if(fromQuery)return fromQuery;
  const match=location.pathname.match(/\/projects\/([^/?#]+)/);
  return match?decodeURIComponent(match[1]):null;
}
function findProject(){return portfolioData.projects.find(p=>p.id===getProjectId())}
function renderProjectDetails(){
  const c=document.getElementById("projectDetail");if(!c)return;
  const p=findProject();
  if(!p){c.innerHTML=`<div class="project-detail-header"><h1>${escapeHTML(getTranslation("ui.notFound"))}</h1><a class="outline-button" href="/#projects">${escapeHTML(getTranslation("project.backToProjects"))}</a></div>`;return}
  window.scrollTo(0,0);
  const sections=[
    createDetailSection(getTranslation("project.overview"),getText(p.overview)),
    createDetailSection(getTranslation("project.problem"),getText(p.problem)),
    createDetailSection(getTranslation("project.solution"),getText(p.solution)),
    p.howItWorks?.[currentLanguage]?`<section class="detail-section"><h2>${escapeHTML(getTranslation("project.howItWorks"))}</h2>${createWorkflow(p.howItWorks[currentLanguage])}</section>`:"",
    p.features?.[currentLanguage]?`<section class="detail-section"><h2>${escapeHTML(getTranslation("project.keyFeatures"))}</h2>${createList(p.features[currentLanguage])}</section>`:"",
    p.agents?.[currentLanguage]?`<section class="detail-section"><h2>${escapeHTML(getTranslation("project.agents"))}</h2>${createList(p.agents[currentLanguage])}</section>`:"",
    p.contribution?.[currentLanguage]?`<section class="detail-section"><h2>${escapeHTML(getTranslation("project.myContribution"))}</h2>${createList(p.contribution[currentLanguage])}</section>`:"",
    `<section class="detail-section"><h2>${escapeHTML(getTranslation("project.technologies"))}</h2><div class="technology-list">${p.technologies.map(x=>`<span>${escapeHTML(x)}</span>`).join("")}</div></section>`,
    `<section class="detail-section"><h2>${escapeHTML(getTranslation("project.demoVideo"))}</h2><div class="video-wrapper"><video controls playsinline preload="metadata"><source src="/${escapeHTML(p.video)}">${escapeHTML(getTranslation("project.unableToPlay"))}</video><p class="video-fallback">${escapeHTML(getTranslation("project.unableToPlay"))}</p></div></section>`
  ].filter(Boolean);
  c.innerHTML=`<a class="back-link" href="/#projects"><span>${currentLanguage==="ar"?"→":"←"}</span><span>${escapeHTML(getTranslation("project.backToProjects"))}</span></a>
  <div class="project-detail-header"><p class="project-detail-index">${escapeHTML(p.number)}</p><h1>${escapeHTML(getText(p.name))}</h1><p class="project-detail-type">${escapeHTML(getText(p.type))}</p><p class="project-detail-description">${escapeHTML(getText(p.overview))}</p></div>
  <div class="project-detail-grid"><div>${sections.join("")}</div><aside class="project-sidebar"><p class="sidebar-label">${escapeHTML(getTranslation("project.details"))}</p><div class="sidebar-list">
  ${p.context?`<div><span>${escapeHTML(getTranslation("sections.projects.kicker"))}</span><strong>${escapeHTML(getText(p.context))}</strong></div>`:""}
  ${p.period?`<div><span>${escapeHTML(getTranslation("project.period"))}</span><strong>${escapeHTML(getText(p.period))}</strong></div>`:""}
  ${p.team?`<div><span>${escapeHTML(getTranslation("project.team"))}</span><strong>${escapeHTML(getText(p.team))}</strong></div>`:""}
  ${p.role?`<div><span>${escapeHTML(getTranslation("project.role"))}</span><strong>${escapeHTML(getText(p.role))}</strong></div>`:""}
  ${p.database?`<div><span>${escapeHTML(getTranslation("project.database"))}</span><strong>${escapeHTML(p.database)}</strong></div>`:""}
  ${p.numberOfTables?`<div><span>${escapeHTML(getTranslation("project.numberOfTables"))}</span><strong>${escapeHTML(p.numberOfTables)}</strong></div>`:""}
  </div></aside></div>`;
  document.title=`${getText(p.name)} | GhadaFlow`;
}
function renderCertificatesPage(){
  const c=document.getElementById("certificatesPageContent");if(!c)return;
  const groups={};portfolioData.certificates.forEach(x=>(groups[x.organization]??=[]).push(x));
  c.innerHTML=Object.entries(groups).map(([org,items])=>`<section class="certificate-group"><h2 class="certificate-group-title">${escapeHTML(org)}</h2><div class="certificate-full-grid">${items.map(x=>`<article class="certificate-full-card"><span class="certificate-organization">${escapeHTML(org)}</span><h3>${escapeHTML(x.title)}</h3><a class="certificate-link" href="${escapeHTML(x.url)}" target="_blank" rel="noopener noreferrer">${escapeHTML(getTranslation("certificates.view"))}</a></article>`).join("")}</div></section>`).join("");
}
function renderAll(){renderKafaatResponsibilities();renderProjects();renderCertificatePreview();renderSkills();renderVolunteer();renderProjectDetails();renderCertificatesPage()}
function initializePage(){
  setupTheme();applyLanguage();setupNavigation();setupMobileMenu();
  document.getElementById("languageToggle")?.addEventListener("click",toggleLanguage);
  renderAll();
  if(location.pathname.startsWith("/projects/"))window.scrollTo(0,0);
}
document.addEventListener("DOMContentLoaded",initializePage);
