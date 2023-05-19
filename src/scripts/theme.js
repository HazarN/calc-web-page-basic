const lightPath = '../src/styles/light.css';
const darkPath  = '../src/styles/dark.css';

// Theme switcher event handler for light and dark mode
function switchTheme() {
    const theme = document.querySelector('#themeRef');
    const icon  = document.querySelector('#theme');

    if (theme.getAttribute('href') == lightPath) {
        theme.href = darkPath;

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        theme.href = lightPath;

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

const themeSwitcher = document.querySelector('.fa-arrow-rotate-right');
themeSwitcher.addEventListener('click', switchTheme);