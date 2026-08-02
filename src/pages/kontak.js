import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import Layout from "../components/Layout"
import SEO from "../components/SEO"
import Reveal from "../components/Reveal"
import ContactForm from "../components/ContactForm"
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail, HiOutlineClock } from "react-icons/hi"

const KontakPage = () => {
  const { site } = useStaticQuery(graphql`
    query KontakQuery {
      site {
        siteMetadata {
          contact {
            address
            phone
            email
          }
        }
      }
    }
  `)
  const { contact } = site.siteMetadata

  return (
    <Layout>
      <SEO
        title="Kontak"
        pathname="/kontak"
        description="Hubungi SD Negeri Sukasari 5 melalui telepon, email, atau kunjungi langsung sekolah."
      />
      <section className="pt-16 pb-24 dot-bg">
        <div className="max-w-4xl mx-auto px-5 md:px-8 text-center mb-14">
          <Reveal>
            <span className="eyebrow mb-3">Kami Siap Membantu</span>
            <h1 className="section-title">Hubungi Kami</h1>
          </Reveal>
        </div>

        <div className="max-w-6xl mx-auto px-5 md:px-8 grid lg:grid-cols-5 gap-10">
          <Reveal className="lg:col-span-2 space-y-5">
            <div className="report-card flex gap-4">
              <HiOutlineLocationMarker className="text-merah shrink-0 mt-1" size={22} />
              <div>
                <p className="font-display text-ink text-sm mb-1">Alamat</p>
                <p className="text-sm text-ink/60">{contact.address}</p>
              </div>
            </div>
            <div className="report-card flex gap-4">
              <HiOutlinePhone className="text-sky shrink-0 mt-1" size={22} />
              <div>
                <p className="font-display text-ink text-sm mb-1">Telepon</p>
                <p className="text-sm text-ink/60">{contact.phone}</p>
              </div>
            </div>
            <div className="report-card flex gap-4">
              <HiOutlineMail className="text-daun shrink-0 mt-1" size={22} />
              <div>
                <p className="font-display text-ink text-sm mb-1">Email</p>
                <p className="text-sm text-ink/60">{contact.email}</p>
              </div>
            </div>
            <div className="report-card flex gap-4">
              <HiOutlineClock className="text-sun shrink-0 mt-1" size={22} />
              <div>
                <p className="font-display text-ink text-sm mb-1">Jam Layanan</p>
                <p className="text-sm text-ink/60">Senin – Jumat, 07.00 – 15.00 WIB</p>
              </div>
            </div>
            <div className="rounded-card overflow-hidden shadow-card aspect-video bg-sky-light grid place-items-center text-sky">
              <span className="font-display text-sm px-4 text-center">
                Sematkan Google Maps sekolah di sini
              </span>
            </div>
          </Reveal>

          <Reveal delay={0.1} className="lg:col-span-3">
            <ContactForm />
          </Reveal>
        </div>
      </section>
    </Layout>
  )
}

export default KontakPage
