/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        // Token warna — terinspirasi buku tulis, papan tulis, dan halaman upacara sekolah.
        ink: {
          DEFAULT: "#1B2A4A", // navy tinta — teks & header
          light: "#2E4270",
        },
        chalk: "#FAF6EC", // krem kertas — latar utama
        paper: "#FFFDF8",
        sky: {
          DEFAULT: "#3E7CB1", // biru langit lapangan upacara
          light: "#EAF3FA",
        },
        sun: {
          DEFAULT: "#F4B942", // kuning krayon — aksen ceria
          light: "#FDF0D3",
        },
        merah: {
          DEFAULT: "#D6483F", // merah berani, nuansa merah-putih
          light: "#FBE6E4",
        },
        daun: {
          DEFAULT: "#5B9279", // hijau daun — ekstrakurikuler/prestasi alam
          light: "#E7F1EC",
        },
      },
      fontFamily: {
        display: ["Baloo 2", "system-ui", "sans-serif"],
        body: ["Plus Jakarta Sans", "system-ui", "sans-serif"],
      },
      borderRadius: {
        card: "1.25rem",
      },
      boxShadow: {
        card: "0 10px 30px -12px rgba(27, 42, 74, 0.18)",
        pin: "0 2px 0 0 rgba(0,0,0,0.06)",
      },
      backgroundImage: {
        "dot-grid":
          "radial-gradient(circle, rgba(27,42,74,0.10) 1px, transparent 1px)",
      },
      backgroundSize: {
        "dot-grid": "18px 18px",
      },
      keyframes: {
        float: {
          "0%, 100%": { transform: "translateY(0px) rotate(-2deg)" },
          "50%": { transform: "translateY(-10px) rotate(1deg)" },
        },
        wiggle: {
          "0%, 100%": { transform: "rotate(-1.5deg)" },
          "50%": { transform: "rotate(1.5deg)" },
        },
      },
      animation: {
        float: "float 6s ease-in-out infinite",
        wiggle: "wiggle 4s ease-in-out infinite",
      },
    },
  },
  plugins: [require("@tailwindcss/typography")],
}
