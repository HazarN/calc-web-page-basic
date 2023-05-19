// Theme switcher event handler for light and dark mode
function switchTheme() {
    const theme = document.querySelector('#themeRef');
    const icon  = document.querySelector('#theme');

    if (theme.getAttribute('href') == 'light.css') {
        theme.href = 'dark.css';

        icon.classList.remove('fa-sun');
        icon.classList.add('fa-moon');
    } else {
        theme.href = 'light.css';

        icon.classList.remove('fa-moon');
        icon.classList.add('fa-sun');
    }
}

const themeSwitcher = document.querySelector('.fa-arrow-rotate-right');
themeSwitcher.addEventListener('click', switchTheme);