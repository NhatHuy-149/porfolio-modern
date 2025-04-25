import SectionTitle from "@/components/layouts/SectionTitle"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import Link from "next/link"

function Blogs({ data }: { data: any }) {
  return (
    <div id="blog" className="spacing-x-container">
      <SectionTitle> Latest Blogs</SectionTitle>
      <div className="grid grid-cols-3 gap-10 xlMax:grid-cols-2 mdMax:grid-cols-1">
        {data.map((item: any) => (
          <Link
            key={item.id}
            href={`/blogs/${item.id}`}
            className="group flex flex-col gap-3  w-full rounded-[4px] overflow-hidden"
          >
            <div className="h-[300px] w-full rounded-[4px] overflow-hidden">
              <Image
                src={item.image}
                alt={item.title}
                className="w-full h-full object-cover rounded-md group-hover:scale-105 transition-all duration-300"
              />
            </div>
            <Typography>
              By: <span className="text-primary"> {item.author} </span> | Date:{" "}
              <span className="text-primary"> {item.date}</span>
            </Typography>
            <Typography variant="h4" color="tertiary">
              {item.title}
            </Typography>
          </Link>
        ))}
      </div>
    </div>
  )
}

export default Blogs
