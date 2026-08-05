import React from "react"
import Header from "./Header"
import Footer from "./Footer"

const Layout = ({ children }) => {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Skip link untuk aksesibilitas & navigasi keyboard */}
      <a
        href="#konten-utama"
        className="sr-only focus:not-sr-only focus:absolute focus:top-3 focus:left-3 focus:z-[100] focus:bg-sun focus:text-ink focus:px-4 focus:py-2 focus:rounded-full"
      >
        Lewati ke konten utama
      </a>
      <Header />
      <main id="konten-utama" className="flex-1">
        {children}
      </main>
      <Footer />
    </div>
  )
}

export default Layout
