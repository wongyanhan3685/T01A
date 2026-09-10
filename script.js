function goHome() {
  window.location.href = "index.html";
}

// Highlight active page dynamically
document.addEventListener("DOMContentLoaded", () => {
  const links = document.querySelectorAll("nav ul li a");
  links.forEach(link => {
    if (link.href === window.location.href) {
      link.classList.add("active");
    }
  });
});
