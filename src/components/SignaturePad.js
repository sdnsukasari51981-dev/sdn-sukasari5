import React, { useRef, useState, useEffect } from "react"
import { HiOutlineRefresh } from "react-icons/hi"

const LEBAR = 600
const TINGGI = 200

/**
 * Kanvas tanda tangan (mouse, sentuh, dan stylus lewat Pointer Events).
 * Hasilnya PNG transparan berukuran kecil, dikirim lewat `onChange(dataUrl | null)`.
 * Ubah nilai `resetSignal` untuk mengosongkan kanvas dari luar (mis. setelah submit).
 */
const SignaturePad = ({ onChange, resetSignal = 0, invalid = false, describedBy }) => {
  const canvasRef = useRef(null)
  const drawing = useRef(false)
  const [hasInk, setHasInk] = useState(false)

  const posisi = (e) => {
    const canvas = canvasRef.current
    const rect = canvas.getBoundingClientRect()
    return {
      x: ((e.clientX - rect.left) * canvas.width) / rect.width,
      y: ((e.clientY - rect.top) * canvas.height) / rect.height,
    }
  }

  const siapkanKonteks = () => {
    const ctx = canvasRef.current.getContext("2d")
    ctx.lineWidth = 3
    ctx.lineCap = "round"
    ctx.lineJoin = "round"
    ctx.strokeStyle = "#1B2A4A"
    return ctx
  }

  const mulai = (e) => {
    e.preventDefault()
    canvasRef.current.setPointerCapture(e.pointerId)
    drawing.current = true
    const ctx = siapkanKonteks()
    const { x, y } = posisi(e)
    ctx.beginPath()
    ctx.moveTo(x, y)
    ctx.lineTo(x + 0.01, y + 0.01) // titik tunggal tetap terlihat
    ctx.stroke()
  }

  const gerak = (e) => {
    if (!drawing.current) return
    e.preventDefault()
    const ctx = canvasRef.current.getContext("2d")
    const { x, y } = posisi(e)
    ctx.lineTo(x, y)
    ctx.stroke()
  }

  const selesai = () => {
    if (!drawing.current) return
    drawing.current = false
    setHasInk(true)
    onChange(canvasRef.current.toDataURL("image/png"))
  }

  const hapus = () => {
    const canvas = canvasRef.current
    canvas.getContext("2d").clearRect(0, 0, canvas.width, canvas.height)
    drawing.current = false
    setHasInk(false)
    onChange(null)
  }

  useEffect(() => {
    hapus()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [resetSignal])

  return (
    <div>
      <div
        className={`relative rounded-xl border bg-white overflow-hidden ${
          invalid ? "border-merah" : "border-ink/15"
        }`}
      >
        <canvas
          ref={canvasRef}
          width={LEBAR}
          height={TINGGI}
          onPointerDown={mulai}
          onPointerMove={gerak}
          onPointerUp={selesai}
          onPointerCancel={selesai}
          className="block w-full h-auto touch-none cursor-crosshair"
          role="img"
          aria-label="Area tanda tangan. Gambar tanda tangan Anda dengan mouse atau jari."
          aria-describedby={describedBy}
        />
        {!hasInk && (
          <span className="pointer-events-none absolute inset-0 grid place-items-center text-sm text-ink/30">
            Tanda tangan di sini
          </span>
        )}
        <span
          aria-hidden="true"
          className="pointer-events-none absolute left-6 right-6 bottom-8 border-b border-dashed border-ink/20"
        />
      </div>
      <button
        type="button"
        onClick={hapus}
        className="mt-2 inline-flex items-center gap-1.5 text-xs font-semibold text-ink/60 hover:text-merah"
      >
        <HiOutlineRefresh aria-hidden="true" /> Hapus &amp; ulangi
      </button>
    </div>
  )
}

export default SignaturePad
