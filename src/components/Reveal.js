import React from "react"
import { motion } from "framer-motion"

/**
 * Membungkus konten dengan animasi fade+slide saat masuk viewport.
 * Menghormati preferensi reduced-motion pengguna secara otomatis (framer-motion).
 */
const Reveal = ({ children, delay = 0, y = 24, className = "" }) => (
  <motion.div
    initial={{ opacity: 0, y }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true, amount: 0.2 }}
    transition={{ duration: 0.6, delay, ease: "easeOut" }}
    className={className}
  >
    {children}
  </motion.div>
)

export default Reveal
