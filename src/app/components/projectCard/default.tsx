import "./default.scss";

export default function ProjectCard({ title, subTitle, imageUrl, pageUrl }) {
  return (
    <a href={pageUrl} className="container">
      <div className="card projectCard">
        <span>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </span>
        <img className="centerImage" src={imageUrl} />
        <img className="arrow" src="/arrow.svg" />
      </div>
    </a>
  );
}
