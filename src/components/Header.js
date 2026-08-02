import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
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

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    window.addEventListener("scroll", onScroll)
    return () => window.removeEventListener("scroll", onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-50 transition-all duration-300 ${
        scrolled ? "bg-paper/95 backdrop-blur shadow-card" : "bg-paper/60 backdrop-blur"
      }`}
    >
      <div className="max-w-6xl mx-auto px-5 md:px-8 flex items-center justify-between h-20">
        <Link to="/" className="flex items-center gap-3 group" aria-label="Beranda SDN Sukasari 5">
          <span className="grid place-items-center w-11 h-11 rounded-full bg-ink text-sun font-display text-lg shadow-pin group-hover:animate-wiggle">
            S5
          </span>
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
          <Link to="/ppdb" className="btn-primary ml-3 !py-2.5 !px-5 text-sm">
            PPDB {new Date().getFullYear()}
          </Link>
        </nav>

        {/* Tombol menu mobile */}
        <button
          type="button"
          className="lg:hidden grid place-items-center w-11 h-11 rounded-full border-2 border-ink text-ink"
          aria-label={open ? "Tutup menu" : "Buka menu"}
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
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
              {navLinks.map((item) => (
                <li key={item.to}>
                  <Link
                    to={item.to}
                    onClick={() => setOpen(false)}
                    className="block px-3 py-3 rounded-xl font-display text-ink hover:bg-sky-light"
                  >
                    {item.label}
                  </Link>
                  {item.dropdown && (
                    <ul className="pl-4 pb-2 space-y-1">
                      {item.dropdown.map((sub) => (
                        <li key={sub.to}>
                          <Link
                            to={sub.to}
                            onClick={() => setOpen(false)}
                            className="block px-3 py-2 rounded-lg text-sm text-ink/70 hover:text-merah"
                          >
                            {sub.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  )}
                </li>
              ))}
              <li className="pt-2">
                <Link to="/ppdb" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Daftar PPDB {new Date().getFullYear()}
                </Link>
              </li>
            </ul>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  )
}

export default Header
