import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import { StaticImage, GatsbyImage, getImage } from "gatsby-plugin-image"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"

// Data disusun dari daftar hadir guru & pegawai SD Negeri Sukasari 5.
// Kepala Sekolah memakai foto resmi; guru dengan foto tersedia (Pak Rudi,
// Bu Juju, Bu Manda) juga memakai foto asli. Anggota lain memakai avatar
// inisial karena foto perorangan belum tersedia di aset sekolah.
const kepalaSekolah = {
  nama: "Wawat Tustiawati, S.Pd., M.M.",
  peran: "Kepala Sekolah",
  nip: "196908082005012011",
}

const kelompok = [
  {
    title: "Guru Kelas",
    warna: "sky",
    anggota: [
      { nama: "Rudi Mustafa, S.Pd.", peran: "Guru Kelas VI A", nip: "197110282002121006", foto: "pak-rudi.png" },
      { nama: "Siti Jubaedah, S.Pd.", peran: "Guru Kelas VI B", nip: "198501032025212010", foto: "bu-juju.png" },
      { nama: "Siti Mandasari, S.Pd.", peran: "Guru Kelas V A", nip: "199212232022212003", foto: "bu-manda.png" },
      { nama: "Nurhikmah, S.Pd.", peran: "Guru Kelas V B", nip: "198001012022212013", foto: "bu-hikmah.png" },
      { nama: "Mudiani Setiawati, S.Pd.", peran: "Guru Kelas IV A", nip: "198206182008012005", foto: "bu-mudi.png" },
      { nama: "Rita Rosita Rodiah, S.Pd.", peran: "Guru Kelas IV B", nip: "198804152022212008", foto: "bu-rita.png" },
      { nama: "Ma'mun Murod, S.Pd.", peran: "Guru Kelas III A", nip: "197206142014091003", foto: "pak-mamun.png" },
      { nama: "Rahmaningrum, S.Pd.", peran: "Guru Kelas III B", nip: "198904262022212008", foto: "bu-arum.png" },
      { nama: "Siti Iptika, S.Pd.", peran: "Guru Kelas II A", nip: "199001012025212069", foto: "bu-tika.png" },
      { nama: "Nadia Femi Saputri, S.Pd.", peran: "Guru Kelas II B", nip: "197805292022212002", foto: "bu-nadia.png" },
      { nama: "Yati Hartati, S.Pd.", peran: "Guru Kelas I A", nip: "197107052005012006", foto: "bu-yati.png" },
      { nama: "Nurhayati, S.Pd.", peran: "Guru Kelas I B", nip: "197906052014092001", foto: "bu-nur.png" },
    ],
  },
  {
    title: "Guru Mata Pelajaran & Keagamaan",
    warna: "daun",
    anggota: [
      { nama: "Nur Ubay, S.Pd.I", peran: "Guru PAI Kelas I–III & BTQ Kelas IV–VI", nip: "198706222025211015", foto: "pak-ubay.png" },
      { nama: "Royan Fauzi, S.Pd.", peran: "Guru PAI Kelas IV–VI & BTQ Kelas I–III", nip: "198807082025211024", foto: "pak-royan.png" },
      { nama: "Aziz Priana, S.Pd.", peran: "Guru Mapel PJOK IV–VI AB", nip: "200007042025211018", foto: "pak-aziz.png" },
      { nama: "Salsa Billa Syifa, S.Pd.", peran: "Guru Mapel PJOK I–III AB", nip: "200104032025212813", foto: "bu-salsa.png" },
      { nama: "Amalia Muthia Khansa, S.Pd.", peran: "Guru Kelas V B & Mapel B. Inggris I–VI AB", foto: "bu-aca.png" },
      { nama: "Imasfufah, S.Pd.", peran: "GPK I–VI AB", foto: "bu-imas.png" },
      { nama: "Ridoh Anras, S.Kom.", peran: "Guru Bidang Informatika I-VI AB", foto: "pak-ridho.png" },
    ],
  },
  {
    title: "Tenaga Kependidikan",
    warna: "sun",
    anggota: [
      { nama: "Abu Bakar Sidik", peran: "Operator Sekolah", nip: "198204222025211024", foto: "pak-sidik.png" },
      { nama: "Muhammad Ar Rafi Ramadhan", peran: "Perpustakaan", foto: "pak-rafi.png" },
      { nama: "Gunawan", peran: "Satpam", nip: "197210122025211045", foto: "pak-gun.png" },
      { nama: "Mawan", peran: "Penjaga Malam", foto: "pak-mawan.png" },
      { nama: "Maulana Muhamadin", peran: "Penjaga Sekolah", nip: "119210242025211109", foto: "pak-maul.png" },
      { nama: "Reno Dinata", peran: "Penjaga Sekolah", nip: "198303052025211133", foto: "pak-reno.png" },
    ],
  },
  {
    title: "Pelatih Ekstrakurikuler",
    warna: "merah",
    anggota: [
      { nama: "Reynaldi Dwi Rafli", peran: "Pelatih Marawis", foto: "pak-rey.png" },
      { nama: "Nadia Arafah", peran: "Pelatih Pramuka PI", foto: "bu-cindy.png" },
      { nama: "Muhammad Okiyana Adegiantio", peran: "Pelatih Marching Band", foto: "pak-oky.png" },
      { nama: "Qatrun Nada Balqis Nabila Azzahra", peran: "Pelatih Marching Band", foto: "bu-nada.png" },
      { nama: "Fajrya Apriyanti, ST", peran: "Pelatih Taekwondo", foto: "bu-rya.png" },
      { nama: "Aqliyah Lutvy Triandi", peran: "Pelatih Tari", foto: "bu-lutfy.png" },
      { nama: "Andreas An Hadi", peran: "Pelatih Silat", foto: "pak-andreas.png" },
    ],
  },
]

