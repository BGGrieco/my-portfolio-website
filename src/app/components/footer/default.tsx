import "./default.scss";
import AuroraBackground from "../auroraBackground/default";

export default function Footer() {
  return (
    <>
      <div className="safariFix">
        <AuroraBackground />
      </div>
      <div className="footer card">
        <p>Website designed and coded by Brian G. Grieco | <a href="tel:+393707026255">+39 370 702 6255</a> | <a href="mailto:brian.g.grieco@gmail.com">brian.g.grieco@gmail.com</a></p>
      </div>
    </>
  );
}
