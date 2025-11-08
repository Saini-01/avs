function updateEasternTime() {
  const easternTimeElement = document.getElementById('eastern-time');
  const now = new Date();
  const options = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  easternTimeElement.textContent = now.toLocaleString('en-US', options);
}

function toggleTheme() {
  const html = document.documentElement;
  const currentTheme = html.getAttribute('data-theme');
  const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
  
  html.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
}

function initializeTheme() {
  const savedTheme = localStorage.getItem('theme');
  const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  const theme = savedTheme || (prefersDark ? 'dark' : 'light');
  
  document.documentElement.setAttribute('data-theme', theme);
}

window.onload = function () {
  initializeTheme();
  updateEasternTime();
  setInterval(updateEasternTime, 1000);
};

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}
