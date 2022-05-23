const button = document.querySelector('button');
const popup = document.querySelector('.popup-wrapper');
const close = document.querySelector('.popup-close');
const popupContent = document.querySelector('.popup-content');

const hidePopup = () => {
    popup.style.display = 'none';
}

button.addEventListener('click', () => {
    popup.style.display = 'block';
    popup.classList.add('fade-in')
    popup.classList.remove('fade-out')
});

close.addEventListener('click', () => {
    popup.classList.remove('fade-in')
    popup.classList.add('fade-out')
    setTimeout(hidePopup, 500);
});

popup.addEventListener('click', () => {
    popup.classList.remove('fade-in')
    popup.classList.add('fade-out')
    setTimeout(hidePopup, 500);
});

popupContent.addEventListener('click', event => {
    event.stopPropagation();
});