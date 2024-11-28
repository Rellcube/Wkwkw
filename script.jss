// scripts.js

// Logging untuk interaksi pengguna
document.querySelectorAll('.social-media-list a').forEach((link) => {
    link.addEventListener('click', () => {
        console.log(`Navigasi ke: ${link.textContent}`);
    });
});

console.log("Halaman dengan animasi siap digunakan!");