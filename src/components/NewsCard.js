import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineCalendar, HiArrowRight, HiOutlineExternalLink } from "react-icons/hi"

const NewsCard = ({ title, date, excerpt, slug, image, category, externalUrl }) => {
  const img = image && getImage(image)
  const isExternal = Boolean(externalUrl)
  const CardTag = isExternal ? "a" : Link
  const linkProps = isExternal
    ? { href: externalUrl, target: "_blank", rel: "noopener noreferrer" }
    : { to: slug }

  return (
    <CardTag
      {...linkProps}
      className="group block report-card overflow-hidden hover:-translate-y-1 transition-transform duration-300"
    >
      {img ? (
        <GatsbyImage image={img} alt={title} className="rounded-2xl mb-4 aspect-[4/3]" />
      ) : (
        <div className="rounded-2xl mb-4 aspect-[4/3] bg-sky-light grid place-items-center text-sky">
          <span className="font-display text-sm">SDN Sukasari 5</span>
        </div>
      )}
      {category && <span className="eyebrow mb-2">{category}</span>}
      <h3 className="font-display text-lg text-ink leading-snug group-hover:text-merah transition-colors">
        {title}
      </h3>
      <p className="text-sm text-ink/60 mt-2 line-clamp-2">{excerpt}</p>
      <div className="flex items-center justify-between mt-4 text-xs text-ink/50">
        <span className="flex items-center gap-1.5">
          <HiOutlineCalendar /> {date}
        </span>
        <span className="flex items-center gap-1 text-merah font-semibold opacity-0 group-hover:opacity-100 transition-opacity">
          {isExternal ? (
            <>
              Baca di situs resmi <HiOutlineExternalLink />
            </>
          ) : (
            <>
              Baca <HiArrowRight />
            </>
          )}
        </span>
      </div>
    </CardTag>
  )
}

export default NewsCard
