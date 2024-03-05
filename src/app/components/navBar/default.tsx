"use client";
import "./default.scss";
import Selector from "../../../../public/selector.svg";

export default function NavBar() {
  return (
    <div className="navBar">
      <div className="card">
        <ul
          onClick={(event: React.SyntheticEvent) => {
            event.preventDefault();
            const target = event.target as HTMLAnchorElement;
            const id = target.getAttribute("href")?.replace("#", "");
            const element = document.getElementById(String(id));
            element?.scrollIntoView({
              behavior: "smooth",
            });
          }}
        >
          <li>
            <a href="#projects">Projects</a>
            <Selector />
          </li>
          <li>
            <a href="#experience">Experience</a>
            <Selector />
          </li>
          <li>
            <a href="#skills">Skills</a>
            <Selector />
          </li>
          <li>
            <a href="#about">About</a>
            <Selector />
          </li>
        </ul>
      </div>
    </div>
  );
}
