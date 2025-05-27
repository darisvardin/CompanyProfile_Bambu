// Fungsi untuk menangani scroll pada tombol WhatsApp
document.addEventListener("scroll", function() {
    const btnWa = document.querySelector(".btn-wa");
    const scrollY = window.scrollY;

    if (scrollY > 50) {
        btnWa.style.bottom = "20px"; // Saat scroll ke bawah, posisinya normal
    } else {
        btnWa.style.bottom = "20px"; // Saat di atas, lebih tinggi agar tidak terlalu bawah
    }
});

// Fungsi untuk membuka chat WhatsApp // Variabel untuk Nomor WhatsApp
   // Variabel untuk Nomor WhatsApp
    const waNumber = "6289699366574"; // Ganti dengan nomor WhatsApp Anda
    
    // Pesan default
    const waMessage = "Halo, saya tertarik dengan jasa Cahaya Bambu Nusantara.";

    // Format URL WhatsApp
    const waUrl = `https://wa.me/${waNumber}?text=${encodeURIComponent(waMessage)}`;

    // Ambil semua tombol dengan class 'waButton'
    document.querySelectorAll(".waButton").forEach(button => {
        button.href = waUrl;
        button.setAttribute("target", "_blank"); // Buka di jendela baru
        button.setAttribute("rel", "noopener noreferrer"); // Keamanan tambahan
    });


// Banner dan FAQ - Atur tinggi banner saat FAQ dibuka/tutup
document.addEventListener("DOMContentLoaded", function() {
    const banner = document.getElementById("banner");
    const collapses = document.querySelectorAll(".collapse");
    const faqButtons = document.querySelectorAll(".faq-question");

    // Atur tinggi awal saat halaman dimuat
    adjustBannerHeight();

    faqButtons.forEach(button => {
        const icon = button.querySelector("i"); // Ambil ikon dalam tombol
        const targetId = button.getAttribute("data-bs-target"); // ID elemen collapse
        const targetElement = document.querySelector(targetId); // Elemen collapse

        // Event listener untuk perubahan ikon setelah animasi selesai
        targetElement.addEventListener("shown.bs.collapse", function() {
            icon.classList.replace("bi-caret-right-fill", "bi-caret-down-fill"); // Ubah ikon hanya pada yang diklik
            adjustBannerHeight();
        });

        targetElement.addEventListener("hidden.bs.collapse", function() {
            icon.classList.replace("bi-caret-down-fill", "bi-caret-right-fill"); // Kembalikan ikon hanya pada yang diklik
            adjustBannerHeight();
        });
    });

    // Event listener untuk menyesuaikan tinggi banner saat FAQ dibuka/tutup
    collapses.forEach(collapse => {
        collapse.addEventListener("shown.bs.collapse", adjustBannerHeight);
        collapse.addEventListener("hidden.bs.collapse", adjustBannerHeight);
    });

    // Fungsi untuk menyesuaikan tinggi banner
    function adjustBannerHeight() {
        requestAnimationFrame(() => {
            let contentHeight = document.querySelector("#banner .container").scrollHeight; // Ambil tinggi konten
            banner.style.height = (contentHeight + 40) + "px"; // Tambahkan padding agar tidak terlalu ketat
        });
    }
});

// Slide gambar otomatis
let currentSlide = 0;
const slides = document.querySelectorAll('.slide');
const slideCount = slides.length;

function nextSlide() {
    slides[currentSlide].style.opacity = 0;
    currentSlide = (currentSlide + 1) % slideCount;
    slides[currentSlide].style.opacity = 1;
}

setInterval(nextSlide, 5000); // Ganti gambar setiap 5 detik

// Tombol Scroll to Top
let scrollToTopBtn = document.getElementById("scrollToTopBtn");

// Menampilkan tombol saat menggulir ke bawah
window.onscroll = function() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "block"; // Tampilkan tombol
    } else {
        scrollToTopBtn.style.display = "none"; // Sembunyikan tombol
    }
};

// Mengatur perilaku saat tombol diklik (scroll ke atas)
scrollToTopBtn.onclick = function() {
    window.scrollTo({
        top: 0,
        behavior: "smooth" // Efek scroll halus
    });
};



//swipe
var swiper = new Swiper('.layanan-swiper', {
        slidesPerView: 1,
        spaceBetween: 20,
        loop: false,
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: {
                slidesPerView: 2
            }, // Tampilkan 2 item di tablet
            1024: {
                slidesPerView: 3
            } // Tampilkan 3 item di desktop
        }
    });