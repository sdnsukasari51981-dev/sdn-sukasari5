import React from "react"

/**
 * Set atribut lang & beberapa meta keamanan dasar di <html> setiap halaman
 * (lapisan tambahan di luar header HTTP pada static/_headers dan netlify.toml).
 */
export const onRenderBody = ({ setHtmlAttributes, setHeadComponents }) => {
  setHtmlAttributes({ lang: `id` })
  setHeadComponents([
    <meta key="referrer" name="referrer" content="strict-origin-when-cross-origin" />,
    <meta key="x-ua" httpEquiv="X-UA-Compatible" content="IE=edge" />,
  ])
}
