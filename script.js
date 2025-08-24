
function login() {
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    const errorMsg = document.getElementById('error-message');

    if (username === 'admin' && password === '1234') {
        document.getElementById('login-page').style.display = 'none';
        document.getElementById('main-page').classList.remove('hidden');
    } else {
        errorMsg.textContent = 'Sai mật khẩu';
    }
}

function openMenu() {
    document.getElementById('sidebar').classList.add('active');
}

function closeMenu() {
    document.getElementById('sidebar').classList.remove('active');
}
