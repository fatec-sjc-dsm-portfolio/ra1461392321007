const root = document.documentElement;
const header = document.querySelector('[data-header]');
const year = document.querySelector('[data-year]');
const themeToggle = document.querySelector('[data-theme-toggle]');
const themeIcon = document.querySelector('[data-theme-icon]');

const storedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
const initialTheme = storedTheme || (prefersDark ? 'dark' : 'light');

function setTheme(theme) {
  root.dataset.theme = theme;
  themeIcon.textContent = theme === 'dark' ? '☼' : '☾';
  localStorage.setItem('theme', theme);
}

function syncHeader() {
  header.classList.toggle('is-scrolled', window.scrollY > 8);
}

setTheme(initialTheme);
year.textContent = new Date().getFullYear();
syncHeader();

themeToggle.addEventListener('click', () => {
  setTheme(root.dataset.theme === 'dark' ? 'light' : 'dark');
});

window.addEventListener('scroll', syncHeader, { passive: true });
