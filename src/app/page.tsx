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
import ProjectDetail from "./components/projectDetail/default";
import ProjecstInfo from "./projects.json";
import ExperienceInfo from "./experience.json";
import { NEXT_PROJECT_ROOT_DIST } from "next/dist/build/webpack-config";

export default function Home() {

  const [projectContent, setProjectContent] = useState(ProjecstInfo.cyberPilot);
  const [open, setOpen] = useState(false);

  const handleProjectClick = (event) => {
    const value = event.currentTarget.getAttribute("id");
    
    switch (value) {
      case "firstCard": {
        setProjectContent(ProjecstInfo.cyberPilot);
      }
      break;
      case "secondCard": {
        setProjectContent(ProjecstInfo.brembo);
      }
      break;
      case "thirdCard": {
        setProjectContent(ProjecstInfo.areaClienti);
      }
      break;
      case "fourthCard": {
        setProjectContent(ProjecstInfo.unifarco);
      }
      break;
      default: {
        console.log("No Card");
      }
    }

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
          imageUrl={projectContent.imageURL}
          title={projectContent.title}
          subTitle={projectContent.subtitle}
          entities={projectContent.entities}
          blurb1={projectContent.blurb1}
          blurb2={projectContent.blurb2}
          blurb3={projectContent.blurb3}
          blurb4={projectContent.blurb4}
          role={projectContent.role}
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
            <div id="firstCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Wind3 Business"
                subTitle="Cyber Security Portal"
                imageUrl="/w3bCTI.png"
              />
            </div>
            <div id="secondCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="Custom Fit"
                subTitle="The Beginning"
                imageUrl="/customFit.png"
              />
            </div>
            <div id="thirdCard" className="projectCardContainer" onClick={handleProjectClick}>
              <ProjectCard
                title="patientMpower"
                subTitle="Patient app"
                imageUrl="/pMpApp.png"
              />
            </div>
            <div id="fourthCard" className="projectCardContainer" onClick={handleProjectClick}>
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
