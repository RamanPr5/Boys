let name = prompt('Your name?');


const buttonElem = document.querySelector('.box-2');
const modalElem = document.querySelector('.modal');
const modalTitle = document.querySelector('.modal-title');

modalElem.style.cssText = `
display: flex;
visibility: hidden;
opacity: 0;
transition: opacity 300ms easy-in-out;
`;

const closeModal = event => {
    const target = event.target;

    if (target === modalElem || target.closest('.modal-close')) {
        modalElem.style.opacity = 0;

        setTimeout(() =>{
            modalElem.style.visibility = 'hidden';
        }, 300)
    }
}

let openModal = () => {
    modalElem.style.visibility = 'visible';
    modalElem.style.opacity = 1;
    modalTitle.textContent = `Ну ты и пидор ${name}`;
};

buttonElem.addEventListener('click', openModal);
modalElem.addEventListener('click', closeModal);



const audio = new Audio("https://www.fesliyanstudios.com/play-mp3/6619");
const buttons = document.querySelectorAll(".box-2");

buttons.forEach(button => {
  button.addEventListener("click", () => {
  audio.play();
  });
});

// https://www.fesliyanstudios.com/play-mp3/6619

// https://www.fesliyanstudios.com/play-mp3/6512