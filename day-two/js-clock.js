document.addEventListener("DOMContentLoaded", () => {
  const secondHand = document.querySelector(".second-hand");
  const minuteHand = document.querySelector(".min-hand");
  const hourHand = document.querySelector(".hour-hand");

  function updateTime() {
    const currentTime = new Date();
    updateSeconds(currentTime);
    updateMinutes(currentTime);
    updateHour(currentTime);
  }

  function updateSeconds(currentTime) {
    const seconds = currentTime.getSeconds();
    const secondsDegrees = (seconds / 60) * 360 + 90;
    secondHand.style.transform = `rotate(${secondsDegrees}deg)`;
  }

  function updateMinutes(currentTime) {
    const minutes = currentTime.getMinutes();
    const minutesDegrees = (minutes / 60) * 360 + 90;
    minuteHand.style.transform = `rotate(${minutesDegrees}deg)`;
  }

  function updateHour(currentTime) {
    const hour = currentTime.getHour();
    const hourDegrees = (hour / 60) * 360 + 90;
    hourHand.style.transform = `rotate(${hourDegrees}deg)`;
  }

  setInterval(updateTime, 1000);
});
