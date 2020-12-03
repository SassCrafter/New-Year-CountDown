const newYearDate = new Date('January 1 2021');
const daysEl = document.getElementById('days');
const hoursEl = document.getElementById('hours');
const minsEl = document.getElementById('mins');
const secEl = document.getElementById('sec');

function formatTime(time) {
    return time < 10 ? `0${time}`: time;
}

function countDown() {
    const currentDate = new Date();
    const totalSeconds = (Math.floor(newYearDate - currentDate)) / 1000;

    const days = Math.floor(totalSeconds / 3600 / 24 );
    const hours = Math.floor((totalSeconds /  3600) % 24);
    const mins = Math.floor((totalSeconds /  60 % 60));
    const sec = Math.floor(totalSeconds % 60);

    daysEl.innerHTML = days;
    hoursEl.innerHTML = hours;
    minsEl.innerHTML = mins;
    secEl.innerHTML = formatTime(sec);
}

countDown();

setInterval(countDown, 1000);