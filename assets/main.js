const content = window.SITE_CONTENT;
const publications = content.publications;

/** Fill the page from the human-readable settings in content.js. */
function applyContent() {
  const { profile, about, service } = content;
  const nameParts = profile.name.trim().split(/\s+/);
  const lastName = nameParts.pop();

  document.title = profile.name;
  document.querySelector('meta[property="og:title"]').content = profile.name;
  document.getElementById("brand-initials").textContent = profile.initials;
  document.getElementById("brand-name").textContent = profile.name;
  document.getElementById("hero-name").innerHTML = `${nameParts.join(" ")} <em>${lastName}</em>`;
  document.getElementById("hero-role").textContent = `${profile.role} · ${profile.location}`.toUpperCase();
  document.getElementById("hero-tagline").innerHTML = profile.tagline;
  document.getElementById("portrait-initials").textContent = profile.initials;
  document.getElementById("portrait-name").textContent = profile.name.toUpperCase();
  document.getElementById("availability").innerHTML = profile.availability;

  document.querySelectorAll(".email-link").forEach((link) => {
    if (profile.email) {
      link.href = `mailto:${profile.email}`;
    } else {
      link.hidden = true;
    }
  });
  if (profile.email) {
    document.getElementById("footer-email").innerHTML = `${profile.email} <span>↗</span>`;
  }

  const githubLink = document.getElementById("github-link");
  if (profile.github) {
    githubLink.href = profile.github;
  } else {
    githubLink.hidden = true;
  }
  document.getElementById("footer-address").innerHTML =
    `${profile.department}<br>${profile.institution} · ${profile.location}`;

  document.getElementById("statistics").innerHTML = profile.statistics
    .map((item) => `<span>${item.number} <small>${item.label}</small></span>`)
    .join("");

  document.getElementById("about-headline").innerHTML = about.headline;
  document.getElementById("about-paragraphs").innerHTML = about.paragraphs
    .map((paragraph) => `<p>${paragraph}</p>`)
    .join("");

  document.getElementById("service-list").innerHTML = service
    .map(
      (item) => `<div><span class="mini-label">${item.label}</span>
        <h3>${item.heading}</h3><p>${item.details}</p></div>`,
    )
    .join("");
}

applyContent();

let expanded=false;
const list=document.getElementById('pub-list');
function renderPublications(){const visible=expanded?publications:publications.slice(0,8);list.innerHTML=visible.map(p=>`<article class="pub-item"><span class="pub-year">${p.year}</span><div><h3 class="pub-title">${p.link?`<a href="${p.link}" target="_blank" rel="noreferrer">${p.title}</a>`:p.title}</h3><p class="pub-authors">${p.authors}</p></div><span class="pub-venue">${p.venue}</span><span class="pub-arrow" aria-hidden="true">${p.link?'↗':''}</span></article>`).join('');document.getElementById('show-more').style.display=publications.length>8?'flex':'none';}
const themeButton=document.getElementById('theme-toggle');const initialTheme=localStorage.getItem('theme')||(matchMedia('(prefers-color-scheme: dark)').matches?'dark':'light');document.documentElement.dataset.theme=initialTheme;themeButton.addEventListener('click',()=>{const theme=document.documentElement.dataset.theme==='dark'?'light':'dark';document.documentElement.dataset.theme=theme;localStorage.setItem('theme',theme)});
document.getElementById('show-more').addEventListener('click',()=>{expanded=!expanded;renderPublications();document.querySelector('#show-more span').textContent=expanded?'Show fewer publications':'Show more publications'});
const menu=document.getElementById('mobile-nav'),menuBtn=document.getElementById('menu-toggle');menuBtn.addEventListener('click',()=>{const open=menu.classList.toggle('open');menuBtn.setAttribute('aria-expanded',open);menu.setAttribute('aria-hidden',!open)});menu.querySelectorAll('a').forEach(a=>a.addEventListener('click',()=>{menu.classList.remove('open');menuBtn.setAttribute('aria-expanded','false');menu.setAttribute('aria-hidden','true')}));
const observer=new IntersectionObserver(entries=>entries.forEach(e=>{if(e.isIntersecting){e.target.classList.add('visible');observer.unobserve(e.target)}}),{threshold:.08});document.querySelectorAll('.reveal').forEach(el=>observer.observe(el));
window.addEventListener('scroll',()=>document.querySelector('.site-header').classList.toggle('scrolled',scrollY>30),{passive:true});document.getElementById('year').textContent=new Date().getFullYear();renderPublications();
