document.addEventListener("DOMContentLoaded", function () {
    const isHomePage = document.body.id === "home";
    const navLinks = document.querySelectorAll(".nav-link");

    navLinks.forEach(link => {
        const target = link.getAttribute("data-target");
        if (target) {
            if (isHomePage) {
                link.setAttribute("href", target);
            } else {
                link.setAttribute("href", `https://tofuconf.com${target}`);
            }
        }

        // Añadir evento de clic para cerrar el menú en el modo móvil
        link.addEventListener('click', function() {
            if (window.innerWidth <= 768) {
                navItems.style.display = 'none';
            }
        });
    });

    // Script para transición suave en la navegación de la home
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            const href = this.getAttribute('href');
            if (href && href.startsWith('#')) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    targetElement.scrollIntoView({
                        behavior: 'smooth'
                    });
                }
            }
        });
    });

    // Script para el icono de menú
    const menuIcon = document.querySelector('.menu-icon');
    const navItems = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
    });
});