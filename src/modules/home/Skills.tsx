import React from "react"
import SectionTitle from "../../components/layouts/SectionTitle"
import { Typography } from "@/components/ui/typography"
import { skillsData } from "@/helpers/data/skills"
import Progress from "@/components/ui/progress"
import { motion } from "framer-motion"
function Skills() {
  return (
    <div id="skills" className="spacing-x-container">
      <SectionTitle>My Skills</SectionTitle>
      <div className="flex gap-10 xlMax:flex-col">
        <div className="w-[50%] xlMax:w-full">
          <Typography variant="h2" color="tertiary" className="mb-[20px]">
            All the skills that I have in that field of work are mentioned.
          </Typography>
          <Typography>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo
            dolores. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy eirmod tempor invidunt.
          </Typography>
        </div>
        <div className="w-[50%] xlMax:w-full flex flex-col gap-[20px]">
          {skillsData.map((skill) => (
            <div key={skill.id}>
              <div className="flex justify-between mb-[8px]">
                <Typography variant="h5" color="tertiary">
                  {skill.name}
                </Typography>
                <motion.div
                  initial={{ opacity: 0, y: 100 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5 }}
                >
                  <Typography color="primary">{skill.percentage}%</Typography>
                </motion.div>
              </div>
              <Progress value={skill.percentage} />
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Skills
