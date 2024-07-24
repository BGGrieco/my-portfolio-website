import "./default.scss";
import Link from "next/link";

export default function ProjectCard({ title, subTitle, imageUrl, pageUrl }) {
  return (
    <Link href={pageUrl} className="container">
      <div className="card projectCard">
        <span>
          <h3>{title}</h3>
          <p>{subTitle}</p>
        </span>
        <img className="centerImage" src={imageUrl} />
        <img className="arrow" src="/arrow.svg" />
      </div>
    </Link>
  );
}
