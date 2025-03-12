// 画面全体のクリックで next.html へ遷移（トップページで動作）
document.body.addEventListener("click", function() {
    if (!event.target.closest(".menu-icon") && !event.target.closest(".menu")) {
        window.location.href = "next.html";
    }
});

// ハンバーガーメニューの開閉
function toggleMenu() {
    let menu = document.querySelector(".menu");
    let menuIcon = document.querySelector(".menu-icon");

    menu.classList.toggle("open");
    menuIcon.classList.toggle("open");
}
