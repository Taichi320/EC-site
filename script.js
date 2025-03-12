document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("show");
    });

    document.addEventListener("click", function (event) {
        if (!menu.contains(event.target) && event.target !== menuIcon) {
            menu.classList.remove("show");
        }
    });
});
