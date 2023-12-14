document.addEventListener('DOMContentLoaded', () => {
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({
                    behavior: 'smooth'
                });
            }
        });
    });
    const menuIcon = document.querySelector('.menu-icon');
    const navItems = document.querySelector('nav ul');

    menuIcon.addEventListener('click', () => {
        navItems.style.display = navItems.style.display === 'block' ? 'none' : 'block';
    });
});
