"use client"
import { useEffect, useState } from "react";
import WindowFunction from "./windowFunction/default";
import "./default.scss";

export default function StatsCards({
    statsTitleOne,
    statsContentOne,
    statsSubtitleOne,
    statsTitleTwo,
    statsContentTwo,
    statsSubtitleTwo
}) {

    const [windowWidth, setWindowWidth] = useState(WindowFunction);

    // function getWindowWidth() {
    //     const { innerWidth: width } = window;
    //     return {
    //         width
    //     };
    // }

    useEffect(() => {
        function handleResize() {
            setWindowWidth(WindowFunction);
        }
        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);

    return (
        <div className="statsContainer">
            <div
            // className={`card statsCard ${getWindowWidth() >= 820 ? 'marginRight_sm marginBottom_med' : 'marginRight_sm marginBottom_sm'}`}
            >
                <p><b>{statsTitleOne}</b></p>
                <h1 className="marginTop_sm marginBottom_sm">
                    <b>{statsContentOne}</b>
                </h1>
                <p className="statsCardSubtitle">{statsSubtitleOne}</p>
            </div>
            <div className="card statsCard">
                <p><b>{statsTitleTwo}</b></p>
                <h1 className="marginTop_sm marginBottom_sm">
                    <b>{statsContentTwo}</b>
                </h1>
                <p className="statsCardSubtitle">{statsSubtitleTwo}</p>
            </div>
        </div>
    );
}
