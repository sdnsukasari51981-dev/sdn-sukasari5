import React from "react"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import { HiOutlineFlag, HiOutlineCheckCircle } from "react-icons/hi"

const misi = [
  "Menanamkan nilai-nilai keimanan, ketakwaan, dan akhlak mulia melalui pembiasaan ibadah, kegiatan keagamaan, dan teladan dalam kehidupan sehari-hari.",
  "Membangun semangat kewargaan dengan menumbuhkan sikap saling menghargai, toleransi, dan gotong royong dalam lingkungan sekolah yang inklusif.",
  "Mengembangkan kemampuan bernalar kritis melalui pembelajaran berbasis proyek, kegiatan literasi dan pemecahan masalah kontekstual.",
  "Mendorong kreativitas dan inovasi murid dengan memberi ruang untuk berekspresi dan menciptakan karya yang bermanfaat bagi diri sendiri dan lingkungan.",
  "Menumbuhkan kolaborasi antar murid dan warga sekolah untuk mewujudkan iklim belajar yang sehat, inklusif, dan berwawasan lingkungan.",
  "Melatih kemandirian murid melalui kegiatan yang menumbuhkan tanggung jawab, disiplin, dan pengambilan keputusan secara mandiri.",
  "Membangun budaya sekolah yang berkarakter, sehat, bersih, dan ramah lingkungan.",
  "Melibatkan seluruh warga sekolah dan orang tua dalam menciptakan ekosistem pendidikan yang mendukung perkembangan profil lulusan.",
  "Melibatkan warga sekolah, orang tua dan masyarakat sebagai mitra sekolah dalam program peduli lingkungan."
]

const Tujuan = [
  "Membentuk murid yang beriman, bertakwa kepada Tuhan Yang Maha Esa, dan berakhlak mulia melalui pembiasaan ibadah, kegiatan keagamaan, dan keteladanan dalam kehidupan sehari-hari.",
  "Menumbuhkan semangat kewargaan dalam diri murid melalui sikap saling menghargai, toleransi, dan gotong royong di lingkungan sekolah yang inklusif dan harmonis.",
  "Mengembangkan kemampuan bernalar kritis murid melalui pembelajaran berbasis proyek, literasi, serta pemecahan masalah nyata yang kontekstual dan relevan dengan kehidupan.",
  "Mendorong kreativitas dan inovasi murid dengan menyediakan ruang yang aman dan terbuka untuk berekspresi serta menciptakan karya yang bermanfaat bagi diri sendiri dan lingkungan.",
  "Menumbuhkan budaya kolaborasi yang sehat dan produktif antar murid, guru, dan seluruh warga sekolah untuk menciptakan iklim belajar yang nyaman, inklusif dan berwawasan lingkungan.",
  "Melatih sikap mandiri pada murid melalui kegiatan yang menumbuhkan rasa tanggung jawab, disiplin, serta kemampuan mengambil keputusan secara dewasa dan mandiri.",
  "Mewujudkan budaya sekolah yang sehat, bersih, berkarakter, dan ramah lingkungan melalui pembiasaan hidup sehat dan pelibatan seluruh warga sekolah.",
  "Menciptakan ekosistem pendidikan yang kolaboratif dengan melibatkan seluruh warga sekolah dan orang tua dalam mendukung pembentukan karakter dan profil lulusan yang ideal dalam kehidupan sehari-hari.",
  "Membiasakan warga sekolah serta menguatkan kemitraan dengan orang tua dan masyarakat untuk aktif dalam menjaga kebersihan, kelestarian, dan keberlanjutan lingkungan sekolah dan sekitarnya."
]

const nilai = ["Keimanan dan Ketaqwaan", "Kewargaan", "Penalaran Kritis", "Kreativitas", "Kolaborasi", "Kesehatan", "Kemandirian", "Komunikasi"]

const VisiMisiPage = () => (
  <Layout>
    <SEO title="Visi & Misi" pathname="/visi-misi" description="Visi, misi, dan nilai-nilai yang dipegang teguh SD Negeri Sukasari 5." />

    <section className="pt-16 pb-20 dot-bg">
      <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
        <Reveal>
          <span className="eyebrow mb-3">Arah &amp; Tujuan</span>
          <h1 className="section-title">Visi &amp; Misi Sekolah</h1>
        </Reveal>
      </div>

      <div className="max-w-4xl mx-auto px-5 md:px-8">
        <Reveal>
          <div className="report-card text-center bg-ink text-chalk mb-12">
            <HiOutlineFlag className="mx-auto mb-4 text-sun" size={32} />
            <span className="eyebrow !text-sun mb-3">Visi</span>
            <p className="font-display text-xl md:text-2xl leading-snug max-w-2xl mx-auto">
              "Mewujudkan Murid yang Memiliki Delapan Dimensi Profil lulusan dan peduli lingkungan."
            </p>
          </div>
        </Reveal>

        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6 text-center">Misi Sekolah</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {misi.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="report-card flex gap-3 h-full">
                <HiOutlineCheckCircle className="text-daun shrink-0 mt-0.5" size={22} />
                <p className="text-ink/75 text-sm leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6 text-center">Tujuan</h2>
        </Reveal>
        <div className="grid sm:grid-cols-2 gap-5 mb-16">
          {Tujuan.map((item, i) => (
            <Reveal key={item} delay={i * 0.08}>
              <div className="report-card flex gap-3 h-full">
                <HiOutlineCheckCircle className="text-daun shrink-0 mt-0.5" size={22} />
                <p className="text-ink/75 text-sm leading-relaxed">{item}</p>
              </div>
            </Reveal>
          ))}
        </div>

        <Reveal>
          <h2 className="font-display text-2xl text-ink mb-6 text-center">8 Dimensi Profil Lulusan</h2>
          <div className="flex flex-wrap justify-center gap-3">
            {nilai.map((n) => (
              <span
                key={n}
                className="px-5 py-2.5 rounded-full bg-sun-light text-ink font-display text-sm border border-sun/40"
              >
                {n}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  </Layout>
)

export default VisiMisiPage
