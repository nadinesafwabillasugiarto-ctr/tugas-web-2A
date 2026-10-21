# UTS Pemrograman Web - Portfolio & Academic Dashboard

Proyek ini dibangun untuk memenuhi Ujian Tengah Semester (UTS) mata kuliah Pemrograman Web, Program Studi Sistem Informasi, Fakultas Teknik dan Ilmu Komputer, Universitas Nusantara PGRI Kediri.

- **Dosen Pengampu:** Rudy Eko Prasetya, M.Kom.
- **Nama Mahasiswa:** Nadine Safwabilla Al Khalifi Sugiarto
- **NPM:** 2513020002
- **Tautan Repositori:** https://github.com/nadinesafwabillasugiarto-ctr/tugas-web-2A
- **Tautan Live Web:** https://nadinesafwabillasugiarto-ctr.github.io/UTS-WEB-NADINE-SAFWABILLA/

---

## Integrasi Proyek Mata Kuliah

Halaman web ini memadukan studi kasus dan proyek riil dari tiga mata kuliah Sistem Informasi:

1. **Analisis Proses Bisnis (BPMN):**
   - Merefleksikan alur operasional layanan fotokopi & print offline (*AS-IS Kelompok 3*) menggunakan diagram alur Bizagi Modeler.
2. **Perancangan Basis Data (MySQL / phpMyAdmin):**
   - Mengintegrasikan skema basis data relasional `tugas5_percetakan` yang mencakup tabel master `pelanggan`, `kartu_member` (poin reward), katalog tarif `jenis_print`, nota `transaksi`, dan `detail_transaksi`.
3. **Pemrograman Web (HTML Semantik, CSS, & JS DOM):**
   - Dibangun dengan elemen semantik HTML5 murni (`<header>`, `<nav>`, `<main>`, `<section>`, `<article>`, `<aside>`, `<footer>`) dan framework Bootstrap 5.
   - Dilengkapi animasi *Animate On Scroll* (AOS) yang halus dan adaptif.

---

## Fitur Utama & Interaktivitas JavaScript

1. **Simulasi Kasir Cetak (Kalkulator BPMN & Basis Data):**
   - Menghitung tarif cetak secara dinamis berdasarkan data tabel `jenis_print` (`PRT-HVS-A4`, `PRT-HVS-F4`, `CTK-FTO-4R`).
   - Menampilkan **rincian nota transparan**: subtotal cetak, biaya tambahan finishing jilid, potongan diskon kartu member (10%), serta total bersih tagihan.
   - Menampilkan status alur dokumen secara otomatis sesuai diagram BPMN.
2. **Pencarian Proyek Secara Langsung (Live Search):**
   - Menyaring kartu showcase proyek secara *real-time* berbasis manipulasi DOM tanpa memuat ulang halaman.
3. **Mode Gelap (Dark Mode Toggle):**
   - Mengubah tema tampilan web (terang/gelap) dengan preferensi yang tersimpan di `localStorage` peramban.
4. **Validasi Formulir Kontak:**
   - Memeriksa kelayakan input nama (minimal 3 karakter), ekspresi reguler email, serta ketersediaan isi pesan sebelum dikirimkan.

---

## Struktur Berkas Proyek

```text
UTS-WEB-NADINE-SAFWABILLA/
├── index.html
├── README.md
├── css/
│   └── style.css
├── js/
│   └── script.js
└── img/
    ├── profile.jpeg
    ├── bpmn-foto.png
    └── database-schema.png