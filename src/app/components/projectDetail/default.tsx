import "./default.scss";

export default function ProjectDetail({ title, subTitle, imageUrl, blurb }) {
  return (
    <div className="card projectDetail">
      <img className="detailImage" src={imageUrl} />
      <div className="detailWords">
        <img className="arrow" src="/arrow.svg" />
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p className="marginTop_sm">{blurb}</p>
      </div>
    </div>
  );
}
