// Smooth animation when sections appear

const sections = document.querySelectorAll(".section, .contact");

const observer = new IntersectionObserver(
    (entries) => {
        entries.forEach((entry) => {

            if (entry.isIntersecting) {
                entry.target.style.opacity = "1";
                entry.target.style.transform = "translateY(0)";
            }

        });
    },
    {
        threshold: 0.1
    }
);

sections.forEach((section) => {

    section.style.opacity = "0";
    section.style.transform = "translateY(30px)";
    section.style.transition = "all 0.7s ease";

    observer.observe(section);

});
// ========================================
// DARK / LIGHT MODE
// ========================================

const themeToggle = document.getElementById("themeToggle");

themeToggle.addEventListener("click", function () {

    document.body.classList.toggle("dark-mode");

    if (document.body.classList.contains("dark-mode")) {
        themeToggle.textContent = "☀️";
        localStorage.setItem("theme", "dark");
    } else {
        themeToggle.textContent = "🌙";
        localStorage.setItem("theme", "light");
    }

});


// Remember user's theme

const savedTheme = localStorage.getItem("theme");

if (savedTheme === "dark") {
    document.body.classList.add("dark-mode");
    themeToggle.textContent = "☀️";
}
// ========================================
// ENGLISH / AMHARIC LANGUAGE
// ========================================

const languageToggle = document.getElementById("languageToggle");

let currentLanguage = localStorage.getItem("language") || "en";

function changeLanguage(language) {

    const elements = document.querySelectorAll("[data-en][data-am]");

    elements.forEach(function(element) {

        if (language === "am") {
            element.textContent = element.getAttribute("data-am");
        } else {
            element.textContent = element.getAttribute("data-en");
        }

    });

    currentLanguage = language;

    localStorage.setItem("language", language);

    if (language === "am") {
        languageToggle.textContent = "EN";
    } else {
        languageToggle.textContent = "አማ";
    }
}


// Language button

languageToggle.addEventListener("click", function() {

    if (currentLanguage === "en") {
        changeLanguage("am");
    } else {
        changeLanguage("en");
    }

});


// Load saved language

changeLanguage(currentLanguage);
