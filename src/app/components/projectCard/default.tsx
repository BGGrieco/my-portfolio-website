import "./default.scss";

export default function ProjectCard({ title, subTitle, imageUrl }) {
  return (
    <div className="container">
      <div className="card projectCard">
        <span>
          <h3>{title}</h3>
          <h4>{subTitle}</h4>
        </span>
        <img className="centerImage" src={imageUrl} />
        <img src="/arrow.svg" />
      </div>
    </div>
  );
}
