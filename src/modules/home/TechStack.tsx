import React from "react"
import SectionTitle from "../../components/layouts/SectionTitle"
import { ReactSVG } from "react-svg"
import { Typography } from "@/components/ui/typography"

interface Props {
  data: any
}

function TechStack({ data }: Props) {
  return (
    <div id="tech-stack" className="spacing-x-container">
      <SectionTitle>Tech Stack</SectionTitle>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {data.map((item: any) => (
          <div key={item.id} className="group flex flex-col bg-[#101624] border border-[#232935] rounded-[3px] items-center justify-center gap-6 px-[30px] py-[50px]  shadow-md">
            <div className="bg-[#070D1B] rounded-full w-[92px] h-[92px] flex items-center justify-center border border-[#A9ADB8] group-hover:border-primary transition-all duration-300">
              <ReactSVG src={item.icon.src} className="w-[52px] h-[52px] text-[#A9ADB8] group-hover:text-primary transition-all duration-300" />
            </div>
            <Typography variant="h3" color="tertiary" className="text-center">{item.title}</Typography>
            <div  className="flex justify-start items-start flex-wrap gap-2">
              {item.skills.map((skill: any) => (
                <div key={skill.id} className="flex items-center gap-2 bg-[#101624] border border-[#232935] rounded-[3px] px-[10px] py-[5px]">
                  {/* <Icon name={skill.icon as any}  className="w-[24px] h-[24px] text-[#A9ADB8] group-hover:text-primary transition-all duration-300" /> */}
                  <Typography className="text-center">{skill.name}</Typography>
                </div>
              ))}
            </div>
          </div>
        ))} 
      </div>
    </div>
  )
}

export default TechStack
