const modal = document.querySelector('.modal');
const overlay = document.querySelector('.overlay');

// open modal function
const openModal = () => {
    console.log('Modal is open');
    modal.classList.add('active');
    overlay.classList.add('overlayactive');
}

const closeModal = () => {
    console.log('Modal is open');
    modal.classList.remove('active');
    overlay.classList.remove('overlayactive');
} 