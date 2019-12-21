//skycon icon for displaying conditions for location
const icon = new Skycons({"color": "#222"});
icon.set('icon', 'clear-day');
icon.play();

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth()+'.'+ d.getDate()+'.'+ d.getFullYear();
