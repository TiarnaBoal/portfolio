// burger menu script
document.addEventListener("DOMContentLoaded", function () {
    const burgerMenu = document.getElementById("burger-menu");
    const menu = document.getElementById("menu");

    burgerMenu.addEventListener("click", function () {
        // Toggle the menu visibility and the sliding effect
        if (menu.style.right === "0px") {
            menu.style.right = "-300px"; // Slide the menu out of view
        } else {
            menu.style.display = "block"; // Show the menu
            setTimeout(function() {
                menu.style.right = "0"; // Slide it in after it's visible
            }, 10); // Delay to allow display to take effect
        }

        // Toggle the burger menu animation
        burgerMenu.classList.toggle("change");
    });
});
// end burger menu script