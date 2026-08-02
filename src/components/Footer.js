import React from "react"
import { Link, useStaticQuery, graphql } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { HiOutlineLocationMarker, HiOutlinePhone, HiOutlineMail } from "react-icons/hi"
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa"

const Footer = () => {
  const { site } = useStaticQuery(graphql`
    query FooterQuery {
      site {
        siteMetadata {
          title
          contact {
            address
            phone
            email
          }
          social {
            instagram
            facebook
            youtube
          }
        }
      }
    }
  `)
  const { contact, social, title } = site.siteMetadata
  const year = new Date().getFullYear()

  return (
    <footer className="bg-ink text-chalk mt-24 relative overflow-hidden">
      <div className="absolute inset-0 dot-bg opacity-[0.06] pointer-events-none" />
      <div className="max-w-6xl mx-auto px-5 md:px-8 py-14 grid gap-10 md:grid-cols-4 relative">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3 mb-4">
            <StaticImage
              src="../images/logo-sekolah.png"
              alt="Logo SD Negeri Sukasari 5"
              className="w-11 h-11"
              imgClassName="object-contain"
              placeholder="blurred"
              width={44}
              height={44}
            />
            <span className="font-display text-lg">{title}</span>
          </div>
          <p className="text-chalk/70 max-w-sm text-sm leading-relaxed">
            Mencetak generasi yang cerdas, berkarakter, dan berakhlak mulia sejak bangku
            sekolah dasar — melalui pembelajaran yang menyenangkan dan bermakna.
          </p>
          <div className="flex gap-3 mt-5">
            <a href={social.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-merah transition-colors">
              <FaInstagram />
            </a>
            <a href={social.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-merah transition-colors">
              <FaFacebook />
            </a>
            <a href={social.youtube} target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="grid place-items-center w-10 h-10 rounded-full bg-white/10 hover:bg-merah transition-colors">
              <FaYoutube />
            </a>
          </div>
        </div>

        <div>
          <h3 className="font-display text-sun mb-4 text-sm tracking-wide uppercase">Tautan Cepat</h3>
          <ul className="space-y-2 text-sm text-chalk/80">
            <li><Link to="/profil" className="hover:text-sun">Profil Sekolah</Link></li>
            <li><Link to="/spmb" className="hover:text-sun">SPMB</Link></li>
            <li><Link to="/berita" className="hover:text-sun">Berita</Link></li>
            <li><Link to="/galeri" className="hover:text-sun">Galeri</Link></li>
            <li><Link to="/prestasi" className="hover:text-sun">Prestasi</Link></li>
          </ul>
        </div>

        <div>
          <h3 className="font-display text-sun mb-4 text-sm tracking-wide uppercase">Kontak</h3>
          <ul className="space-y-3 text-sm text-chalk/80">
            <li className="flex gap-2"><HiOutlineLocationMarker className="mt-0.5 shrink-0" /> {contact.address}</li>
            <li className="flex gap-2"><HiOutlinePhone className="mt-0.5 shrink-0" /> {contact.phone}</li>
            <li className="flex gap-2"><HiOutlineMail className="mt-0.5 shrink-0" /> {contact.email}</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10">
        <div className="max-w-6xl mx-auto px-5 md:px-8 py-5 text-xs text-chalk/60 flex flex-col md:flex-row justify-between gap-2">
          <span>© {year} {title}. Seluruh hak cipta dilindungi.</span>
          <span>Dibangun dengan Gatsby JS · Situs resmi pendidikan</span>
        </div>
      </div>
    </footer>
  )
}

export default Footer
