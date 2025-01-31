// Welcome Message

// Set a delay
const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// Show Welcome Message
 const showWelcome = async () => {
    await delay(500);
    document.getElementById('welcome').style.display = 'block';
}

showWelcome();

// Hide Message when button pressed 
const button = document.querySelector('button');

button.addEventListener('click', () => {
    document.getElementById("welcome").style.display = "none";
});