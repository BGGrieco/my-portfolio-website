import styles from "./page.module.css";
import Image from "next/image";
import WelcomeCard from "./components/welcomeCard/default";
import ProjectCard from "./components/projectCard/default";

export default function Home() {
  return (
    <main className={styles.main}>
      <WelcomeCard />

      <Image
        src="/projects.svg"
        alt="Projects"
        layout="responsive"
        className="marginBottom_med"
        width={1344}
        height={176}
      />

      <div className={styles.projectsContainer}>
        <ProjectCard title="Wind3 Business" subTitle="Cyber Security Portal" imageUrl="/w3bCTI.png" />
        <ProjectCard title="Custom Fit" subTitle="The Beginning" imageUrl="/customFit.png" />
        <ProjectCard title="patientMpower" subTitle="Patient app" imageUrl="/phone.png" />
        <ProjectCard title="The Irish Times" subTitle="Listen" imageUrl="/listen.png" />
      </div>

      <Image
        src="/experience.svg"
        alt="Projects"
        layout="responsive"
        className="marginTop_lrg"
        width={1344}
        height={148}
      />
    </main>
  );
}
