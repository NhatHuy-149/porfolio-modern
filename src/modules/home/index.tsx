import React from "react";
import Banner from "./Banner";
import AboutMe from "./AboutMe";
import { aboutMeData } from "@/helpers/data/aboutMe";
import Services from "./Services";
import { servicesData } from "@/helpers/data/services";
import Skills from "./Skills";
import Resume from "./resume";
import { resumeData } from "@/helpers/data/resume";
import Portfolios from "./Portfolios";
import { portfoliosData } from "@/helpers/data/portfilios";
import Blogs from "./Blogs";
import blogsData from "@/helpers/data/blogs";
import Contact from "./Contact";
import contactData from "@/helpers/data/contact";
import TechStack from "./TechStack";
import { techStackData } from "@/helpers/data/tech-stack";
function Home() {
  return (
    <main >
      <Banner />
      <AboutMe data={aboutMeData}/>
      <Services data={servicesData}/>
      {/* <TechStack data={techStackData}/> */}
      <Skills />
      <Resume data={resumeData}/>
      <Portfolios  data={portfoliosData}  />
      <Blogs data={blogsData} />
      <Contact data={contactData} />
    </main>
  );
}

export default Home;
