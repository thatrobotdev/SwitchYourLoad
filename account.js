localStorage.clear();
localStorage.setItem('user', 'none');
localStorage.setItem('load', 'none');
localStorage.setItem('started', 'none');

function loadSelect() {
  window.location.href = "/loadselect.html";
}

function frog() {
  localStorage.setItem('user', 'Frog');
  loadSelect();
}

function tiger() {
  localStorage.setItem('user', 'Tiger');
  loadSelect();
}

function penguin() {
  localStorage.setItem('user', 'Penguin');
  loadSelect();
}