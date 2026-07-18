
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