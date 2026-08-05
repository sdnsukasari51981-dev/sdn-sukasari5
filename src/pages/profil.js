import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineIdentification } from "react-icons/hi"

const identitas = [
<<<<<<< HEAD
  ["NPSN", "20606442"],
=======
  ["NPSN", "20xxxxxx"],
>>>>>>> 6aea6f9b26c392d218981fec3fbfb7a7affe672d
  ["Status", "Negeri"],
  ["Akreditasi", "A (Sangat Baik)"],
  ["Jenjang", "Sekolah Dasar (SD)"],
  ["Kurikulum", "Kurikulum Merdeka"],
<<<<<<< HEAD
  ["Alamat", "Jalan Moh. Yamin Nomor 1, Kelurahan Babakan, Kecamatan Tangerang, Kota Tangerang, Provinsi Banten"],
]

const sejarah = [
  { tahun: "1981", teks: "SD Negeri Sukasari 5 resmi didirikan untuk melayani pendidikan dasar di wilayah Sukasari." },
  { tahun: "1998", teks: "Renovasi besar gedung sekolah dan penambahan ruang kelas untuk menampung lebih banyak siswa." },
  { tahun: "2015", teks: "Meraih akreditasi A dan mulai mengembangkan program ekstrakurikuler unggulan." },
  { tahun: "2016", teks: "Pemerintah Kota Tangerang menganggarkan dan melaksanakan proyek pembangunan gedung baru SDN Sukasari 4 & 5 di Jalan Sukasari, di tengah dinamika penyelesaian status lahan." },
  { tahun: "2017", teks: "Proses perpindahan dan penggunaan gedung baru secara resmi mulai aktif dilakukan setelah tahap pembangunan selesai." },
  { tahun: "2021", teks: "Sempat ada penyesuaian kegiatan internal sekolah termasuk program Adiwiyata akibat penataan ulang dan kepindahan lanjutan di tahun ajaran tersebut." },
  { tahun: "2023", teks: "Menerapkan Kurikulum Merdeka secara penuh di seluruh tingkatan kelas." },
  { tahun: "2024", teks: "Tiim Marching Band Gita Sukma SDN Sukasari 5 meraih prestasi membanggakan mewakili Provinsi Banten, membawa pulang medali emas untuk kategori ensambel/CG, perak untuk parade street marching, perak untuk parade marching show, serta perunggu untuk pianika ensambel dan konser." },
  { tahun: "2025", teks: "Berdasarkan data Dapodik (Kemendikdasmen), sekolah ini tercatat memiliki 14 ruang kelas, 2 perpustakaan, dan daya listrik 24.999 watt dari PLN pada periode 2024/2025 semester 2, dengan rasio siswa per rombongan belajar sekitar 34,33." },
  { tahun: "2025", teks: "Sekolah terus menjalankan Kurikulum Merdeka dan berstatus sekolah penggerak (sesuai info dari halaman resmi sekolah)." },
=======
  ["Alamat", "Jl. Sukasari No. 5"],
]

const sejarah = [
  { tahun: "1979", teks: "SD Negeri Sukasari 5 resmi didirikan untuk melayani pendidikan dasar di wilayah Sukasari." },
  { tahun: "1998", teks: "Renovasi besar gedung sekolah dan penambahan ruang kelas untuk menampung lebih banyak siswa." },
  { tahun: "2015", teks: "Meraih akreditasi A dan mulai mengembangkan program ekstrakurikuler unggulan." },
  { tahun: "2023", teks: "Menerapkan Kurikulum Merdeka secara penuh di seluruh tingkatan kelas." },
>>>>>>> 6aea6f9b26c392d218981fec3fbfb7a7affe672d
]

const ProfilPage = () => (
  <Layout>
    <SEO title="Profil Sekolah" pathname="/profil" description="Sejarah, identitas, dan profil lengkap SD Negeri Sukasari 5." />

    <section className="pt-16 pb-14 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center">
        <Reveal>
          <span className="eyebrow mb-3">Profil Sekolah</span>
          <h1 className="section-title mb-4">Mengenal SD Negeri Sukasari 5</h1>
          <p className="text-ink/60 max-w-2xl mx-auto">
<<<<<<< HEAD
            Sekolah dasar negeri yang berkomitmen membentuk generasi cerdas,
            berkarakter, dan siap menghadapi masa depan sejak tahun 1981.
=======
            Lembaga pendidikan dasar negeri yang berkomitmen membentuk generasi cerdas,
            berkarakter, dan siap menghadapi masa depan sejak tahun 1979.
>>>>>>> 6aea6f9b26c392d218981fec3fbfb7a7affe672d
          </p>
        </Reveal>
      </div>
    </section>

    <section className="max-w-6xl mx-auto px-5 md:px-8 pb-20 grid md:grid-cols-3 gap-10">
      <Reveal className="md:col-span-1">
        <div className="report-card sticky top-24">
          <div className="w-12 h-12 rounded-2xl bg-sky-light text-sky grid place-items-center mb-4">
            <HiOutlineIdentification size={24} />
          </div>
          <h2 className="font-display text-lg text-ink mb-4">Identitas Sekolah</h2>
          <dl className="space-y-3 text-sm">
            {identitas.map(([label, value]) => (
              <div key={label} className="flex justify-between gap-4 border-b border-ink/5 pb-2">
                <dt className="text-ink/50">{label}</dt>
                <dd className="text-ink font-medium text-right">{value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Reveal>

      <div className="md:col-span-2">
        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-4">Sejarah Singkat</h2>
          <p className="text-ink/70 leading-relaxed mb-10">
<<<<<<< HEAD
            Berdiri sejak tahun 1981, SD Negeri Sukasari 5 telah menjadi bagian dari
=======
            Berdiri sejak tahun 1979, SD Negeri Sukasari 5 telah menjadi bagian dari
>>>>>>> 6aea6f9b26c392d218981fec3fbfb7a7affe672d
            perjalanan pendidikan masyarakat sekitar selama lebih dari empat dekade.
            Dengan dukungan tenaga pendidik profesional dan fasilitas yang terus
            diperbarui, sekolah ini konsisten menghadirkan pembelajaran berkualitas
            yang relevan dengan perkembangan zaman.
          </p>
        </Reveal>

        <div className="relative pl-8 border-l-2 border-dashed border-ink/15 space-y-10">
          {sejarah.map((item, i) => (
            <Reveal key={item.tahun} delay={i * 0.1} className="relative">
              <span className="absolute -left-[calc(2rem+7px)] top-1 w-3.5 h-3.5 rounded-full bg-merah" />
              <span className="font-display text-merah text-sm">{item.tahun}</span>
              <p className="text-ink/70 mt-1 leading-relaxed">{item.teks}</p>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  </Layout>
)

export default ProfilPage
