function startTimer(duration, display) {
  var timer = duration, minutes, seconds;
    var countDown = setInterval(function () {
        minutes = parseInt(timer / 60, 10);
        seconds = parseInt(timer % 60, 10);

        minutes = minutes < 10 ? "0" + minutes : minutes;
        seconds = seconds < 10 ? "0" + seconds : seconds;

        display.textContent = minutes + ":" + seconds;

        if (--timer < 0) {
            timer = duration;
        } else if(timer == 0){
          document.getElementById("title").textContent = localStorage.getItem('user') + "'s " + localStorage.getItem('load') + " load is done!";
          clearInterval(countDown);
          document.querySelector('#timer-text').textContent = "DONE!";
        }
    }, 1000);
}

window.onload = function() {
  if(localStorage.getItem('user') == 'none') {
      /* User is not set */
      window.location.href = "/index.html";
    } 

  if(localStorage.getItem('load') == 'none') {
      /* User is not set */
      window.location.href = "/index.html";
    }

  if(localStorage.getItem('started') == 'none') {
      /* User is not set */
      window.location.href = "/index.html";
    } else {
      document.getElementById("title").textContent = localStorage.getItem('user') + "'s " + localStorage.getItem('load') + " load is in progress!";
  }
  
  var minutesToSeconds = 6 * localStorage.getItem('minutes');
  var seconds = localStorage.getItem('seconds');
  var timeInSeconds = minutesToSeconds + seconds;

  display = document.querySelector('#timer-text');
  startTimer(timeInSeconds, display);

};
  