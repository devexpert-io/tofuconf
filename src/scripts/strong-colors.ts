const colors = [
    '--brand-primary-300',
    '--brand-primary-500',
    '--brand-secondary-300',
    '--brand-secondary-500',
    '--brand-tertiary-400',
    '--brand-quaternary-200',
    '--brand-quaternary-500'
];

function getRandomColor() {
    const randomIndex = Math.floor(Math.random() * colors.length);
    return colors[randomIndex];
}

// Selecciona todos los elementos <strong> y les asigna un color aleatorio
window.onload = function() {
    const strongElements = document.querySelectorAll('strong');
    strongElements.forEach((element) => {
        const color = getRandomColor();
        element.style.color = `var(${color})`;
    });
};