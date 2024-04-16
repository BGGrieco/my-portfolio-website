"use client";
import Button from "../button/default";
import EmailIcon from "../../../../public/email.svg";
import PhoneIcon from "../../../../public/phone.svg";

export default function WelcomeCard() {
  return (
    <div className="card relativelyCentered centeredText fullWidth">
      <h1>Brian G. Grieco</h1>
      <h2 className="dark marginBottom_sm">
        UX Research | UI Design | Front-End Dev
      </h2>
      <h3 className="marginBottom_med">
        Location: <span>Milan, Italy</span>
      </h3>
      <div className="buttonContainer">
        <Button href="mailto:brian.g.grieco@gmail.com" svg={<EmailIcon />} text="brian.g.grieco@gmail.com" />
        <Button href="tel:+393707026255" svg={<PhoneIcon />} text="+39 370 702 6255" />
      </div>
    </div>
  );
}
