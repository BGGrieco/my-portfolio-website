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
            {/* <svg
              width="240"
              height="53"
              viewBox="0 0 240 53"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H0C0 0 25.3093 3.1361 40 24.7034C43.9376 30.4841 48.8244 38.7149 52.3466 44.8103C55.2552 49.8437 60.6062 53 66.4195 53H173.58C179.394 53 184.745 49.8437 187.653 44.8103C191.176 38.7149 196.062 30.4841 200 24.7034C214.693 3.13217 240 0 240 0Z"
                fill="url(#paint0_linear_69_20175)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_69_20175"
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="47"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="#6F6AF8" stop-opacity="0.2" />
                  <stop offset="1" stop-color="white" stop-opacity="0.6" />
                </linearGradient>
              </defs>
            </svg> */}
          </li>
          <li>
            <a href="#experience">Experience</a>
            <svg
              width="240"
              height="52"
              viewBox="0 0 240 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H0C0 0 30.6903 0 40 23.3051C41.9635 28.2204 44.6702 34.7908 46.9072 40.183C49.3769 46.136 55.1934 50 61.6383 50H178.356C184.804 50 190.623 46.1322 193.092 40.1765C195.343 34.7488 198.064 28.1458 200 23.3051C209.322 0 240 0 240 0Z"
                fill="url(#paint0_linear_138_293506)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_138_293506"
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.4" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li>
            <a href="#skills">Skills</a>
            <svg
              width="240"
              height="52"
              viewBox="0 0 240 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H0C0 0 30.6903 0 40 23.3051C41.9635 28.2204 44.6702 34.7908 46.9072 40.183C49.3769 46.136 55.1934 50 61.6383 50H178.356C184.804 50 190.623 46.1322 193.092 40.1765C195.343 34.7488 198.064 28.1458 200 23.3051C209.322 0 240 0 240 0Z"
                fill="url(#paint0_linear_138_293506)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_138_293506"
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.4" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </li>
          <li>
            <a href="#about">About</a>
            <svg
              width="240"
              height="52"
              viewBox="0 0 240 50"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M240 0H0C0 0 30.6903 0 40 23.3051C41.9635 28.2204 44.6702 34.7908 46.9072 40.183C49.3769 46.136 55.1934 50 61.6383 50H178.356C184.804 50 190.623 46.1322 193.092 40.1765C195.343 34.7488 198.064 28.1458 200 23.3051C209.322 0 240 0 240 0Z"
                fill="url(#paint0_linear_138_293506)"
              />
              <defs>
                <linearGradient
                  id="paint0_linear_138_293506"
                  x1="120"
                  y1="0"
                  x2="120"
                  y2="50"
                  gradientUnits="userSpaceOnUse"
                >
                  <stop stop-color="white" stop-opacity="0.4" />
                  <stop offset="1" stop-color="white" stop-opacity="0.8" />
                </linearGradient>
              </defs>
            </svg>
          </li>
        </ul>
      </div>
    </div>
  );
}
