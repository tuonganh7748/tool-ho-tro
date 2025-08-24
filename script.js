document.addEventListener("DOMContentLoaded", function () {
    const loginForm = document.getElementById("login-form");

    if (loginForm) {
        loginForm.addEventListener("submit", function (e) {
            e.preventDefault();

            const username = document.getElementById("username").value.trim();
            const password = document.getElementById("password").value.trim();

            if (username === "admin" && password === "123456") {
                alert("Đăng nhập thành công!");
                window.location.href = "dashboard.html";
            } else {
                alert("Sai tên đăng nhập hoặc mật khẩu. Vui lòng thử lại.");
            }
        });
    }
});
