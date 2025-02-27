import "./default.scss";
import Image from "next/image";
import Button from "../button/default"

export default function IntroCard() {

    return (
        <div className="introCardContainer">
            <div className="card introCard">
                <div className="titleContainer">
                    <Image
                        src="/face.png"
                        alt="Brian's headshot"
                        className="marginRight_sm"
                        width={120}
                        height={120}
                        priority={true}
                    />
                    <div className="title">
                        <h1>Brian G. Grieco</h1>
                        <h2>UX Research | UI Design | Front-end Dev</h2>
                    </div>
                </div>

                <div className="buttonContainer marginTop_med">
                        <Button
                            href="mailto:brian.g.grieco@gmail.com"
                            svg=""
                            text="Projects"
                            className="miniButton"
                        />
                        <Button
                            href="tel:+393707026255"
                            svg=""
                            text="Experience"
                            className="miniButton"
                        />
                        <Button
                            href="tel:+393707026255"
                            svg=""
                            text="Skills"
                            className="miniButton"
                        />
                    </div>
            </div>
        </div>
    );
}
