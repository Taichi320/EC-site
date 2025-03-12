// トップページ（index.html）で画面タップ時に next.html へ遷移
document.body.addEventListener("click", function(event) {
    // メニューアイコンやメニューをクリックした場合は遷移しない
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