const warnaMap = {
  sky: "bg-sky-light text-sky",
  daun: "bg-daun-light text-daun",
  sun: "bg-sun-light text-ink",
  merah: "bg-merah-light text-merah",
}

const initials = (name) =>
  name
    .replace(/,.*$/, "")
    .split(" ")
    .filter(Boolean)
    .slice(0, 2)
    .map((n) => n[0])
    .join("")
    .toUpperCase()

const GuruStaffPage = () => {
  const data = useStaticQuery(graphql`
    query GuruStaffFotos {
      allFile(
        filter: { sourceInstanceName: { eq: "images" }, extension: { in: ["png", "jpg", "jpeg"] } }
      ) {
        nodes {
          relativePath
          childImageSharp {
            gatsbyImageData(width: 96, height: 96, placeholder: BLURRED, transformOptions: { fit: COVER })
          }
        }
      }
    }
  `)

  const fotoMap = {}
  data.allFile.nodes.forEach((node) => {
    fotoMap[node.relativePath] = node.childImageSharp
  })

  return (
  <Layout>
    <SEO
      title="Guru & Staf"
      pathname="/guru-staff"
      description="Kenali para guru dan staf profesional di SD Negeri Sukasari 5, lengkap dengan jabatan dan NIP."
    />
    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Sumber Daya Manusia</span>
          <h1 className="section-title">Guru &amp; Staf Kami</h1>
          <p className="text-ink/60 mt-4 max-w-xl mx-auto">
            Tenaga pendidik dan kependidikan yang berdedikasi mendampingi tumbuh
            kembang setiap siswa.
          </p>
        </Reveal>
      </div>

      {/* Kepala Sekolah */}
      <div className="max-w-3xl mx-auto px-5 md:px-8 mb-16">
        <Reveal>
          <div className="report-card flex flex-col sm:flex-row items-center gap-6 bg-ink text-chalk">
            <StaticImage
              src="../images/kepala-sekolah.jpeg"
              alt={`Foto ${kepalaSekolah.nama}`}
              className="w-24 h-24 rounded-full ring-4 ring-sun shrink-0"
              imgClassName="object-cover"
              placeholder="blurred"
              width={96}
              height={96}
            />
            <div className="text-center sm:text-left">
              <span className="eyebrow !text-sun mb-1">{kepalaSekolah.peran}</span>
              <p className="font-display text-xl text-chalk">{kepalaSekolah.nama}</p>
              <p className="text-chalk/60 text-xs font-mono mt-1">NIP. {kepalaSekolah.nip}</p>
            </div>
          </div>
        </Reveal>
      </div>

      {/* Kelompok guru & staf */}
      <div className="max-w-6xl mx-auto px-5 md:px-8">
        {kelompok.map((grup, gi) => (
          <div key={grup.title} className="mb-14">
            <Reveal delay={gi * 0.05}>
              <h2 className="font-display text-xl text-ink mb-6 text-center">{grup.title}</h2>
            </Reveal>
            <div className="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
              {grup.anggota.map((g, i) => {
                const fotoData = g.foto && fotoMap[g.foto] ? getImage(fotoMap[g.foto]) : null
                return (
                <Reveal key={g.nama} delay={(i % 4) * 0.06}>
                  <div className="report-card text-center h-full">
                    {fotoData ? (
                      <GatsbyImage
                        image={fotoData}
                        alt={`Foto ${g.nama}`}
                        className="w-16 h-16 mx-auto rounded-full mb-4 ring-2 ring-white shadow-sm"
                        imgClassName="rounded-full object-cover"
                      />
                    ) : (
                      <div
                        className={`w-16 h-16 mx-auto rounded-full grid place-items-center font-display text-lg mb-4 ${warnaMap[grup.warna]}`}
                      >
                        {initials(g.nama)}
                      </div>
                    )}
                    <p className="font-display text-ink text-sm">{g.nama}</p>
                    <p className="text-xs text-ink/50 mt-1">{g.peran}</p>
                    {g.nip && (
                      <p className="text-[11px] text-ink/40 font-mono mt-1.5">NIP. {g.nip}</p>
                    )}
                  </div>
                </Reveal>
                )
              })}
            </div>
          </div>
        ))}
      </div>
    </section>
  </Layout>
  )
}

export default GuruStaffPage
