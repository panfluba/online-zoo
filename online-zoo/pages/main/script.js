let dark_area = document.getElementsByClassName('dark');

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
// window.onload = function () {
//     let catalog = document.getElementById('button_burger_active');
//     catalog.onclick = function () {
//         if (catalog.classList.contains("active")) {
//             // dark_area.classList.add("active");
//             catalog.classList.remove("active");
//         } else {
//             catalog.classList.add("active");

//         }
//     }

// }

// window.onload = function () {
//     let catalog = document.getElementById('button_burger_active');
//     catalog.onclick = function () {
//         if (catalog.classList.contains("active")) {
//             catalog.classList.remove("active");
//         } else {
//             catalog.classList.add("active");
//         }
//     }
// }





// window.onload = function () {
//     let catalog = document.getElementById('button_burger_active');
//     catalog.onclick = function () {
//         if (catalog.classList.contains("active")) {
//             catalog.classList.remove("active");
//         } else {
//             catalog.classList.add("active");
//         }
//     }
// }
