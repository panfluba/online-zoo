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

    let animalCards = [
        {
            title: 'Giant pandas',
            subtitle: 'Native to Southwest China',
            img: '../../assets/images/panda.png',
            icon: '../../assets/icons/bananabamboo.svg"',
        },
        {
            title: 'Eagles',
            subtitle: 'Native to South America',
            img: '../../assets/images/eagle.png',
            icon: '../../assets/icons/meet-fish_icon.svg',
        },
        {
            title: 'Gorillas',
            subtitle: 'Native to Congo',
            img: '../../assets/images/gorilla.png',
            icon: '../../assets/icons/bananabamboo.svg"',
        },
        {
            title: 'Two-toed Sloth',
            subtitle: 'Mesoamerica, South America',
            img: '../../assets/images/sloth.png',
            icon: '../../assets/icons/bananabamboo.svg"',
        },
        {
            title: 'Cheetahs',
            subtitle: 'Native to Africa',
            img: '../../assets/images/cheetah.png',
            icon: '../../assets/icons/meet-fish_icon.svg',
        },
        {
            title: 'Penguins',
            subtitle: 'Native to Antarctica',
            img: '../../assets/images/penguin.png',
            icon: '../../assets/icons/meet-fish_icon.svg',
        },
    
    ];
    
    
    const cardsContainer = document.querySelector('.album');
    const arrowLeft = document.querySelector('.buttonArrowLeft');
    const arrowRight = document.querySelector('.buttonArrowRight');
    let imgCount = 6;
    if (screen.width < '980') { imgCount = 4 }
    function randomCards(imgCount) {
        animalCards = animalCards.sort(() => Math.random() - 0.5).slice(0, imgCount);
        return animalCards;
    }
    
    function createCards() {
        cardsContainer.innerHTML = '';
        randomCards()
        animalCards.forEach(el => {
            cardsContainer.innerHTML +=
                `<div class="collage">
                    <div class="collage_img">
                        <img src="${el.img}">
                    </div>
                    <div class="inCollage">
                        <div class="inCollageText">
                            <p class="animals">${el.title}</p>
                            <p class="subtext_animals">${el.subtitle}</p>
                        </div>
                        <div class="iconInCollage">
                            <img src="${el.icon}" alt="food icon">
                        </div>
                    </div>
                </div>`
        });
    
    }
    createCards()
    
    arrowLeft.addEventListener('click', createCards)
    arrowRight.addEventListener('click', createCards)
    
    