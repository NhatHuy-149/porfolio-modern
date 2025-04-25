import SectionTitle from "@/components/layouts/SectionTitle"
import { Typography } from "@/components/ui/typography"
import Image from "next/image"
import experience from "../../../public/images/home/ic-experiece.png"
import education from "../../../public/images/home/ic-education.png"
import { Icon } from "@/components/ui/icon"

function Resume({ data }: { data: any }) {
  return (
    <div id="resume" className="spacing-x-container">
      <SectionTitle>Resume</SectionTitle>
      <div className="grid grid-cols-2 gap-10 xlMax:grid-cols-1">
        <div>
          <div className="flex items-center gap-6 mb-[50px]">
            <Image src={experience} alt="Experience" />
            <Typography variant="h2" color="tertiary">
              Experience
            </Typography>
          </div>
          <div className="ml-[20px]">
            {data.experience.map((item: any) => (
              <div
                key={item.id}
                className=" pl-[40px] border-l-[1px] border-[#232935] relative before:content-[''] before:absolute before:left-[-6px] before:top-0 before:w-[10px] before:h-[10px] before:bg-[#101624] before:rounded-full before:border-[1px] before:border-[#232935] hover:before:bg-primary before:transition-all before:duration-300 before:ease-in-out"
              >
                <Typography variant="h3" color="primary" className="mb-2">
                  {item.title}
                </Typography>
                <Typography className="mb-5">{item.date}</Typography>
                <Typography color="tertiary" className="mb-5">
                  {item.company}
                </Typography>
                <Typography color="tertiary" className="mb-5">
                  {item.location}
                </Typography>
                <div  className="pb-[50px]">
                  {item.description.map((description: string) => (
                    <div key={description} className="flex items-start gap-2">
                      <Icon name="FaCheck" className="w-4 h-4 text-primary" />
                      <Typography
                        key={description}
                        color="tertiary"
                        className="mb-5"
                      >
                        {description}
                      </Typography>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
        <div>
          <div className="flex items-center gap-6 mb-[50px]">
            <Image src={education} alt="Education" />
            <Typography variant="h2" color="tertiary">
              Education
            </Typography>
          </div>
          <div className="ml-[20px]">
            {data.education.map((item: any) => (
              <div
                key={item.id}
                className=" pl-[40px] border-l-[1px] border-[#232935] relative before:content-[''] before:absolute before:left-[-6px] before:top-0 before:w-[10px] before:h-[10px] before:bg-[#101624] before:rounded-full before:border-[1px] before:border-[#232935] hover:before:bg-primary before:transition-all before:duration-300 before:ease-in-out"
              >
                <Typography variant="h3" color="primary" className="mb-2">
                  {item.title}
                </Typography>
                <Typography className="mb-5">{item.date}</Typography>
                <Typography color="tertiary" className="mb-5">
                  {item.school}
                </Typography>
                <Typography color="tertiary" className="mb-5">
                  {item.location}
                </Typography>
                <Typography color="tertiary" className="pb-[50px]">{item.description}</Typography>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default Resume
