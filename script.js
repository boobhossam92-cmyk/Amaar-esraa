document.addEventListener("DOMContentLoaded", () => {

    // ==================================
    // SCROLL REVEAL
    // ==================================

    const revealElements = document.querySelectorAll(".reveal");

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(entry.target);

                }

            });

        },
        {
            threshold: 0.12
        }
    );

    revealElements.forEach(element => {
        observer.observe(element);
    });


    // ==================================
    // FLOATING HEARTS
    // ==================================

    const heartsContainer = document.getElementById("hearts");

    const reducedMotion = window.matchMedia(
        "(prefers-reduced-motion: reduce)"
    ).matches;

    if (!reducedMotion) {

        const symbols = ["♥", "♡", "✦"];

        function createHeart() {

            const heart = document.createElement("span");

            heart.classList.add("floating-particle");

            heart.textContent =
                symbols[Math.floor(Math.random() * symbols.length)];

            const size = Math.random() * 14 + 10;

            const duration = Math.random() * 7 + 8;

            heart.style.left = Math.random() * 100 + "%";

            heart.style.fontSize = size + "px";

            heart.style.animationDuration = duration + "s";

            heartsContainer.appendChild(heart);

            setTimeout(() => {
                heart.remove();
            }, duration * 1000);

        }

        // Create a new heart every 900ms
        setInterval(createHeart, 900);

    }


    // ==================================
    // VIDEO CONTROLS
    // ==================================

    const video = document.getElementById("esraaVideo");

    if (video) {

        video.addEventListener("play", () => {
            console.log("Esraa's video is playing.");
        });

        video.addEventListener("error", () => {
            console.error("Unable to load the video.");
        });

    }


    // ==================================
    // SMOOTH NAVIGATION
    // ==================================

    document.querySelectorAll('a[href^="#"]').forEach(link => {

        link.addEventListener("click", event => {

            const target = document.querySelector(
                link.getAttribute("href")
            );

            if (target) {

                event.preventDefault();

                target.scrollIntoView({
                    behavior: reducedMotion ? "auto" : "smooth"
                });

            }

        });

    });

});