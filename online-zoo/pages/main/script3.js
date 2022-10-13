const testimonialsContainer = document.querySelector('.testi_container');
const card = document.querySelector('.testi_border');
const scrollBar = document.querySelector('.input_range');

    if (screen.width > '980') {

    scrollBar.addEventListener('input', function () {
        let cardWidth = card.offsetWidth;
        console.log(cardWidth);
        testimonialsContainer.style.right = `${scrollBar.value * (cardWidth - 85)}px`;
    })
    }    

 