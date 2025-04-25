import { useState } from "react"
import { Icon } from "../ui/icon"
import { Typography } from "../ui/typography"
import socialMedia from "../../helpers/data/socialMedia"
import Link from "next/link"

const SocialMedia = () => {
  return (
    <div className="flex items-center gap-4">
      {socialMedia.map((item) => (
        <Link
          key={item.id}
          href={item.link}
          target="_blank"
          className="group flex items-center justify-center rounded-full border border-secondary"
        >
          <div className="w-12 h-12 flex items-center justify-center">
            <Icon name={item.icon as any} className="w-5 h-5 block" />
          </div>
          <Typography
            variant="h5"
            color="tertiary"
            className="overflow-hidden  max-w-0 pr-0 group-hover:max-w-[200px] group-hover:pr-4 transition-all duration-500 "
          >
            {item.name}
          </Typography>
        </Link>
      ))}
    </div>
  )
}

export default SocialMedia
