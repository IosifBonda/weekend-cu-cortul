
console.log("JavaScript funcționează!");

const menuButton = document.querySelector(".menu-toggle");
const nav = document.querySelector("nav");

menuButton.addEventListener("click", () => {

    nav.classList.toggle("open");

});

const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll("nav a");

window.addEventListener("scroll", () => {

    let current = "";

    sections.forEach(section => {

        const top = section.offsetTop - 150;

        const height = section.offsetHeight;

        if (window.scrollY >= top) {

            current = section.getAttribute("id");

        }

    });

    navLinks.forEach(link => {

        link.classList.remove("active");

        if (link.getAttribute("href") === "#" + current) {

            link.classList.add("active");

        }

    });

});

navLinks.forEach(link => {

    link.addEventListener("click", () => {

        nav.classList.remove("open");

    });

});

const header = document.querySelector(".header");

window.addEventListener("scroll", () => {

    if(window.scrollY > 80){

        header.classList.add("scrolled");

    }else{

        header.classList.remove("scrolled");

    }

});

console.log("EVRIKA.");

const reveals = document.querySelectorAll(".reveal");

function reveal() {

    const trigger = window.innerHeight * 0.85;

    reveals.forEach(item => {

        if(item.getBoundingClientRect().top < trigger){

            item.classList.add("active");

        }

    });

}

window.addEventListener("scroll", reveal);

reveal();



const eventDate = new Date(2026, 6, 24, 9, 0, 0);

setInterval(() => {

    const now = new Date().getTime();

    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));

    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));

    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));

    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("days").textContent = days;

    document.getElementById("hours").textContent = hours;

    document.getElementById("minutes").textContent = minutes;

    document.getElementById("seconds").textContent = seconds;

},1000);



async function loadWeather(){

    const latitude = 46.65;
    const longitude = 23.33;

    const url =
    `https://api.open-meteo.com/v1/forecast?latitude=${latitude}&longitude=${longitude}&daily=weather_code,temperature_2m_max,temperature_2m_min&forecast_days=3&timezone=Europe/Bucharest`;

    const response = await fetch(url);

    const data = await response.json();

const weatherText = {

    0: "Senin",

    1: "Mai mult senin",

    2: "Parțial noros",

    3: "Noros",

    45: "Ceață",

    48: "Ceață cu chiciură",

    51: "Burniță slabă",

    53: "Burniță",

    55: "Burniță intensă",

    56: "Burniță înghețată",

    57: "Burniță înghețată",

    61: "Ploaie slabă",

    63: "Ploaie",

    65: "Ploaie puternică",

    66: "Ploaie înghețată",

    67: "Ploaie înghețată",

    71: "Ninsoare slabă",

    73: "Ninsoare",

    75: "Ninsoare abundentă",

    77: "Fulguială",

    80: "Averse",

    81: "Averse puternice",

    82: "Averse torențiale",

    85: "Ninsoare",

    86: "Ninsoare abundentă",

    95: "Furtună",

    96: "Furtună cu grindină",

    99: "Furtună severă"

};

function getIcon(code){

    if(code === 0)
        return "sun";

    if(code === 1)
        return "cloud-sun";

    if(code === 2)
        return "cloud-sun";

    if(code === 3)
        return "cloud";

    if([45,48].includes(code))
        return "cloud-fog";

    if([51,53,55,56,57].includes(code))
        return "cloud-drizzle";

    if([61,63,65,66,67,80,81,82].includes(code))
        return "cloud-rain";

    if([71,73,75,77,85,86].includes(code))
        return "cloud-snow";

    if([95,96,99].includes(code))
        return "cloud-lightning";

    return "cloud";

}

    for(let i=0;i<3;i++){

        const code = data.daily.weather_code[i];

        document.getElementById(`temp${i}`).textContent =
            Math.round(data.daily.temperature_2m_max[i])+"°";

        document.getElementById(`max${i}`).textContent =
            "⬆ "+Math.round(data.daily.temperature_2m_max[i])+"°";

        document.getElementById(`min${i}`).textContent =
            "⬇ "+Math.round(data.daily.temperature_2m_min[i])+"°";

        document.getElementById(`desc${i}`).textContent =
            weatherText[code] || "Necunoscut";

        document.getElementById(`icon${i}`)
            .setAttribute("data-lucide",getIcon(code));

    }

    document.getElementById("weather-updated").textContent =
        "Actualizat: " +
        new Date().toLocaleTimeString("ro-RO",{
            hour:"2-digit",
            minute:"2-digit"
        });

    lucide.createIcons();

}

loadWeather();