import React from "react"

/**
 * Bentuk organik ala "guntingan kertas kerajinan tangan" — motif tanda tangan
 * situs ini, mengambil kosakata visual dari prakarya anak SD.
 */
export const BlobSun = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M45.4,-58.2C58.6,-49.7,69.2,-35.6,73.6,-19.7C78,-3.8,76.2,13.9,68.6,28.5C61,43.1,47.6,54.6,32.4,61.9C17.2,69.2,0.2,72.3,-16.4,69.6C-33,66.9,-49.2,58.4,-59.6,45.1C-70,31.8,-74.6,13.7,-73.1,-3.6C-71.6,-20.9,-64,-37.4,-51.6,-46.4C-39.2,-55.4,-22,-56.9,-4.6,-51.2C12.8,-45.5,32.2,-66.7,45.4,-58.2Z"
      transform="translate(100 100)"
    />
  </svg>
)

export const BlobLeaf = ({ className = "" }) => (
  <svg viewBox="0 0 200 200" className={className} aria-hidden="true">
    <path
      fill="currentColor"
      d="M39.5,-51.6C50.4,-42.8,57.6,-29.4,61.4,-14.7C65.2,0,65.6,16,59.2,28.9C52.9,41.8,39.8,51.6,25.4,57.8C11,64,-4.7,66.6,-19.6,63.1C-34.5,59.6,-48.6,50,-56.9,36.7C-65.2,23.4,-67.7,6.4,-64.3,-9.1C-60.9,-24.6,-51.6,-38.6,-39.2,-47.5C-26.8,-56.4,-13.4,-60.2,0.9,-61.4C15.2,-62.6,28.6,-60.4,39.5,-51.6Z"
      transform="translate(100 100)"
    />
  </svg>
)

export const TornEdge = ({ className = "", flip = false }) => (
  <svg
    viewBox="0 0 1200 40"
    preserveAspectRatio="none"
    className={className}
    style={flip ? { transform: "scaleY(-1)" } : undefined}
    aria-hidden="true"
  >
    <path
      fill="currentColor"
      d="M0,0 L0,20 L40,32 L80,14 L120,30 L160,10 L200,26 L240,8 L280,28 L320,12 L360,24 L400,6 L440,30 L480,14 L520,26 L560,10 L600,28 L640,12 L680,24 L720,6 L760,30 L800,14 L840,26 L880,10 L920,28 L960,12 L1000,24 L1040,6 L1080,30 L1120,14 L1160,26 L1200,10 L1200,0 Z"
    />
  </svg>
)
