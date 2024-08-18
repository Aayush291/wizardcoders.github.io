const buttons = document.querySelectorAll('.side-bar a');
const sections = document.querySelectorAll('.section');

const handleButtonClick = (event) => {
    buttons.forEach(button => button.classList.remove('active'));
    sections.forEach(section => section.classList.remove('active'));
    
    event.currentTarget.classList.add('active');
    
    const targetId = event.currentTarget.getAttribute('href').substring(1);
    document.getElementById(targetId).classList.add('active');
};

const homeButton = document.querySelector('.home');
homeButton.classList.add('active');
document.getElementById('home').classList.add('active');

buttons.forEach(button => button.addEventListener('click', handleButtonClick));