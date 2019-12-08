window.onload = function() {
  if(localStorage.getItem('user') == 'none') {
      /* User is not set */
      window.location.href = "/index.html"
      console.log(localStorage.user);
    } else {
      document.getElementById("title").textContent = "Hello, " + localStorage.getItem('user') + ". Welcome back!";
    }

}

localStorage.setItem('load', 'none');

function loadDuration() {
  window.location.href = "/loadduration.html";
}

function whites() {
  localStorage.setItem('load', 'whites');
  loadDuration();
}

function darks() {
  localStorage.setItem('load', 'darks');
  loadDuration();
}

function lights() {
  localStorage.setItem('load', 'lights');
  loadDuration();
}

function delicates() {
  localStorage.setItem('load', 'delicates');
  loadDuration();
}