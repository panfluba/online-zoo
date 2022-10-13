window.onload = function () {
    let catalog = document.getElementById('button_burger_active');
    // let dark_area = document.getElementsById('dark');
    catalog.onclick = function () {
        if (catalog.classList.contains("active")) {
            catalog.classList.remove("active");
        } else {
            catalog.classList.add("active");
            dark.classList.add("active");

        }
    }
}
