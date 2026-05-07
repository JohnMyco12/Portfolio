// ===========================
// EMAILJS CONFIGURATION
// ===========================
const EMAILJS_CONFIG = {
    publicKey: "YOUR_EMAILJS_PUBLIC_KEY",
    serviceId: "YOUR_EMAILJS_SERVICE_ID",
    templateId: "YOUR_EMAILJS_TEMPLATE_ID"
};

// ===========================
// INITIALIZE EMAILJS
// ===========================
(function () {
    emailjs.init(EMAILJS_CONFIG.publicKey);
})();

// ===========================
// DOM LOADED
// ===========================
document.addEventListener("DOMContentLoaded", function () {
    initLoader();
    initNavbar();
    initHamburger();
    initTypingEffect();
    initScrollAnimations();
    initSkillBars();
    initProjectFilter();
    initContactForm();
    initBackToTop();
    initActiveNavOnScroll();
    initSmoothScroll();
    initRippleEffect();
});

// ===========================
// LOADER - FIXED VERSION
// ===========================
function initLoader() {
    const loader = document.getElementById("loader");

    // Hide loader after max 1.5 seconds no matter what
    function hideLoader() {
        loader.classList.add("hidden");
    }

    // Try window load first
    if (document.readyState === "complete") {
        // Page already loaded
        setTimeout(hideLoader, 500);
    } else {
        window.addEventListener("load", function () {
            setTimeout(hideLoader, 500);
        });

        // Fallback: force hide after 1.5s in case load never fires
        setTimeout(hideLoader, 1500);
    }
}

// ===========================
// NAVBAR SCROLL
// ===========================
function initNavbar() {
    const navbar = document.getElementById("navbar");
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
}

// ===========================
// HAMBURGER MENU
// ===========================
function initHamburger() {
    const hamburger = document.getElementById("hamburger");
    const navLinks = document.getElementById("navLinks");

    hamburger.addEventListener("click", function () {
        hamburger.classList.toggle("active");
        navLinks.classList.toggle("open");
    });

    document.querySelectorAll(".nav-link").forEach(function (link) {
        link.addEventListener("click", function () {
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
        });
    });

    document.addEventListener("click", function (e) {
        if (!hamburger.contains(e.target) && !navLinks.contains(e.target)) {
            hamburger.classList.remove("active");
            navLinks.classList.remove("open");
        }
    });
}

// ===========================
// TYPING EFFECT
// ===========================
function initTypingEffect() {
    const typedText = document.getElementById("typedText");
    const words = [
        "Web Developer",
        "Python Programmer",
        "Network Enthusiast",
        "UI/UX Designer",
        "Problem Solver"
    ];

    let wordIndex = 0;
    let charIndex = 0;
    let isDeleting = false;
    let typingSpeed = 100;

    function type() {
        const currentWord = words[wordIndex];

        if (isDeleting) {
            typedText.textContent = currentWord.substring(0, charIndex - 1);
            charIndex--;
            typingSpeed = 60;
        } else {
            typedText.textContent = currentWord.substring(0, charIndex + 1);
            charIndex++;
            typingSpeed = 100;
        }

        if (!isDeleting && charIndex === currentWord.length) {
            typingSpeed = 2000;
            isDeleting = true;
        } else if (isDeleting && charIndex === 0) {
            isDeleting = false;
            wordIndex = (wordIndex + 1) % words.length;
            typingSpeed = 400;
        }

        setTimeout(type, typingSpeed);
    }

    type();
}

// ===========================
// SCROLL ANIMATIONS
// ===========================
function initScrollAnimations() {
    const animateElements = document.querySelectorAll(
        ".skill-card, .project-card, .cert-card, .about-content, .contact-content, .section-header"
    );

    animateElements.forEach(function (el) {
        el.classList.add("fade-in");
    });

    const observer = new IntersectionObserver(
        function (entries) {
            entries.forEach(function (entry) {
                if (entry.isIntersecting) {
                    entry.target.classList.add("visible");
                }
            });
        },
        {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        }
    );

    animateElements.forEach(function (el) {
        observer.observe(el);
    });
}