const splash= document.querySelector('.splash');

document.addEventListener('DOMContentLoaded',(e)=>{
    setTimeout(()=>{
           splash.classList.add('display-none');
    },3500);
})
// Assuming you have a reference to your splash screen element
const splashScreen = document.querySelector('.splash');

// Function to show the splash screen
function showSplashScreen() {
    splashScreen.classList.add('display-block');
}

// Function to hide the splash screen
function hideSplashScreen() {
    splashScreen.classList.remove('display-block');
}

// Example usage
// Show splash screen
showSplashScreen();

// Hide splash screen after a delay (e.g., 3 seconds)
setTimeout(hideSplashScreen, 3500);


document.addEventListener("DOMContentLoaded", function () {
    const greetings = {
        en: "• Hello",
        es: "• Hola",
        fr: "• Bonjour",
        de: "• Hallo",
        it: "• Ciao",
        pt: "• Olá",
        
        zh: "• 你好",
        ru: "• Привет",
        ar: "• مرحبا",
        pm: "• Namaste",
    };

    const greetingElement = document.getElementById("greeting");
    const introElement = document.getElementById("intro");

    const languages = Object.keys(greetings);
    let index = 0;

    function displayGreeting() {
        if (index < languages.length) {
            const languageCode = languages[index];
            const greetingMessage = greetings[languageCode];

            greetingElement.textContent = greetingMessage;

            index++;

            setTimeout(displayGreeting, 300); // Change the delay if needed
        } else {
            // All greetings displayed, hide the intro and show the website content
            introElement.style.display = "none";
            document.body.style.overflow = "auto"; // Allow scrolling after intro
            
        }
    }

    displayGreeting();
});
