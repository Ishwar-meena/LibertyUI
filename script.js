const leftBtn = document.querySelector('.scroll-btn.left');
const rightBtn = document.querySelector('.scroll-btn.right');
const collectBoxes = document.querySelector('.collect-boxes');

leftBtn.addEventListener('click', () => {
    collectBoxes.scrollBy({ left: -300, behavior: 'smooth' });
});

rightBtn.addEventListener('click', () => {
    collectBoxes.scrollBy({ left: 300, behavior: 'smooth' });
});
