document.addEventListener("DOMContentLoaded", () => {
    //// ACCORDION FUNCTION ////
    const headers = document.querySelectorAll(".edu-card-header");

    function toggleAccordion() {
        const card = this.parentElement;
        const content = card.querySelector('.edu-card-desc');
        const isOpen = card.classList.contains("open-accordion");
        const focusableElement = content.querySelectorAll('a, button, [tabindex]:not([tabindex="-1"])');

        if (isOpen) {
            // closing accordion
            card.classList.remove("open-accordion");
            this.setAttribute("aria-expanded", "false");

            // hide accordion content from screen readers/tab order
            content.setAttribute("aria-hidden", "true");
            focusableElement.forEach(element => {
                element.setAttribute("tabindex", "-1");
            });
        } else {
            // opening accordion
            card.classList.add("open-accordion");
            this.setAttribute("aria-expanded", "true");

            // show accordion content to screen readers/tab order
            content.setAttribute("aria-hidden", "false");
            focusableElement.forEach(element => {
                if (element.hasAttribute("data-original-tabindex")) {
                    element.setAttribute("tabindex", element.getAttribute("data-original-tabindex"));
                } else {
                    element.removeAttribute("tabindex");
                }
            });
        }
    }

    // accordion accessibility 
    headers.forEach(header => {
        header.addEventListener('click', toggleAccordion);
        header.addEventListener('keydown', function(event) {
            if (event.key === 'Enter' || event.key === ' ') {
                event.preventDefault();
                toggleAccordion.call(this);
            }
        });
    });
});