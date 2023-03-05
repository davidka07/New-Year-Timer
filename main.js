const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds') ;


const currentYear = new Date().getFullYear();

const newYear = new Date(`1 Jan ${currentYear + 1} 00:00:00`);

function countdownTimer() {
  const todayDate = Date.now();
  const diffDate = newYear - todayDate;

  const nowDays = Math.floor(diffDate / 1000 / 60 / 60 / 24);
  const nowHours = Math.floor((diffDate / 1000 / 60 / 60) % 24);
  const nowMinutes = Math.floor((diffDate / 1000 / 60) % 60);
  const nowSeconds = Math.floor((diffDate / 1000) % 60);

  days.innerHTML = nowDays < 10 ? '0' + nowDays : nowDays;
  hours.innerHTML = nowHours < 10 ? '0' + nowHours : nowHours;
  minutes.innerHTML = nowMinutes < 10 ? '0' + nowMinutes : nowMinutes;
  seconds.innerHTML = nowSeconds < 10 ? '0' + nowSeconds : nowSeconds;

};

setInterval(countdownTimer, 1000);

