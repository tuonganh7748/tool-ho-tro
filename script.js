// Xử lý login
document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("loginForm");
  if (form) {
    form.addEventListener("submit", (e) => {
      e.preventDefault();
      const user = document.getElementById("username").value;
      const pass = document.getElementById("password").value;
      if (user === "admin" && pass === "1234") {
        window.location.href = "dashboard.html";
      } else {
        document.getElementById("error").textContent = "Sai mật khẩu";
      }
    });
  }

  // Sidebar toggle
  const menuToggle = document.getElementById("menuToggle");
  const sidebar = document.getElementById("sidebar");
  const closeBtn = document.getElementById("closeBtn");

  if (menuToggle) {
    menuToggle.addEventListener("click", () => {
      sidebar.style.left = "0";
    });
  }
  if (closeBtn) {
    closeBtn.addEventListener("click", () => {
      sidebar.style.left = "-250px";
    });
  }

  // Submenu toggle
  document.querySelectorAll(".has-sub > a").forEach(item => {
    item.addEventListener("click", (e) => {
      e.preventDefault();
      item.parentElement.classList.toggle("active");
    });
  });
});