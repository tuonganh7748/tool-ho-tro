function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  if (sidebar.style.width === "250px") {
    sidebar.style.width = "0";
  } else {
    sidebar.style.width = "250px";
  }
}

// Dropdown trong sidebar
document.querySelectorAll(".dropdown-btn").forEach(function(btn) {
  btn.addEventListener("click", function() {
    this.classList.toggle("active");
    var container = this.nextElementSibling;
    if (container.style.display === "block") {
      container.style.display = "none";
    } else {
      container.style.display = "block";
    }
  });
});

// Dropdown ở giữa màn hình
document.querySelectorAll(".dropdown-toggle").forEach(function(btn) {
  btn.addEventListener("click", function() {
    var menu = this.nextElementSibling;
    menu.style.display = (menu.style.display === "block") ? "none" : "block";
  });
});

// Login form
document.getElementById("loginForm")?.addEventListener("submit", function(e) {
  e.preventDefault();
  const user = document.getElementById("username").value;
  const pass = document.getElementById("password").value;
  if (user === "admin" && pass === "1234") {
    window.location.href = "dashboard.html";
  } else {
    alert("Sai tài khoản hoặc mật khẩu!");
  }
});