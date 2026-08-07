import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

// Kepala Sekolah — puncak garis komando
const kepalaSekolah = {
  nama: "Wawat Tustiawati, S.Pd., M.M.",
  jabatan: "Kepala Sekolah",
  nip: "196908082005012011",
}

// Struktur organisasi tipe LINI: seluruh guru & tenaga kependidikan
// berada langsung dalam satu garis komando di bawah Kepala Sekolah,
// dikelompokkan per rumpun tugas hanya untuk memudahkan pembacaan.
const kelompok = [
  {
    title: "Guru Kelas",
    anggota: [
      { nama: "Rudi Mustafa, S.Pd.", jabatan: "Guru Kelas VI A", nip: "197110282002121006" },
      { nama: "Siti Jubaedah, S.Pd.", jabatan: "Guru Kelas VI B", nip: "198501032025212010" },
      { nama: "Siti Mandasari, S.Pd.", jabatan: "Guru Kelas V A", nip: "199212232022212003" },
      { nama: "Nurhikmah, S.Pd.", jabatan: "Guru Kelas V B", nip: "198001012022212013" },
      { nama: "Mudiani Setiawati, S.Pd.", jabatan: "Guru Kelas IV A", nip: "198206182008012005" },
      { nama: "Rita Rosita Rodiah, S.Pd.", jabatan: "Guru Kelas IV B", nip: "198804152022212008" },
      { nama: "Ma'mun Murod, S.Pd.", jabatan: "Guru Kelas III A", nip: "197206142014091003" },
      { nama: "Rahmaningrum, S.Pd.", jabatan: "Guru Kelas III B", nip: "198904262022212008" },
      { nama: "Siti Iptika, S.Pd.", jabatan: "Guru Kelas II A", nip: "199001012025212069" },
      { nama: "Nadia Femi Saputri, S.Pd.", jabatan: "Guru Kelas II B", nip: "197805292022212002" },
      { nama: "Yati Hartati, S.Pd.", jabatan: "Guru Kelas I A", nip: "197107052005012006" },
      { nama: "Nurhayati, S.Pd.", jabatan: "Guru Kelas I B", nip: "197906052014092001" },
    ],
  },
  {
    title: "Guru Mata Pelajaran & Keagamaan",
    anggota: [
      { nama: "Nur Ubay, S.Pd.I", jabatan: "Guru PAI Kelas I–III & BTQ Kelas IV–VI", nip: "198706222025211015" },
      { nama: "Royan Fauzi, S.Pd.", jabatan: "Guru PAI Kelas IV–VI & BTQ Kelas I–III", nip: "198807082025211024" },
      { nama: "Aziz Priana, S.Pd.", jabatan: "Guru Mapel PJOK IV–VI AB", nip: "200007042025211018" },
      { nama: "Salsa Billa Syifa, S.Pd.", jabatan: "Guru Mapel PJOK I–III AB", nip: "200104032025212813" },
      { nama: "Amalia Muthia Khansa, S.Pd.", jabatan: "Guru Mapel B. Inggris I–VI AB" },
      { nama: "Imasfufah, S.Pd.", jabatan: "GPK I–VI AB" },
      { nama: "Ridoh Anras, S.Kom.", jabatan: "Guru Bidang Informatika I–VI AB" },
    ],
  },
  {
    title: "Tenaga Kependidikan",
    anggota: [
      { nama: "Abu Bakar Sidik", jabatan: "Operator Sekolah", nip: "198204222025211024" },
      { nama: "Ridoh Anras, S.Kom.", jabatan: "Tenaga Administrasi" },
      { nama: "Muhammad Ar Rafi Ramadhan", jabatan: "Perpustakaan" },
      { nama: "Gunawan", jabatan: "Satpam", nip: "197210122025211045" },
      { nama: "Mawan", jabatan: "Penjaga Malam" },
      { nama: "Maulana Muhamadin", jabatan: "Penjaga Sekolah", nip: "119210242025211109" },
      { nama: "Reno Dinata", jabatan: "Penjaga Sekolah", nip: "198303052025211133" },
    ],
  },
  {
    title: "Pelatih Ekstrakurikuler",
    anggota: [
      { nama: "Reynaldi Dwi Rafli", jabatan: "Pelatih Marawis" },
      { nama: "Nadia Arafah", jabatan: "Pelatih Pramuka PI" },
      { nama: "Rizky Nur Effendy", jabatan: "Pelatih Pramuka PA" },
      { nama: "Muhammad Okiyana Adegiantio", jabatan: "Pelatih Marching Band" },
      { nama: "Qatrun Nada Balqis Nabila Azzahra", jabatan: "Pelatih Marching Band" },
      { nama: "Fajrya Apriyanti, ST", jabatan: "Pelatih Taekwondo" },
      { nama: "Aqliyah Lutvy Triandi", jabatan: "Pelatih Tari" },
      { nama: "Andreas An Hadi", jabatan: "Pelatih Silat" },
    ],
  },
]

const StrukturPage = () => (
  <Layout>
    <SEO
      title="Struktur Organisasi"
      pathname="/struktur-organisasi"
      description="Struktur organisasi lini SD Negeri Sukasari 5 beserta nama, jabatan, dan NIP guru dan tenaga kependidikan."
    />
    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Tata Kelola</span>
          <h1 className="section-title">Struktur Organisasi Sekolah</h1>
          <p className="text-ink/60 text-sm max-w-xl mx-auto mt-3">
            Struktur organisasi tipe lini seluruh guru dan tenaga kependidikan
            berada dalam satu garis komando langsung di bawah Kepala Sekolah.
          </p>
        </Reveal>
      </div>

      <div className="max-w-3xl mx-auto px-5 md:px-8">
        {/* Puncak garis komando */}
        <Reveal>
          <div className="report-card text-center bg-ink text-chalk mb-2 relative z-10">
            <span className="eyebrow !text-sun mb-2">Pimpinan</span>
            <p className="font-display text-xl md:text-2xl">{kepalaSekolah.jabatan}</p>
            <p className="text-chalk/85 mt-1">{kepalaSekolah.nama}</p>
            <p className="text-chalk/60 text-xs mt-1 font-mono">NIP. {kepalaSekolah.nip}</p>
          </div>
        </Reveal>

        {/* Garis lini vertikal turun ke seluruh kelompok */}
        <div className="flex justify-center">
          <div className="w-px h-10 bg-ink/25" />
        </div>

        {kelompok.map((grup, gi) => (
          <div key={grup.title} className="mb-10">
            <Reveal delay={gi * 0.05}>
              <div className="flex items-center gap-3 mb-4">
                <span className="h-px flex-1 bg-ink/15" />
                <h2 className="font-display text-lg text-ink text-center whitespace-nowrap">
                  {grup.title}
                </h2>
                <span className="h-px flex-1 bg-ink/15" />
              </div>
            </Reveal>

            <div className="space-y-3">
              {grup.anggota.map((item, i) => (
                <Reveal key={item.nama} delay={i * 0.04}>
                  <div className="report-card flex items-center justify-between gap-4 border-l-4 border-sun">
                    <div>
                      <p className="font-display text-ink">{item.jabatan}</p>
                      <p className="text-sm text-ink/70">{item.nama}</p>
                      {item.nip && (
                        <p className="text-xs text-ink/45 font-mono mt-0.5">NIP. {item.nip}</p>
                      )}
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
)

export default StrukturPage
