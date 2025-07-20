// main.js

document.addEventListener("DOMContentLoaded", () => {
  console.log("📦 Website portfolio siap digunakan!");

  // Highlight link aktif (opsional, jika belum pakai class="active" manual)
  const currentPage = window.location.pathname.split("/").pop();
  document.querySelectorAll("nav a").forEach(link => {
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });

  // Placeholder untuk animasi scroll, atau interaksi lainnya
  // Misal: reveal on scroll, dark mode toggle, dll

  // Example scroll-to-top button (tambahkan tombol di HTML jika ingin aktif)
  /*
  const scrollBtn = document.getElementById("scrollToTop");
  window.addEventListener("scroll", () => {
    if (window.scrollY > 300) {
      scrollBtn.style.display = "block";
    } else {
      scrollBtn.style.display = "none";
    }
  });
  scrollBtn.addEventListener("click", () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  });
  */
});
