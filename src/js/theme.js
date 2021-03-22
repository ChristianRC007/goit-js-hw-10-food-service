const Theme = {
  LIGHT: 'light-theme',
  DARK: 'dark-theme',
};

const checkBox = document.querySelector('.theme-switch__toggle');
const body = document.querySelector('body');
let currentTheme = load('theme');
checkBox.addEventListener('change', toggle);
body.classList.add(Theme.LIGHT);
themeChecker();

function enableDarkTheme() {
  body.classList.remove(Theme.LIGHT);
  body.classList.add(Theme.DARK);
  save('theme', Theme.DARK);
}

function disableDarkTheme() {
  body.classList.remove(Theme.DARK);
  body.classList.add(Theme.LIGHT);
  save('theme', Theme.LIGHT);
  checkBox.checked = false;
}

function toggle() {
  currentTheme = load('theme');
  if (currentTheme !== Theme.DARK) {
    enableDarkTheme();
  } else {
    disableDarkTheme();
  }
}
function themeChecker() {
  if (currentTheme === Theme.DARK) {
    checkBox.checked = true;
    enableDarkTheme();
  }
}

function load(key) {
  try {
    return localStorage.getItem(key);
  } catch (err) {
    console.error('Get state error: ', err);
  }
}

function save(key, value) {
  try {
    localStorage.setItem(key, value);
  } catch (err) {
    console.error('Set state error: ', err);
  }
}