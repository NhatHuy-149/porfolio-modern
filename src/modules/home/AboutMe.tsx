import SectionTitle from "@/components/layouts/SectionTitle"
import React from "react"
import avatar from "../../../public/images/home/avatar2.png"
import Image from "next/image"
import { Typography } from "@/components/ui/typography"
import { Button } from "@/components/ui/button"
import { motion } from "framer-motion"

interface Props{
    data:any
}

function AboutMe({data}:Props) {
    const{greeting,job,introduction,infoDetail,buttonText}=data

    const handleDownload = () => {
      try {
        const link = document.createElement('a');
        link.href = '/CV_Doan_Nhat_Huy_Frontend_Developer.pdf';  // Updated path to use public directory
        link.download = 'CV_Doan_Nhat_Huy_Frontend_Developer.pdf';
        document.body.appendChild(link);
        link.click();
        document.body.removeChild(link);
      } catch (error) {
        console.error('Error downloading CV:', error);
      }
    };

  return (
    <div id="about" className="spacing-x-container">
      <SectionTitle>About me</SectionTitle>
      <div className="flex gap-10 xlMax:flex-col xlMax:gap-[30px]">
        <motion.div 
          className="xlMin:w-1/2" 
          initial={{ opacity: 0, x: -100 }} 
          whileInView={{ opacity: 1, x: 0 }} 
          viewport={{ once: true }}
          transition={{ duration: 0.5 }}
        >
          <Image src={avatar} alt="avatar1" className="transform translate-x-[50px]" />
        </motion.div>
        <div className="xlMin:w-1/2 flex flex-col gap-[18px]">
          <Typography variant={"h2"} color={"tertiary"}>{greeting}</Typography>
          <Typography variant={"h4"} color={"primary"}>{job}</Typography>
          <Typography>
            {introduction}
          </Typography>
          <div>
            <div className="flex flex-col gap-[20px]">
              <div className="flex gap-4" >
                <Typography className="w-[100px]">Birthday</Typography>
                <Typography >:</Typography>
                <Typography>{infoDetail.birthday}</Typography>
              </div>
              <div className="flex gap-4">
                <Typography className="w-[100px]">Phone</Typography>
                <Typography >:</Typography>
                <Typography>{infoDetail.phone}</Typography>
              </div>
              <div className="flex gap-4">
                <Typography className="w-[100px]">Email</Typography>
                <Typography >:</Typography>
                <Typography>{infoDetail.email}</Typography>
              </div>
              <div className="flex gap-4">
                <Typography className="w-[100px]">From</Typography>
                <Typography >:</Typography>
                <Typography>{infoDetail.from}</Typography>
              </div>
              <div className="flex gap-4">
                <Typography className="w-[100px]">Freelance</Typography>
                <Typography >:</Typography>
                <Typography>{infoDetail.Freelance}</Typography>
              </div>
            </div>
          </div>
          
          <Button 
            variant={"default"} 
            className="mt-[40px]" 
            onClick={handleDownload}
          >
            {buttonText}
          </Button>

        </div>

      </div>
    </div>
  )
}

export default AboutMe
