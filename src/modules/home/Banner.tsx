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
    <div id="home" className="h-[700px] xxlMax:h-[670px]  mdMax:h-[500px] relative overflow-hidden">
      <div className="spacing-x-container flex items-center h-full">
        <div className="lgMin:w-[50%] mdMax:mt-12">
          <Typography variant={"h3"} color={"primary"} className="mb-[10px]">
            {bannerData.title}
          </Typography>
          <Typography
            variant={"h1"}
            color={"tertiary"}
            fontWeight="semibold"
            className="mb-[24px] mdMax:text-[72px]"
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
        <div className="mdMax:hidden">
          <div
            className="absolute w-[45%] h-full bottom-0 right-[0] transition-all duration-300"
            style={{
              transform: `translateX(${scrollPosition * 0.1}px)`
            }}
          >
            <Image
              src={avatar}
              alt="avatar1"
              className="w-full h-full"
            />
          </div>
          <div
            className="absolute bottom-0 bg-[#101624] p-3 rounded-l-full border-2 border-[#232935] right-[45%] transition-all duration-300"
            style={{
              transform: `translateX(${scrollPosition * 0.1}px)`
            }}
          >
            <SocialMedia />
          </div>
        </div>
      </div>
      <div className="absolute top-0 left-0 w-full h-full z-[-100]">
        <ParticlesContainer />
      </div>
    </div>
  )
}

export default Banner
