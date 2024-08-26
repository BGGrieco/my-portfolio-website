import styles from "./page.module.css";
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

export default function Home() {
  return (
    <main className={styles.main}>
      <Hero />
      <div className="gradient"></div>
      <Intro />
      <div className="spacerOne"></div>
      <BrokenText />
      <div className="spacerTwo"></div>
      <div className="spacerTwo"></div>
      <div className="feed">
      <AuroraBackground />
        <div id="projectsSection" className={styles.section}>
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
            <ProjectCard
              title="Wind3 Business"
              subTitle="Cyber Security Portal"
              imageUrl="/w3bCTI.png"
              pageUrl="https://www.windtrebusiness.it/grandi-aziende/servizi/cyber-security"
            />
            <ProjectCard
              title="Custom Fit"
              subTitle="The Beginning"
              imageUrl="/customFit.png"
              pageUrl="https://github.com/BGGrieco/CustomFit"
            />
            <ProjectCard
              title="patientMpower"
              subTitle="Patient app"
              imageUrl="/pMpApp.png"
              pageUrl="https://play.google.com/store/apps/details?id=com.maithu.transplantbuddy&hl=en_IE&pli=1"
            />
            <ProjectCard
              title="The Irish Times"
              subTitle="Listen"
              imageUrl="/listen.png"
              pageUrl="https://www.irishtimes.com/listen/"
            />
          </div>
        </div>

        <div id="experienceSection" className={styles.section}>
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

        <div id="skillSection" className={styles.section}>
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

        <div id="aboutSection" className={styles.section}>
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
