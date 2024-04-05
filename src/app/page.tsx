import styles from "./page.module.css";
import Image from "next/image";
import WelcomeCard from "./components/welcomeCard/default";
import ProjectCard from "./components/projectCard/default";
import ExperienceCard from "./components/experienceCard/default";
import SkillCard from "./components/skillCard/default";
import AboutCard from "./components/aboutCard/default";

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeCard />

      <div id="projectsSection">
        <div id="projects" className="marginBottom_lrg"></div>
        <Image
          src="/projects.png"
          alt="Projects"
          layout="responsive"
          className="marginBottom_med"
          width={2725}
          height={388}
        />

        <div className={styles.projectsContainer}>
          <div className="squaresGrid">
            <ProjectCard
              title="Wind3 Business"
              subTitle="Cyber Security Portal"
              imageUrl="/w3bCTI.png"
            />
            <ProjectCard
              title="Custom Fit"
              subTitle="The Beginning"
              imageUrl="/customFit.png"
            />
            <ProjectCard
              title="patientMpower"
              subTitle="Patient app"
              imageUrl="/pMpApp.png"
            />
            <ProjectCard
              title="The Irish Times"
              subTitle="Listen"
              imageUrl="/listen.png"
            />
          </div>
        </div>
      </div>

      <div id="experienceSection" className={styles.experienceContainer}>
        <div id="experience" className="marginBottom_lrg"></div>
        <Image
          src="/experience.png"
          alt="Experience"
          layout="responsive"
          className="marginBottom_med"
          width={2724}
          height={333}
        />

        <ExperienceCard
          title="Shiroi Studio"
          subtitle="Senior UX/UI Designer"
          period="09/2023 - Now"
          alignment="left"
          imageURL="/shiroi.png"
        />
        <ExperienceCard
          title="The Irish Times"
          subtitle="UX/UI Designer"
          period="11/2019 - 03/2023"
          alignment="right"
          imageURL="/irishTimes.png"
        />
        <ExperienceCard
          title="MEG Support Tools"
          subtitle="Head of Design"
          period="06/2018 - 11/2019"
          alignment="left"
          imageURL="/meg.png"
        />
        <ExperienceCard
          title="MEG Support Tools"
          subtitle="UX/UI Designer"
          period="12/2017 - 06/2018"
          alignment="right"
          imageURL="/meg.png"
        />
        <ExperienceCard
          title="patientMpower"
          subtitle="UX/UI Designer"
          period="12/2017 - 11/2019"
          alignment="left"
          imageURL="/pMp.png"
        />
      </div>

      <div id="skillSection" className={styles.skillContainer}>
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

      <div id="aboutSection" className={styles.aboutContainer}>
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
    </main>
  );
}
