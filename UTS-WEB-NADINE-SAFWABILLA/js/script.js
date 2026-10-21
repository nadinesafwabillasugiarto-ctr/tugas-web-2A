// Berkas: js/script.js
// Logika Interaktivitas DOM & Perhitungan Biaya UTS Pemrograman Web

document.addEventListener("DOMContentLoaded", function () {

    // ==========================================
    // 1. FITUR MODE GELAP (DARK MODE) DENGAN LOCALSTORAGE
    // ==========================================
    const btnTheme = document.getElementById("btn-theme");
    const storedTheme = localStorage.getItem("nadine-theme");

    if (storedTheme === "dark") {
        document.body.classList.add("dark-mode");
        btnTheme.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Mode Terang';
    }

    btnTheme.addEventListener("click", function () {
        document.body.classList.toggle("dark-mode");
        const isDark = document.body.classList.contains("dark-mode");

        if (isDark) {
            btnTheme.innerHTML = '<i class="bi bi-sun-fill me-1"></i> Mode Terang';
            localStorage.setItem("nadine-theme", "dark");
        } else {
            btnTheme.innerHTML = '<i class="bi bi-moon-fill me-1"></i> Mode Gelap';
            localStorage.setItem("nadine-theme", "light");
        }
    });

    // ==========================================
    // 2. FITUR PENCARIAN LANGSUNG (LIVE SEARCH PROYEK)
    // ==========================================
    const inputCari = document.getElementById("cari-proyek");
    const daftarKartu = document.querySelectorAll(".item-proyek");
    const pesanKosong = document.getElementById("pesan-kosong");

    inputCari.addEventListener("input", function () {
        const kataKunci = inputCari.value.toLowerCase().trim();
        let jumlahDitemukan = 0;

        daftarKartu.forEach(function (kartu) {
            const teksKonten = kartu.innerText.toLowerCase();
            const kategori = kartu.getAttribute("data-kategori").toLowerCase();

            if (teksKonten.includes(kataKunci) || kategori.includes(kataKunci)) {
                kartu.classList.remove("d-none");
                jumlahDitemukan++;
            } else {
                kartu.classList.add("d-none");
            }
        });

        if (jumlahDitemukan === 0) {
            pesanKosong.classList.remove("d-none");
        } else {
            pesanKosong.classList.add("d-none");
        }
    });
});