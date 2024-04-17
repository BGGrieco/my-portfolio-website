import SkillComponent from "./skillComponent/default";
import "./default.scss";

export default function SkillCard() {
  return (
    <div className="skillCard card relativelyCentered fullWidth">
      <div className="creative">
        <h3 className="marginBottom_sm">CREATIVE</h3>
        <SkillComponent
          name="Figma"
          alignment=""
          imageUrl="/figma.png"
        />

        <SkillComponent
          name="Sketch"
          altText="Sketch icon"
          alignment="offset"
          imageUrl="/sketch.png"
        />

        <SkillComponent
          name="Photoshop"
          alignment=""
          imageUrl="/photoshop.png"
        />

        <SkillComponent
          name="Illustrator"
          alignment="offset"
          imageUrl="/illustrator.png"
        />

        <SkillComponent
          name="AfterEffects"
          alignment=""
          imageUrl="/aftereffects.png"
        />
      </div>
      <div className="technical">
        <h3 className="marginBottom_sm">TECHNICAL</h3>
        <SkillComponent
          name="SCSS"
          alignment=""
          imageUrl="/scss.png"
        />

        <SkillComponent
          name="JavaScript"
          alignment="offset"
          imageUrl="/js.png"
        />

        <SkillComponent
          name="jQuery"
          alignment=""
          imageUrl="/jq.png"
        />

        <SkillComponent
          name="React"
          alignment="offset"
          imageUrl="/rea.png"
        />

        <SkillComponent
          name="Angular"
          alignment=""
          imageUrl="/ang.png"
        />
      </div>
    </div>
  );
}
