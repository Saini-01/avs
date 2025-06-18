function updateEasternTime() {
  const easternTimeElement = document.getElementById('eastern-time');
  const now = new Date();
  const options = { timeZone: 'America/New_York', hour: 'numeric', minute: 'numeric', second: 'numeric' };
  easternTimeElement.textContent = now.toLocaleString('en-US', options);
}

window.onload = function () {
  updateEasternTime();
  setInterval(updateEasternTime, 1000);
};

function showPage(pageId) {
  document.querySelectorAll('.page').forEach(page => {
    page.classList.remove('active');
  });
  document.getElementById(pageId).classList.add('active');
}