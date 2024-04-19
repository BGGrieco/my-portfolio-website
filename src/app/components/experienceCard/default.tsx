import "./default.scss";

export default function ExperienceCard({
  title,
  subtitle,
  period,
  imageURL,
  alignment,
  info1,
  info2,
  content1,
  content2,
  linkURL,
}) {
  return (
    <div className={`experienceContainer marginBottom_med ${alignment}`}>
      <div className="card opaque experienceCard">
        <div className="textContainer">
          <div>
            <a href={linkURL}>
              <h3>{title}</h3>
            </a>
            <h4 className="marginTop_xsm">
              <b>{subtitle}</b>
            </h4>
          </div>
          <h4>{period}</h4>
        </div>
        <div className="textContainer marginTop_med experienceContent">
          <h4>
            <b>{info1}</b>
            <br />
            {content1}
          </h4>
          <h4>
            <b>{info2}</b>
            <br />
            {content2}
          </h4>
        </div>
      </div>
      <a className="imgContainer" href={linkURL}>
        <img src={imageURL}></img>
      </a>
    </div>
  );
}
