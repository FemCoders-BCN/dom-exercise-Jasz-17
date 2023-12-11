
/*  Función para cambiar color e imagen del coche */
function changeCarProperties(button, tag, image, color, imageUrl) {
    button.style.backgroundColor = color;
    tag.style.backgroundColor = color;
    image.style.backgroundImage = `url("${imageUrl}")`;
}

const redColor = document.querySelector('.red');
const grayColor = document.querySelector('.gray');
const blackColor = document.querySelector('.black');

const carButton = document.getElementById('button');
const tagName = document.querySelector('h3');
const imageCard = document.querySelector('.product-image');

redColor.addEventListener('click', () => {
    changeCarProperties(carButton, tagName, imageCard, 'red', '../../public/img/redcar.jpg');
});

grayColor.addEventListener('click', () => {
    changeCarProperties(carButton, tagName, imageCard, 'gray', '../../public/img/graycar.jpg');
});

blackColor.addEventListener('click', () => {
    changeCarProperties(carButton, tagName, imageCard, 'black', '../../public/img/blackcar.jpg');
});