function login(event) {
  event.preventDefault();
  const username = document.getElementById("username").value;
  const password = document.getElementById("password").value;

  if (username === "admin" && password === "123456") {
    window.location.href = "dashboard.html";
  } else {
    alert("Sai tên đăng nhập hoặc mật khẩu!");
  }
}