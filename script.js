// Feather Icons
feather.replace();

const toggleBtn = document.getElementById("menu");
const hamburger = document.querySelector(".hamburger-menu");

function toggleButton() {
  toggleBtn.classList.toggle("active");
}

document.addEventListener("click", function (event) {
  const isClickInsideMenu = toggleBtn.contains(event.target);
  const isClickOnHamburger = hamburger.contains(event.target);

  if (!isClickInsideMenu && !isClickOnHamburger) {
    toggleBtn.classList.remove("active");
  }
});

const teks = document.querySelector(".maulid");
let pos = 0;

function gradientBackground() {
  pos += 0.5; // gerak setiap frame

  if (pos >= 400) pos = 0; // reset kalau sudah lewat batas

  // ubah posisi background
  teks.style.backgroundPosition = `${pos}% 50%`;

  requestAnimationFrame(gradientBackground);
  
}

gradientBackground();

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

document.querySelectorAll(".isian").forEach(el => observer.observe(el));

