let elBurger = document.querySelector('.header__burger-menu');
let elHeader = document.querySelector('.header');
elBurger.addEventListener('click', function (params) {
    params.preventDefault();
    elHeader.classList.toggle('open');
})