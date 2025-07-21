"use client";
import Image from "next/image";
import Button from "../button/default"
import "./default.scss";

export default function IntroCard() {
    return (
        <div className="introCardContainer">
            <div className="card introCard">
                <div className="titleContainer">
                    <Image
                        src="/face.png"
                        alt="Brian's headshot"
                        className="marginRight_sm"
                        width={150}
                        height={150}
                        priority={true}
                    />
                    <div className="title">
                        <h1>Brian G. Grieco</h1>
                        <h2>Product Manager | Experience Researcher</h2>
                    </div>
                </div>

                <div className="buttonContainer marginTop_med">
                    <Button
                        href="#projectsSection"
                        svg=""
                        text="Projects"
                        className="miniButton"
                        onClick={(event: React.SyntheticEvent) => {
                            event.preventDefault();
                            const element = document.getElementById(String("projectsSection"));
                            console.log("clicked");
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    />
                    <Button
                        href="#experienceSection"
                        svg=""
                        text="Experience"
                        className="miniButton"
                        onClick={(event: React.SyntheticEvent) => {
                            event.preventDefault();
                            const element = document.getElementById(String("experienceSection"));
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    />
                    <Button
                        href="aboutSection"
                        svg=""
                        text="About"
                        className="miniButton"
                        onClick={(event: React.SyntheticEvent) => {
                            event.preventDefault();
                            const element = document.getElementById(String("aboutSection"));
                            element?.scrollIntoView({
                                behavior: "smooth",
                            });
                        }}
                    />
                </div>
            </div>
        </div>
    );
}
