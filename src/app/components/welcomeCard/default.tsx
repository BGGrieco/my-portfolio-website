import Button from "../button/default";
import "./default.scss";

let mailSVG = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path
      d="M10 14.0566L24 28.0566L38 14.0566M8 16.0566V32.0566C8 34.2658 9.79086 36.0566 12 36.0566H36C38.2091 36.0566 40 34.2658 40 32.0566V16.0566C40 13.8475 38.2091 12.0566 36 12.0566H12C9.79086 12.0566 8 13.8475 8 16.0566Z"
      stroke="white"
      stroke-width="4"
      stroke-linecap="round"
      stroke-linejoin="round"
    />
  </svg>
);

let phoneSVG = (
  <svg
    width="48"
    height="49"
    viewBox="0 0 48 49"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
  >
    <g clip-path="url(#clip0_149_328138)">
      <path
        d="M17.5302 7.44523L8.43958 7.7421C7.28305 7.77986 6.39815 8.79084 6.532 9.94021C9.10495 32.0336 16.2158 39.5425 38.1623 41.5793C39.2948 41.6844 40.2744 40.8054 40.3116 39.6687L40.6102 30.5252L34.8881 28.3954C34.1548 28.1225 33.3296 28.3023 32.7763 28.8556L29.3365 32.2953C20.458 30.5719 17.4723 27.6067 15.7601 18.7189L19.1998 15.2791C19.7531 14.7258 19.9329 13.9006 19.66 13.1673L17.5302 7.44523Z"
        stroke="white"
        stroke-width="4"
        stroke-linecap="round"
        stroke-linejoin="round"
      />
    </g>
    <defs>
      <clipPath id="clip0_149_328138">
        <rect
          width="48"
          height="48"
          fill="white"
          transform="translate(0 0.0566406)"
        />
      </clipPath>
    </defs>
  </svg>
);

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
