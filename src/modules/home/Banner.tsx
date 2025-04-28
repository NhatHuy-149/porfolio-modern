import { Button } from "@/components/ui/button"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import React, { useEffect, useState } from "react"
import avatar from "../../../public/images/home/avatar1.jpg"
import SocialMedia from "@/components/layouts/SocialMedia"
import ParticlesContainer from "@/components/ui/particles"
import bannerData from "@/helpers/data/banner"
import Link from "next/link"
import { motion } from "framer-motion"
function Banner() {
  const [scrollPosition, setScrollPosition] = useState(0)

  useEffect(() => {
    const handleScroll = () => {
      setScrollPosition(window.scrollY)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <div id="home" className="h-[710px] relative overflow-hidden">
      <div className="spacing-x-container flex items-center h-full">
        <div className="lgMin:w-[50%]  ">
          <Typography variant={"h3"} color={"primary"} className="mb-[10px]">
            {bannerData.title}
          </Typography>
          <Typography
            variant={"h1"}
            color={"tertiary"}
            fontWeight="semibold"
            className="mb-[24px]"
          >
            {bannerData.name}
          </Typography>
          <Typography variant={"h2"} className="mb-[41px]">
            {bannerData.job}
          </Typography>
          <Link href={bannerData.buttonLink}>
            <Button variant={"default"} className="bg-primary ">
              {bannerData.button}
            </Button>
          </Link>
        </div>
        <div>
          <motion.div
            className="absolute w-[45%] h-full bottom-0 right-[0] transition-all duration-300"

            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: scrollPosition * 0.1  }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
          >
            <Image
              src={avatar}
              alt="avatar1"
              className="w-full h-full object-cover"
            />
          </motion.div>
          <motion.div
            className="absolute bottom-0 bg-[#101624] p-3 rounded-l-full border-2 border-[#232935] right-[45%] transition-all duration-300"
            initial={{ opacity: 0, x: 0 }}
            whileInView={{ opacity: 1, x: scrollPosition * 0.1  }} 
            viewport={{ once: true }} 
            transition={{ duration: 0.5 }}
          >
            <SocialMedia />
          </motion.div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[-100]">
        <ParticlesContainer />
      </div>
    </div>
  )
}

export default Banner
