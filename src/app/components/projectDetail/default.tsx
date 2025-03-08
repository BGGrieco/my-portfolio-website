import "./default.scss";

export default function ProjectDetail({ className, title, subTitle, imageUrl, entities, blurb1, blurb2, blurb3, blurb4, role, onClick }) {
  return (
    <div className={className}>
      <img className="detailImage" src={imageUrl} />
      <div className="detailWords">
        <div className="closeButton" onClick={onClick}></div>
        <h2>{title}</h2>
        <h3>{subTitle}</h3>
        <p className="marginTop_sm"><b>Involved Entities:</b></p>
        <p>{entities}</p>
        <p className="marginTop_xsm"><b>Project Requirements:</b></p>
        <ul>
          <li dangerouslySetInnerHTML={{__html: blurb1}}></li>
          <li dangerouslySetInnerHTML={{__html: blurb2}}></li>
          <li dangerouslySetInnerHTML={{__html: blurb3}}></li>
          <li dangerouslySetInnerHTML={{__html: blurb4}}></li>
        </ul>
        <p className="marginTop_xsm"><b>Role and Responsibilities:</b></p>
        <p>{role}</p>
      </div>
    </div>
  );
}
