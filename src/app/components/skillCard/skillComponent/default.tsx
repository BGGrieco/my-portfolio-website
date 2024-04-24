import "./default.scss";

export default function SkillComponent({ name, imageUrl, anchorUrl, alignment }) {
  return (
    <div className={`skillTypeContainer ${alignment}`}>
      <img src={imageUrl} alt={name + " icon"} />
      <a href={anchorUrl} className="skillName card opaque centeredText">
          <h4>{name}</h4>
      </a>
    </div>
  );
}
