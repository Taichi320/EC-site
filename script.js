document.body.addEventListener("click", function() {
  window.location.href = "next.html";
});

function toggleMenu() {
    document.querySelector(".menu").classList.toggle("open");
}

document.addEventListener("DOMContentLoaded", function () {
    const menuIcon = document.getElementById("menuIcon");
    const menu = document.getElementById("menu");

    // メニューボタンをクリックしたときの動作
    menuIcon.addEventListener("click", function () {
        menu.classList.toggle("show"); // メニューを開閉
    });

    // メニューのリンクをクリックしたとき、メニューを閉じる
    document.querySelectorAll(".menu a").forEach(link => {
        link.addEventListener("click", function () {
            menu.classList.remove("show");
        });
    });
});
