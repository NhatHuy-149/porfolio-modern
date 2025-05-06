import SectionTitle from "@/components/layouts/SectionTitle"
import { Button } from "@/components/ui/button"
import { Icon } from "@/components/ui/icon"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Typography } from "@/components/ui/typography"
import SocialMedia from "@/components/layouts/SocialMedia"
import SendMail from "@/components/layouts/SendMail"
const Contact = ({ data }: { data: any }) => {



  return (
    <div id="contact" className="spacing-x-container">
      <SectionTitle>Contact Me</SectionTitle>
      <div className="grid grid-cols-2 mdMax:grid-cols-1 gap-10">
        <div>
          <Typography variant="h3" color="tertiary" className="mb-6">
            Just say hello
          </Typography>
          <SendMail />
        </div>
        <div>
          <Typography variant="h3" color="tertiary" className="mb-6">
            Contact Info
          </Typography>
          <div>
            <div className="flex flex-col gap-6">
              <Typography>
                {/* Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc */}
              </Typography>
              {data.map((item: any) => (
                <div key={item.id} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary">
                    <Icon name={item.icon} className="w-5 h-5" />
                  </div>
                  <div>
                    <Typography variant="h5" color="tertiary">
                      {item.title}
                    </Typography>
                    <Typography>{item.description}</Typography>
                  </div>
                </div>
              ))}
              <Typography>
                Visit my social profile and get connected
              </Typography>
              {/* <div className="flex items-center gap-4">
                <div className="group flex items-center justify-center  w-12 h-12 rounded-full border border-secondary hover:bg-secondary/10 transition-all duration-300 overflow-hidden">
                  <Icon name="FaFacebook" className="w-5 h-5" />
                  <Typography variant="h5" color="tertiary" className=" ">Facebook</Typography>
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary">
                  <Icon name="FaTwitter" className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary">
                    <Icon name="FaInstagram" className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary">
                  <Icon name="FaLinkedin" className="w-5 h-5" />
                </div>
                <div className="flex items-center justify-center w-12 h-12 rounded-full border border-secondary">
                  <Icon name="FaGithub" className="w-5 h-5" />
                </div>
              </div> */}
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Contact
