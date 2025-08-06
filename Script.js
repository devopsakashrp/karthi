const weddingDate = new Date("August 28, 2025 06:00:00").getTime();

const countdownInterval = setInterval(function () {
const now = new Date().getTime();
const distance = weddingDate - now;

if (distance < 0) {
clearInterval(countdownInterval);
document.getElementById("countdown").innerHTML = "🎉 It's Wedding Time!";
return;
}

const days = Math.floor(distance / (1000 * 60 * 60 * 24));
const hours = Math.floor(
(distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
);
const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
const seconds = Math.floor((distance % (1000 * 60)) / 1000);

document.getElementById("countdown").innerHTML =
days + "d " + hours + "h " + minutes + "m " + seconds + "s";
}, 1000);