const divElements = document.querySelectorAll('body div');

function getRandomNumber(max) {
    return Math.floor(Math.random() * max);
}

const divClickHandler = (event) => {
    event.target.style.backgroundColor = `rgb(${getRandomNumber(256)}, ${getRandomNumber(256)}, ${getRandomNumber(256)})`;
}

divElements.forEach(element => {
    element.addEventListener('click', divClickHandler);
});