document.addEventListener("DOMContentLoaded", () => {
    
//// BURGER MENU FUNCTION ////
    const menuIcon = document.getElementById('menu-icon');
    const navMenu = document.getElementById('nav-menu');
    const navLinks = navMenu.querySelectorAll('a');
    const body = document.body;
    const overlay = document.getElementById('overlay');

    function toggleMenu() {
        navMenu.classList.toggle('open');
        menuIcon.classList.toggle('change');
        body.classList.toggle('no-scroll');
        overlay.classList.toggle('active');

        // update aria-expanded attribute
        const expanded = menuIcon.getAttribute('aria-expanded') === 'true';
        menuIcon.setAttribute('aria-expanded', String(!expanded));
    }

    // toggleMenu function on click
    menuIcon.addEventListener('click', toggleMenu);

    // toggleMenu function for keyboard functionality
    menuIcon.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            toggleMenu();
        }
    });

    // close menu when nav-link is clicked
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            if (navMenu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });

    // close menu when overlay is clicked
    overlay.addEventListener('click', () => toggleMenu(true));


//// ACCORDION FUNCTION ////
    const headers = document.querySelectorAll(".edu-card-header");

    function toggleAccordion() {
        const card = this.parentElement;
        const openAccordion = card.classList.contains("open-accordion");

        card.classList.toggle("open-accordion", !openAccordion);

        this.setAttribute("aria-expanded", !openAccordion);
    }

    headers.forEach(function(header) {
        header.addEventListener('click', toggleAccordion);

        header.addEventListener('keydown', function(e) {
            if (e.key === 'Enter' || e.key === ' ') {
                e.preventDefault();
                toggleAccordion.call(this);
            }
        });
    });
});