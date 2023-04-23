const header = document.querySelector('header');
const bar = document.querySelector('.toggle__btn-bar');
const barX = document.querySelector('.toggle__btn-x');
const drop = document.querySelector('.menu__dropdown');

window.addEventListener('scroll', () => {

    header.classList.toggle("resp", window.scrollY > 2)
});


bar.onclick = function () {
    bar.classList.toggle('dis-none');
    barX.classList.toggle('dis-block');
    drop.classList.toggle('dis-grid');
    
};

barX.onclick = function ( ) {
    bar.classList.remove('dis-none');   
    barX.classList.remove('dis-block');
    drop.classList.remove('dis-grid');
};

 