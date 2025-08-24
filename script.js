
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const error = document.getElementById('error');

    if (username === 'admin' && password === '1234') {
        document.getElementById('loginPage').style.display = 'none';
        document.getElementById('mainPage').style.display = 'block';
    } else {
        error.textContent = 'Sai mật khẩu';
    }
}

function toggleMenu() {
    const menu = document.getElementById('sideMenu');
    menu.classList.toggle('open');
}
