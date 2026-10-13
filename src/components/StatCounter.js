import React, { useEffect, useRef, useState } from "react"
import { useInView } from "framer-motion"

const StatCounter = ({ value, suffix = "", label }) => {
  const ref = useRef(null)
  const inView = useInView(ref, { once: true, amount: 0.6 })
  const [count, setCount] = useState(0)

  useEffect(() => {
    if (!inView) return
    let start = 0
    const duration = 1200
    const startTime = performance.now()

    const tick = (now) => {
      const progress = Math.min((now - startTime) / duration, 1)
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * value))
      if (progress < 1) requestAnimationFrame(tick)
      else setCount(value)
    }
    requestAnimationFrame(tick)
  }, [inView, value])

  return (
    <div ref={ref} className="text-center">
      <div className="font-display text-3xl md:text-4xl text-ink">
        {count}
        {suffix}
      </div>
      <div className="text-xs md:text-sm text-ink/60 mt-1">{label}</div>
    </div>
  )
}

export default StatCounter
