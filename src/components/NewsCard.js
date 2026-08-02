import React from "react"
import { Link } from "gatsby"
import { GatsbyImage, getImage } from "gatsby-plugin-image"
import { HiOutlineCalendar, HiArrowRight } from "react-icons/hi"

const NewsCard = ({ title, date, excerpt, slug, image, category }) => {
  const img = image && getImage(image)
  return (
    <Link to={slug} className="group block report-card overflow-hidden hover:-translate-y-1 transition-transform duration-300">
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
          Baca <HiArrowRight />
        </span>
      </div>
    </Link>
  )
}

export default NewsCard
