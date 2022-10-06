window.onload = function () {
    let catalog = document.getElementById('button_burger_active');
    catalog.onclick = function () {
        if (catalog.classList.contains("active")) {
            catalog.classList.remove("active");
        } else {
            catalog.classList.add("active");
        }
    }
}
