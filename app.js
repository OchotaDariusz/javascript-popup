const form = document.querySelector('.form');
const firstInput = document.querySelector('#input1');
const secondInput = document.querySelector('#input2');
const close = document.querySelector('.close');
const popup = document.querySelector('.popup');
const paras = document.querySelectorAll('p');

form.addEventListener('submit', event => {
    event.preventDefault();
    console.log(form.input1.value);
    alert(`1st: ${firstInput.value}`);
    alert(`2nd: ${secondInput.value}`);
    firstInput.value = '';
    secondInput.value = '';
});

form.addEventListener('click', event => {
    event.stopPropagation();
});

close.addEventListener('click', () => {
    closePopup();
});

popup.addEventListener('click', () => {
    closePopup();
});

const closePopup = () => {
    popup.style.display = 'none';
}

const showPopup = () => {
    popup.style.display = 'flex';
}

paras.forEach(item => {
    item.addEventListener('click', showPopup);
});
