import "./default.scss";

export default function ExperienceCard({
  title,
  subtitle,
  period,
  info1,
  info2,
  content1,
  content2,
  linkURL,
}) {
  return (
    <div className="card experienceCard">
      <div className="textContainer">
        <div>
          <a href={linkURL}>
            <h3>{title}</h3>
          </a>
          <p className="marginTop_xsm">
            <b>{subtitle}</b>
          </p>
        </div>
        <p className="rightText">{period}</p>
      </div>
      <div className="textContainer marginTop_med experienceContent">
        <p>
          <b>{info1}</b>
          <br />
          {content1}
        </p>
        <p>
          <b>{info2}</b>
          <br />
          {content2}
        </p>
      </div>
    </div>
  );
}
