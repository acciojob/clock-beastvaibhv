//your JS code here. If required.
function updateTimer(){
const timer = document.getElementById("timer");
const date = new Date();
const dateOptions = { month: 'numeric',   day: 'numeric', year: 'numeric' };
const timeOptions = { hour: '2-digit', minute: '2-digit', second: '2-digit'};

const formattedDate = date.toLocaleDateString(undefined, dateOptions);
const formattedTime = date.toLocaleTimeString(undefined, timeOptions);

timer.textContent = `${formattedDate}, ${formattedTime.toUpperCase()}`;

}
updateTimer();
 
setInterval(updateTimer, 1000);