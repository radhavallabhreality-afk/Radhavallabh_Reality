/*=========================================
    RADHAVALLABH REALITY
    MAIN WEBSITE SCRIPT
=========================================*/

document.addEventListener("DOMContentLoaded", function () {

    /*==============================
        Sticky Navbar
    ==============================*/

    const header = document.querySelector("header");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 80) {

            header.style.boxShadow = "0 10px 30px rgba(0,0,0,.12)";
            header.style.background = "#ffffff";

        } else {

            header.style.boxShadow = "none";
            header.style.background = "rgba(255,255,255,.95)";

        }

    });

    /*==============================
        Smooth Scroll
    ==============================*/

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {

        anchor.addEventListener("click", function (e) {

            e.preventDefault();

            const target = document.querySelector(this.getAttribute("href"));

            if (target) {

                target.scrollIntoView({

                    behavior: "smooth"

                });

            }

        });

    });

    /*==============================
        Gallery Hover Animation
    ==============================*/

    document.querySelectorAll(".gallery-item").forEach(item => {

        item.addEventListener("mouseenter", () => {

            item.style.transform = "translateY(-8px)";

        });

        item.addEventListener("mouseleave", () => {

            item.style.transform = "translateY(0px)";

        });

    });

    /*==============================
        Counter Animation
    ==============================*/

    function counter(id, target) {

        const element = document.getElementById(id);

        if (!element) return;

        let value = 0;

        const step = Math.ceil(target / 100);

        const timer = setInterval(() => {

            value += step;

            if (value >= target) {

                value = target;

                clearInterval(timer);

            }

            element.innerText = value + "+";

        }, 20);

    }

    counter("projectCount", 25);
    counter("familyCount", 500);
    counter("experienceCount", 10);
    counter("locationCount", 15);

    /*==============================
        Reveal Animation
    ==============================*/

    const revealItems = document.querySelectorAll(
        ".about, .projects, .why-us, .amenities, .gallery"
    );

    const reveal = () => {

        revealItems.forEach(item => {

            const top = item.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                item.classList.add("show");

            }

        });

    };

    window.addEventListener("scroll", reveal);

    reveal();

    /*==============================
        Back To Top Button
    ==============================*/

    const topBtn = document.getElementById("topBtn");

    if (topBtn) {

        window.addEventListener("scroll", () => {

            if (window.scrollY > 300) {

                topBtn.style.display = "flex";

            } else {

                topBtn.style.display = "none";

            }

        });

        topBtn.addEventListener("click", () => {

            window.scrollTo({

                top: 0,

                behavior: "smooth"

            });

        });

    }

});
