import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"
import { AnimatePresence, motion } from "framer-motion"
import { HiMenu, HiX, HiChevronDown } from "react-icons/hi"

const profilLinks = [
  { to: "/profil", label: "Profil Sekolah" },
  { to: "/visi-misi", label: "Visi & Misi" },
  { to: "/struktur-organisasi", label: "Struktur Organisasi" },
  { to: "/guru-staff", label: "Guru & Staf" },
]

const navLinks = [
  { to: "/", label: "Beranda" },
  { to: "/profil", label: "Profil", dropdown: profilLinks },
  { to: "/berita", label: "Berita" },
  { to: "/galeri", label: "Galeri" },
  { to: "/ekstrakurikuler", label: "Ekstrakurikuler" },
  { to: "/prestasi", label: "Prestasi" },
  { to: "/kontak", label: "Kontak" },
]

const Header = () => {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)
  const [mobileDropdown, setMobileDropdown] = useState(null)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  const closeMobileMenu = () => {
    setOpen(false)
    setMobileDropdown(null)
  }

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-card" : "bg-paper/60 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Beranda SDN Sukasari 5">
          <StaticImage
            src="../images/logo-sekolah.png"
            alt="Logo SD Negeri Sukasari 5"
            className="w-11 h-11 group-hover:animate-wiggle"
            imgClassName="object-contain"
            placeholder="blurred"
            width={44}
            height={44}
          />
          <span className="font-display leading-tight">
            <span className="block text-ink text-base md:text-lg">SD Negeri</span>
            <span className="block text-merah text-sm md:text-base -mt-1">Sukasari 5</span>
          </span>
        </Link>

        {/* Navigasi desktop */}
        <nav className="hidden lg:flex items-center gap-1" aria-label="Navigasi utama">
          {navLinks.map((item) => (
            <div key={item.to} className="relative group">
              <Link
                to={item.to}
                className="px-4 py-2 rounded-full font-body font-semibold text-sm text-ink/80 hover:text-merah hover:bg-merah-light flex items-center gap-1 transition-colors"
                activeClassName="text-merah bg-merah-light"
              >
                {item.label}
                {item.dropdown && <HiChevronDown className="text-xs" aria-hidden="true" />}
              </Link>
              {item.dropdown && (
                <div
                  className="absolute left-0 top-full pt-2 w-56 opacity-0 invisible translate-y-1
                    group-hover:opacity-100 group-hover:visible group-hover:translate-y-0
                    transition-all duration-200"
                >
                  <ul className="bg-paper rounded-2xl shadow-card border border-ink/5 p-2">
                    {item.dropdown.map((sub) => (
                      <li key={sub.to}>
                        <Link
                          to={sub.to}
                          className="block px-4 py-2.5 rounded-xl text-sm font-medium text-ink/80 hover:bg-sky-light hover:text-ink"
                        >
                          {sub.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
          
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          className="lg:hidden grid place-items-center w-11 h-11 rounded-full border-2 border-ink text-ink"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => (open ? closeMobileMenu() : setOpen(true))}
        >
          {open ? <HiX size={22} /> : <HiMenu size={22} />}
        </button>
      </div>

      {/* Menu mobile */}
      <AnimatePresence>
        {open && (
          <motion.nav
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25, ease: "easeInOut" }}
            className="lg:hidden overflow-hidden bg-paper border-t border-ink/5"
            aria-label="Navigasi mobile"
          >
            <ul className="px-5 py-4 space-y-1">
              {navLinks.map((item) => {
                const isSubOpen = mobileDropdown === item.to
                return (
                <li key={item.to}>
                  {item.dropdown ? (
                    <div
                      className={`flex items-center rounded-xl ${isSubOpen ? "bg-sky-light/60" : ""}`}
                    >
                      <Link
                        to={item.to}
                        onClick={closeMobileMenu}
                        className="flex-1 block px-3 py-3 font-display text-ink"
                      >
                        {item.label}
                      </Link>
                      <button
                        type="button"
                        onClick={() =>
                          setMobileDropdown((cur) => (cur === item.to ? null : item.to))
                        }
                        aria-expanded={isSubOpen}
                        aria-label={`${isSubOpen ? "Tutup" : "Buka"} submenu ${item.label}`}
                        className="grid place-items-center w-11 h-11 shrink-0 text-ink/60 hover:text-merah"
                      >
                        <motion.span
                          animate={{ rotate: isSubOpen ? 180 : 0 }}
                          transition={{ duration: 0.2 }}
                          className="grid place-items-center"
                        >
                          <HiChevronDown size={18} />
                        </motion.span>
                      </button>
                    </div>
                  ) : (
                    <Link
                      to={item.to}
                      onClick={closeMobileMenu}
                      className="block px-3 py-3 rounded-xl font-display text-ink hover:bg-sky-light"
                    >
                      {item.label}
                    </Link>
                  )}
                  {item.dropdown && (
                    <AnimatePresence initial={false}>
                      {isSubOpen && (
                        <motion.ul
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: "auto", opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                          transition={{ duration: 0.2, ease: "easeInOut" }}
                          className="pl-4 overflow-hidden"
                        >
                          {item.dropdown.map((sub) => (
                            <li key={sub.to}>
                              <Link
                                to={sub.to}
                                onClick={closeMobileMenu}
                                className="block px-3 py-2 mt-1 rounded-lg text-sm text-ink/70 hover:text-merah hover:bg-sky-light"
                              >
                                {sub.label}
                              </Link>
                            </li>
                          ))}
                        </motion.ul>
                      )}
                    </AnimatePresence>
                  )}
                </li>
                )
              })}
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
