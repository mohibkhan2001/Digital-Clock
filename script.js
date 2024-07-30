function StartTime() {
  let today = new Date();
  let hours = today.getHours();
  let minutes = today.getMinutes();
  let seconds = today.getSeconds();
  minutes = checkTime(minutes);
  seconds = checkTime(seconds);

  document.getElementById("time").innerHTML = hours + ":" + minutes + ":" + seconds;
 setTimeout(StartTime,1000)
}

function checkTime(i) {
    if (i < 10) {i = "0" + i};  // add zero in front of numbers < 10
    return i;
  }
