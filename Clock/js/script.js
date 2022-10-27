const clockTickAudio = new Audio('./audio/clockTick.wav');
function clock(){
    const date = new Date();
    const hours = date.getHours();
    const minutes = date.getMinutes();
    const seconds = date.getSeconds();
    const hoursRatio = hours / 12;
    const minutesRatio = minutes / 60;
    const secondsRatio = seconds / 60;
    const hoursDegrees = hoursRatio * 360;
    const minutesDegrees = minutesRatio * 360;
    const secondsDegrees = secondsRatio * 360;
    const hoursHand = document.querySelector('#hourHand');
    const minutesHand = document.querySelector('#minuteHand');
    const secondsHand = document.querySelector('#secondHand');
    hoursHand.style.transform = `rotate(${hoursDegrees}deg)`;
    minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;
    secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;
    clockTickAudio.play();
    const time = `${hours}:${minutes}:${seconds}`;
    document.getElementById('time').innerHTML = time;
}


setInterval(clock, 1000);
