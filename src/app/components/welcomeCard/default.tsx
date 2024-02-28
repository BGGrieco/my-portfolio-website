import Button from "../button/default";
import "./default.scss";

export default function WelcomeCard() {
  return (
    <div className="card relativelyCentered centeredText marginBottom_lrg fullWidth">
      <h1>Brian G. Grieco</h1>
      <h2 className="dark marginBottom_sm">
        UX Research | UI Design | Front-End Dev
      </h2>
      <h3 className="marginBottom_sm">
        Location: <span>Milan, Italy</span>
      </h3>
      <div className="buttonContainer">
        <Button imageUrl="/email.svg" text="brian.g.grieco@gmail.com" />
        <Button imageUrl="/phone.svg" text="+39 370 702 6255" />
      </div>
    </div>
  );
}
