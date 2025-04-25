import React from "react"
import SectionTitle from "../../components/layouts/SectionTitle"
import { ReactSVG } from "react-svg"
import { Typography } from "@/components/ui/typography"

interface Props {
  data: any
}

function Services({ data }: Props) {
  return (
    <div id="services" className="spacing-x-container">
      <SectionTitle>Services</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item: any) => (
          <div key={item.id} className="group flex flex-col bg-[#101624] border border-[#232935] rounded-[3px] items-center justify-center gap-6 px-[30px] py-[50px]  shadow-md">
            <div className="bg-[#070D1B] rounded-full w-[92px] h-[92px] flex items-center justify-center border border-[#A9ADB8] group-hover:border-primary transition-all duration-300">
              <ReactSVG src={item.icon.src} className="w-[52px] h-[52px] text-[#A9ADB8] group-hover:text-primary transition-all duration-300" />
            </div>
            <Typography variant="h3" color="tertiary" className="text-center">{item.title}</Typography>
            <Typography className="text-center">{item.description}</Typography>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default Services
