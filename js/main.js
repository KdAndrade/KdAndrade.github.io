import { initializeTheme } from './theme.js';
import { initializeLanguage } from './i18n.js';
import { about } from './sections/about.js';
import { stack } from './sections/stack.js';
import { projectSection } from './sections/projects.js';
import { engineering } from './sections/engineering.js';
import { development } from './sections/development.js';
import { contact } from './sections/contact.js';
document.querySelector('#sections').innerHTML = [
  about,
  stack,
  projectSection,
  engineering,
  development,
  contact,
].join('');
const toggle = document.querySelector('.menu-toggle');
const links = document.querySelector('#nav-links');
function closeMenu() {
  toggle.setAttribute('aria-expanded', 'false');
  links.classList.remove('is-open');
}
toggle.addEventListener('click', () => {
  const open = toggle.getAttribute('aria-expanded') !== 'true';
  toggle.setAttribute('aria-expanded', String(open));
  links.classList.toggle('is-open', open);
});
links.addEventListener('click', (e) => {
  if (e.target.closest('a')) closeMenu();
});
document.addEventListener('keydown', (e) => {
  if (e.key === 'Escape' && toggle.getAttribute('aria-expanded') === 'true') {
    closeMenu();
    toggle.focus();
  }
});

initializeLanguage();

initializeTheme();
