// Prompt user's name and display welcome message
var name = window.prompt("Please enter your name");
document.getElementById('welcome-message').textContent = "Hello " + name + ", welcome to TechStore!";

// Get the current date and time in Malaysia time
var currentDate = new Date();
var options = { timeZone: 'Asia/Kuala_Lumpur' };
var malaysiaDate = new Date(currentDate.toLocaleString('en-US', options));

// Format the date and time
var dateTimeString = malaysiaDate.toLocaleString('en-US', {
    weekday: 'long',
    year: 'numeric',
    month: 'long',
    day: 'numeric',
    hour: 'numeric',
    minute: 'numeric',
    second: 'numeric',
    timeZoneName: 'short'
});

// Display the formatted date and time on the page
document.getElementById('datetime1').textContent = dateTimeString;
