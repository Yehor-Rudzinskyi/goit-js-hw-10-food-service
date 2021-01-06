const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const themeRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

if (localStorage.getItem('settings')) {
    let settings = localStorage.getItem('settings');
    bodyRef.classList.add(settings)
    if (settings === 'dark-theme') {
        themeRef.checked = true;
    }
};

themeRef.addEventListener('change', function () {
    bodyRef.className = '';
    if (this.checked) {
        bodyRef.classList.add(Theme.DARK);
        localStorage.setItem('settings', Theme.DARK)
    } else {
        bodyRef.classList.add(Theme.LIGHT);
        localStorage.setItem('settings', Theme.LIGHT)
    }
});
