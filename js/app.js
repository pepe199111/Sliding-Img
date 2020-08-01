import '../sass/style.scss';

document.addEventListener('DOMContentLoaded', () => {

    const imagesContainerEl = document.querySelector('.slider__images-container');
    const img1EL = document.querySelector('.slider__image-container--first img');
    const img2EL = document.querySelector('.slider__image-container--second img');

    function adjustImagesSize() {
        const imagesContainerWidth = imagesContainerEl.offsetWidth;
        img1EL.style.width = imagesContainerWidth + 'px';
        img2EL.style.width = imagesContainerWidth + 'px';
    }

    window.addEventListener('resize', () => {
        adjustImagesSize();
    });


});