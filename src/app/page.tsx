"use client"
import React, { useState } from "react";
import Image from "next/image";
import Hero from "./components/hero/default";
import Intro from "./components/intro/default";
import BrokenText from "./components/brokenText/default";
import AuroraBackground from "./components/auroraBackground/default";
import ProjectCard from "./components/projectCard/default";
import ExperienceCard from "./components/experienceCard/default";
import SkillCard from "./components/skillCard/default";
import AboutCard from "./components/aboutCard/default";
import ExperienceInfo from "./experience.json";
import ProjectDetail from "./components/projectDetail/default";

export default function Home() {

  const [open, setOpen] = useState(false);

  const handleProjectClick = event => {
    setOpen(current => !current);
  };

  return (
    <main className={`main ${open ? 'noScroll' : ''}`}>
      <Hero />
      <div className="gradient"></div>
      <Intro />
      <div className="spacerOne"></div>
      <BrokenText />
      <div className="spacerTwo"></div>
      <div className="spacerTwo"></div>

      <div className="feed">
        <AuroraBackground />

        <div className={`overlay ${open ? 'overlayOpen' : ''}`} onClick={handleProjectClick}></div>

        <ProjectDetail
          className={`card projectDetail ${open ? 'open' : ''}`}
          title="Windtre Business"
          subTitle="Cyber Security Portal"
          imageUrl="/cyberPilotDashboard.png"
          blurb="Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?"
        />

        <div id="projectsSection" className="section">
          <div id="projects" className="marginBottom_lrg"></div>
          <Image
            src="/projects.png"
            alt="Projects"
            layout="responsive"
            className="marginBottom_med"
            width={2725}
            height={388}
            priority={true}
          />

          <div className="squaresGrid">
            <div className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Wind3 Business"
                subTitle="Cyber Security Portal"
                imageUrl="/w3bCTI.png"
              />
            </div>
            <div className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Custom Fit"
                subTitle="The Beginning"
                imageUrl="/customFit.png"
              />
            </div>
            <div className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="patientMpower"
                subTitle="Patient app"
                imageUrl="/pMpApp.png"
              />
            </div>
            <div className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="The Irish Times"
                subTitle="Listen"
                imageUrl="/listen.png"
              />
            </div>
          </div>
        </div>

        <div id="experienceSection" className="section">
          <div id="experience" className="marginBottom_lrg"></div>
          <Image
            src="/experience.png"
            alt="Experience"
            layout="responsive"
            className="marginBottom_med"
            width={2724}
            height={333}
          />

          {ExperienceInfo.experience.map((item) => (
            <ExperienceCard
              key={item.id}
              title={item.title}
              subtitle={item.subtitle}
              period={item.period}
              alignment={item.alignment}
              imageURL={item.imageURL}
              info1={item.info1}
              info2={item.info2}
              content1={item.content1}
              content2={item.content2}
              linkURL={item.linkURL}
            />
          ))}
        </div>

        <div id="skillSection" className="section">
          <div id="skills" className="marginBottom_lrg"></div>
          <Image
            src="/skills.png"
            alt="Skills"
            layout="responsive"
            className="marginBottom_med"
            width={2726}
            height={558}
          />

          <SkillCard />
        </div>

        <div id="aboutSection" className="section">
          <div id="about" className="marginBottom_lrg"></div>
          <Image
            src="/about.png"
            alt="About"
            layout="responsive"
            className="marginBottom_med"
            width={2726}
            height={569}
          />

          <AboutCard />
        </div>
      </div>
    </main>
  );
}
