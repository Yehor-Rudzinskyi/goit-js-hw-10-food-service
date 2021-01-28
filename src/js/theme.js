const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const { LIGHT, DARK } = Theme;

const themeRef = document.querySelector('.theme-switch__toggle');
const bodyRef = document.querySelector('body');

let storageIn = localStorage.getItem('theme');

switch (storageIn) {
    case null:
         bodyRef.classList.add('light-theme')
        localStorage.setItem('theme', `${LIGHT}`)
        break;
    case 'light-theme':
              bodyRef.classList.add('light-theme')

        break;
        case 'dark-theme':
            bodyRef.classList.add('dark-theme')
            themeRef.setAttribute('checked', true) 
            break;
            }
            
themeRef.addEventListener('change', event => {
    const cheker = event.target.checked;
    switch (cheker) {
        case true:
             themeRef.setAttribute('checked', true) 
            bodyRef.classList.replace('light-theme', 'dark-theme')
            localStorage.setItem('theme', `${DARK}`)
                break;
        case false:
             themeRef.setAttribute('checked', false)
            bodyRef.classList.replace('dark-theme','light-theme')
            localStorage.setItem('theme', `${LIGHT}`)
            break;
    }
});

//     if (cheker) {
//          themeRef.setAttribute('checked', true) 
//     bodyRef.classList.add('dark-theme')
//     localStorage.setItem('theme', `${DARK}`)
//     } else {
//     themeRef.setAttribute('checked', false)
//     bodyRef.classList.add('light-theme')
//     localStorage.setItem('theme', `${LIGHT}`)
// }





// if (localStorage.getItem('settings')) {
//     let settings = localStorage.getItem('settings');
//     bodyRef.classList.add(settings)
//     if (settings === 'dark-theme') {
//         themeRef.checked = true;
//     }
// };

// themeRef.addEventListener('change', function () {
//     bodyRef.className = '';
//     if (this.checked) {
//         bodyRef.classList.add(Theme.DARK);
//         localStorage.setItem('settings', Theme.DARK)
//     } else {
//         bodyRef.classList.add(Theme.LIGHT);
//         localStorage.setItem('settings', Theme.LIGHT)
//     }
// });
