import styles from "./page.module.css";
import Image from "next/image";
import WelcomeCard from "./components/welcomeCard/default";
import ProjectCard from "./components/projectCard/default";

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeCard />

      <div id="projects" className="marginBottom_lrg"></div>

      <Image
        src="/projects.png"
        alt="Projects"
        layout="responsive"
        className="marginBottom_med"
        width={1344}
        height={176}
      />

      <div id="projectsSection" className={styles.projectsContainer}>
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
          imageUrl="/phone.png"
        />
        <ProjectCard
          title="The Irish Times"
          subTitle="Listen"
          imageUrl="/listen.png"
        />
      </div>

      <div id="experience" className="marginBottom_lrg"></div>

      <Image
        src="/experience.png"
        alt="Projects"
        layout="responsive"
        width={1344}
        height={148}
      />

      <div id="experienceSection" className={styles.projectsContainer}>
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
          imageUrl="/phone.png"
        />
        <ProjectCard
          title="The Irish Times"
          subTitle="Listen"
          imageUrl="/listen.png"
        />
      </div>

      <div id="skills" className="marginBottom_lrg"></div>

      <Image
        src="/experience.png"
        alt="Projects"
        layout="responsive"
        width={1344}
        height={148}
      />

      <div id="skillSection" className={styles.projectsContainer}>
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
          imageUrl="/phone.png"
        />
        <ProjectCard
          title="The Irish Times"
          subTitle="Listen"
          imageUrl="/listen.png"
        />
      </div>

      <div id="about" className="marginBottom_lrg"></div>

      <Image
        src="/experience.png"
        alt="Projects"
        layout="responsive"
        width={1344}
        height={148}
      />

      <div id="aboutSection" className={styles.projectsContainer}>
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
          imageUrl="/phone.png"
        />
        <ProjectCard
          title="The Irish Times"
          subTitle="Listen"
          imageUrl="/listen.png"
        />
      </div>
    </main>
  );
}
