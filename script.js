/* =========================================================
   MENÚ MÓVIL
========================================================= */

const menuToggle = document.getElementById("menuToggle");
const mainNav = document.getElementById("mainNav");

if (menuToggle && mainNav) {

    menuToggle.addEventListener("click", () => {

        mainNav.classList.toggle("active");

    });

}


/* =========================================================
   CERRAR MENÚ AL SELECCIONAR UNA OPCIÓN
========================================================= */

document.querySelectorAll(".nav a").forEach(link => {

    link.addEventListener("click", () => {

        if (mainNav) {

            mainNav.classList.remove("active");

        }

    });

});


/* =========================================================
   AÑO AUTOMÁTICO DEL FOOTER
========================================================= */

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


/* =========================================================
   ANIMACIONES AL HACER SCROLL
========================================================= */

const revealElements =
    document.querySelectorAll(
        ".skill-card, " +
        ".project-card, " +
        ".timeline-item, " +
        ".tool-group, " +
        ".book-card, " +
        ".gallery-card, " +
        ".education-card, " +
        ".about-card"
    );


if ("IntersectionObserver" in window) {

    const observer =
        new IntersectionObserver(
            entries => {

                entries.forEach(entry => {

                    if (entry.isIntersecting) {

                        entry.target.classList.add(
                            "reveal",
                            "visible"
                        );

                        observer.unobserve(
                            entry.target
                        );

                    }

                });

            },
            {
                threshold: 0.12
            }
        );


    revealElements.forEach(element => {

        element.classList.add("reveal");

        observer.observe(element);

    });

} else {

    revealElements.forEach(element => {

        element.classList.add(
            "reveal",
            "visible"
        );

    });

}
