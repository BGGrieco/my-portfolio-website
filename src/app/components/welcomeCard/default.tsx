import Button from "../button/default";
import Email from "../../../../public/email.svg";
import Phone from "../../../../public/phone.svg";
import "./default.scss";

let mailSVG = <Email/>;
let phoneSVG = <Phone/>;

export default function WelcomeCard() {
  return (
    <div className="card relativelyCentered centeredText fullWidth">
      <h1>Brian G. Grieco</h1>
      <h2 className="dark marginBottom_sm">
        UX Research | UI Design | Front-End Dev
      </h2>
      <h3 className="marginBottom_sm">
        Location: <span>Milan, Italy</span>
      </h3>
      <div className="buttonContainer">
        <Button svg={mailSVG} text="brian.g.grieco@gmail.com" />
        <Button svg={phoneSVG} text="+39 370 702 6255" />
      </div>
    </div>
  );
}
