// script.js

// Gambar preview saat klik galeri
function previewImage(src) {
  const preview = document.getElementById("mainPreview");
  preview.style.opacity = 0;
  setTimeout(() => {
    preview.src = src;
    preview.style.opacity = 1;
  }, 200);
}

// WhatsApp order form
const orderForm = document.getElementById("orderForm");
orderForm.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = document.getElementById("name").value.trim();
  const phone = document.getElementById("phone").value.trim();
  const address = document.getElementById("address").value.trim();
  const product = document.getElementById("product").value;
  const jumlah = document.getElementById("jumlah").value;
  const metode = document.getElementById("metode").value;
  const tanggal = document.getElementById("tanggal").value;
  const note = document.getElementById("note").value;

  const pesan = `Halo admin, saya ingin pesan buket:\n\n📌 Nama: ${name}\n📱 WhatsApp: ${phone}\n🏠 Alamat: ${address}\n💐 Produk: ${product}\n🔢 Jumlah: ${jumlah}\n🚚 Pengiriman: ${metode}\n📅 Tanggal Kirim: ${tanggal || '-'}\n📝 Catatan: ${note || '-'}`;

  const waLink = `https://wa.me/6288287956222?text=${encodeURIComponent(pesan)}`;
  window.open(waLink, "_blank");
});

// Smooth scroll ke section
const navLinks = document.querySelectorAll("nav a");
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const section = document.getElementById(targetId);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  });
});

// Animasi fade-in saat scroll
const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
      observer.unobserve(entry.target);
    }
  });
}, { threshold: 0.1 });

document.querySelectorAll(".fade-in").forEach(el => observer.observe(el));

// Tombol WhatsApp animasi klik
const btn = document.querySelector("button");
btn.addEventListener("mousedown", () => btn.style.transform = "scale(0.97)");
btn.addEventListener("mouseup", () => btn.style.transform = "scale(1)");

// Toggle menu responsif
const menuToggle = document.getElementById("mobile-menu");
menuToggle.addEventListener("click", () => {
  const navLinks = document.querySelector(".nav-links");
  navLinks.classList.toggle("active");
});

function openSidebar() {
  document.getElementById("sidebar").style.width = "250px";
}

function closeSidebar() {
  document.getElementById("sidebar").style.width = "0";
}
