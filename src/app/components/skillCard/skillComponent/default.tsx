import "./default.scss";

export default function SkillComponent({name, imageUrl, alignment}) {
  return (
    <div className={`skillTypeContainer ${alignment}`}>
      <img src={imageUrl} alt={name + " icon"} />
      <div className="skillName card centeredText">
        <h4>{name}</h4>
      </div>
    </div>
  );
}
