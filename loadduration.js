window.onload = function() {
  if(localStorage.getItem('user') == 'none') {
      /* User is not set */
      window.location.href = "/index.html";
    } 

  if(localStorage.getItem('load') == 'none') {
      /* User is not set */
      window.location.href = "/index.html";
    } else {
      document.getElementById("title").textContent = "Time to get your " + localStorage.getItem('load') + " cleaned!";
    }

}

function startLoad() {
  localStorage.setItem("started", true)
  

  if(document.getElementById("minutes").value == "") {
    localStorage.setItem('minutes', 0);
  } else {
    localStorage.setItem('minutes', document.getElementById("minutes").value);
  }

  if(document.getElementById("seconds").value == "") {
    localStorage.setItem('seconds', 0);
  } else {
    localStorage.setItem('seconds', document.getElementById("seconds").value);
  }
  
  window.location.href = "/timer.html";
}