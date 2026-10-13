# Website SD Negeri Sukasari 5

Website resmi sekolah dibangun dengan **Gatsby JS** — cepat, aman, SEO-friendly,
dan mudah dikembangkan.

## ✨ Fitur

- **UI/UX profesional** — desain khas (bukan template generik) dengan motif
  "kartu rapor sekolah", palet warna krayon/papan tulis, tipografi Baloo 2 +
  Plus Jakarta Sans.
- **Dinamis & interaktif** — animasi scroll-reveal, counter statistik, dropdown
  navigasi, filter galeri + lightbox, form kontak dengan validasi real-time.
- **Responsif penuh** — dioptimalkan dari layar HP hingga desktop.
- **SEO-ready** — meta tag, Open Graph, Twitter Card, data terstruktur
  (JSON-LD Schema.org `School`), sitemap.xml & robots.txt otomatis.
- **Aman** — lihat bagian [Keamanan](#-keamanan) di bawah.
- **Berita berbasis Markdown** — tambah berita baru cukup dengan menambah
  file `.md` di `content/berita/`, tanpa perlu sentuh kode.

## 📁 Struktur Proyek

```
sdn-sukasari5/
├── content/berita/        # Artikel berita (Markdown)
├── src/
│   ├── components/        # Header, Footer, SEO, ContactForm, dll.
│   ├── pages/              # Setiap file = 1 halaman/route
│   ├── templates/          # Template halaman detail berita
│   ├── images/              # Aset gambar (source untuk gatsby-plugin-image)
│   └── styles/global.css   # Tailwind + gaya global
├── static/_headers          # Header keamanan (Netlify)
├── netlify.toml              # Konfigurasi deploy + header keamanan (Netlify)
├── gatsby-config.js
├── gatsby-node.js
└── tailwind.config.js
```

## 🚀 Menjalankan di Lokal

Prasyarat: Node.js ≥ 18.

```bash
npm install
npm run develop
```

Buka `http://localhost:8000`.

Build produksi:

```bash
npm run build
npm run serve   # pratinjau hasil build di http://localhost:9000
```

## 📝 Mengelola Konten

### Menambah berita
Buat file baru di `content/berita/nama-file.md`:

```markdown
---
judul: "Judul Berita"
tanggal: "2026-08-01"
kategori: "Kegiatan"
gambar: "../images/nama-foto.jpg"   # opsional
---

Isi berita di sini, mendukung format Markdown penuh.
```

Halaman detail otomatis terbuat di `/berita/nama-file/`.

### Mengganti data sekolah
Edit `siteMetadata` di `gatsby-config.js` (alamat, telepon, email, sosial
media) — data ini dipakai otomatis oleh Footer, halaman Kontak, dan SEO.

### Mengganti foto
Taruh file gambar di `src/images/` lalu referensikan lewat
`gatsby-plugin-image` (`gatsby-source-filesystem` sudah dikonfigurasi untuk
folder ini). Ganti juga `src/images/icon.png` dengan logo resmi sekolah
(ukuran disarankan 512×512).

## 🌐 Deploy

Situs ini adalah situs statis — bisa di-deploy ke Netlify, Vercel, Cloudflare
Pages, atau GitHub Pages.

### Netlify (direkomendasikan — header keamanan sudah otomatis aktif)
1. Push kode ke GitHub/GitLab.
2. Buat "New site from Git" di Netlify, pilih repo ini.
3. Build command: `npm run build`, Publish directory: `public`.
4. Fitur `netlify.toml` akan otomatis mengaktifkan header keamanan & form
   kontak (Netlify Forms) tanpa konfigurasi tambahan.

### Hosting lain (Vercel/Cloudflare Pages/dsb.)
- Build command & output directory sama seperti di atas.
- Salin header keamanan dari `static/_headers` ke mekanisme header khusus
  platform tersebut (mis. `vercel.json` → properti `headers`).
- Form kontak: ganti implementasi `fetch("/", ...)` di
  `src/components/ContactForm.js` dengan endpoint form-handling pilihan Anda
  (mis. Formspree, Getform) karena `data-netlify="true"` hanya berfungsi di
  Netlify.

## 🔒 Keamanan

Beberapa lapisan keamanan sudah diterapkan sejak awal:

1. **Situs statis (JAMstack)** — tidak ada database atau server aplikasi yang
   bisa langsung diserang; permukaan serangan jauh lebih kecil dibanding
   CMS tradisional (mis. WordPress).
2. **HTTP security headers** (`static/_headers` & `netlify.toml`):
   - `Content-Security-Policy` — mencegah injeksi skrip pihak ketiga (XSS).
   - `X-Frame-Options: DENY` — mencegah clickjacking.
   - `X-Content-Type-Options: nosniff` — mencegah MIME sniffing.
   - `Strict-Transport-Security` — memaksa koneksi HTTPS.
   - `Referrer-Policy` & `Permissions-Policy` — membatasi kebocoran data
     browser dan akses ke kamera/mikrofon/lokasi.
3. **Form kontak anti-spam** — honeypot field tersembunyi + validasi input
   sisi klien, tanpa pernah mengekspos API key/secret di kode sisi klien.
4. **Tidak ada source map di produksi** (`devtool: false`) agar struktur
   internal kode tidak mudah dibaca pihak luar.
5. **Dependency terkelola** — jalankan `npm run audit` secara berkala untuk
   memindai kerentanan pada dependency, dan perbarui secara rutin.

### Checklist keamanan tambahan saat deploy sungguhan
- [ ] Aktifkan HTTPS/SSL (otomatis di Netlify/Vercel/Cloudflare).
- [ ] Aktifkan 2FA pada akun hosting, domain registrar, dan repo Git.
- [ ] Batasi akses admin/CI-CD hanya untuk pihak yang berwenang.
- [ ] Jangan pernah commit file `.env` asli — gunakan `.env.example` sebagai
      acuan (sudah diblokir lewat `.gitignore`).
- [ ] Aktifkan backup otomatis repository & konten `content/berita/`.
- [ ] Jika menambahkan formulir/API baru, terapkan rate limiting di sisi
      penyedia layanan (mis. Netlify Forms sudah punya spam filtering
      bawaan).
- [ ] Perbarui dependency Gatsby & npm secara berkala (`npm outdated`).

## 🎨 Kustomisasi Desain

Token desain (warna, font, radius, shadow) terpusat di `tailwind.config.js`
dan `src/styles/global.css` — ubah di satu tempat, konsisten di seluruh
situs. Palet warna terinspirasi dari alat tulis & suasana sekolah dasar
(krayon, papan tulis, buku tulis) agar terasa hangat dan ramah anak namun
tetap profesional.

---

Dibuat dengan Gatsby JS · React · Tailwind CSS · Framer Motion
