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

    // ==========================================
    // 3. FITUR KALKULATOR BIAYA CETAK (BPMN & BASIS DATA)
    // ==========================================
    const tarifPrint = {
        "PRT-HVS-A4": 1500,
        "PRT-HVS-F4": 1500,
        "CTK-FTO-4R": 6000
    };

    const btnHitung = document.getElementById("btn-hitung");
    const btnReset = document.getElementById("btn-reset-kalkulator");
    const outputKalkulator = document.getElementById("output-kalkulator");

    const teksRincianQty = document.getElementById("rincian-qty");
    const teksRincianSubtotal = document.getElementById("rincian-subtotal");
    const teksRincianJilid = document.getElementById("rincian-jilid");
    const teksRincianDiskon = document.getElementById("rincian-diskon");
    const teksHasilBiaya = document.getElementById("hasil-biaya");
    const teksHasilWaktu = document.getElementById("hasil-waktu");

    function toRupiah(angka) {
        return new Intl.NumberFormat("id-ID", {
            style: "currency",
            currency: "IDR",
            maximumFractionDigits: 0
        }).format(angka);
    }

    btnHitung.addEventListener("click", function () {
        const kodePrint = document.getElementById("tipe-print").value;
        const jumlahLembar = parseInt(document.getElementById("jumlah-lembar").value) || 1;
        const isJilid = document.getElementById("finishing-jilid").checked;
        const isMember = document.getElementById("member-diskon").checked;

        const hargaSatuan = tarifPrint[kodePrint] || 1500;
        const subtotalCetak = hargaSatuan * jumlahLembar;
        const biayaJilid = isJilid ? 5000 : 0;
        const kotor = subtotalCetak + biayaJilid;
        const nominalDiskon = isMember ? kotor * 0.1 : 0;
        const totalBersih = kotor - nominalDiskon;

        teksRincianQty.innerText = jumlahLembar;
        teksRincianSubtotal.innerText = toRupiah(subtotalCetak);
        teksRincianJilid.innerText = isJilid ? toRupiah(biayaJilid) : "Rp 0 (Tidak)";
        teksRincianDiskon.innerText = isMember ? `- ${toRupiah(nominalDiskon)}` : "Rp 0 (Bukan Member)";
        teksHasilBiaya.innerText = toRupiah(totalBersih);

        let statusPengerjaan = "Dokumen terverifikasi • Siap dicetak (perkiraan 5-10 menit)";
        if (jumlahLembar > 50 || isJilid) {
            statusPengerjaan = "Dokumen terverifikasi • Memerlukan antrean finishing jilid (perkiraan 20-30 menit)";
        }
        teksHasilWaktu.innerText = statusPengerjaan;
        outputKalkulator.classList.remove("d-none");
    });

    btnReset.addEventListener("click", function () {
        document.getElementById("form-kalkulator").reset();
        outputKalkulator.classList.add("d-none");
    });

    // ==========================================
    // 4. FITUR VALIDASI FORMULIR KONTAK
    // ==========================================
    const formKontak = document.getElementById("form-kontak");
    const inputNama = document.getElementById("nama");
    const inputEmail = document.getElementById("email");
    const inputPesan = document.getElementById("pesan");
    const alertKontak = document.getElementById("alert-kontak");

    formKontak.addEventListener("submit", function (e) {
        e.preventDefault();
        let valid = true;

        if (inputNama.value.trim().length < 3) {
            document.getElementById("err-nama").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("err-nama").classList.add("d-none");
        }

        const polaEmail = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!polaEmail.test(inputEmail.value.trim())) {
            document.getElementById("err-email").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("err-email").classList.add("d-none");
        }

        if (inputPesan.value.trim() === "") {
            document.getElementById("err-pesan").classList.remove("d-none");
            valid = false;
        } else {
            document.getElementById("err-pesan").classList.add("d-none");
        }

        if (valid) {
            alertKontak.classList.remove("d-none");
            formKontak.reset();
            setTimeout(function () {
                alertKontak.classList.add("d-none");
            }, 4000);
        }
    });
});