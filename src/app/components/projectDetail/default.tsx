import "./default.scss";

export default function ProjectDetail({ className, title, subTitle, imageUrl, blurb }) {
  return (
    <div className={className}>
      <img className="detailImage" src={imageUrl} />
      <div className="detailWords">
        <div className="closeButton"></div>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p className="marginTop_sm">{blurb}</p>
      </div>
    </div>
  );
}
