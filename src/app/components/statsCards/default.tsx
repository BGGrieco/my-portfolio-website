import { useEffect, useState } from "react";
import "./default.scss";

export default function StatsCards({
    statsTitleOne,
    statsContentOne,
    statsSubtitleOne,
    statsTitleTwo,
    statsContentTwo,
    statsSubtitleTwo
}) {
    const [windowSize, setWindowSize] = useState(window.innerWidth)
    useEffect(() => {
        const updateWindowDimensions = () => {
            setWindowSize(window.innerWidth)
        }
        window.addEventListener('resize', updateWindowDimensions)
        return () => window.removeEventListener('resize', updateWindowDimensions)
    }, [])

    return (
        <div className="statsContainer">
            <div className={`card statsCard ${windowSize <= 520 ? 'marginRight_sm' : 'marginBottom_med'}`}>
                <p><b>{statsTitleOne}</b></p>
                <h1 className="marginTop_sm marginBottom_sm">
                    <b>{statsContentOne}</b>
                </h1>
                <p className="statsCardSubtitle">{statsSubtitleOne}</p>
            </div>
            <div className={`card statsCard ${windowSize <= 520 ? 'marginLeft_sm' : 'marginTop_med'}`}>
                <p><b>{statsTitleTwo}</b></p>
                <h1 className="marginTop_sm marginBottom_sm">
                    <b>{statsContentTwo}</b>
                </h1>
                <p className="statsCardSubtitle">{statsSubtitleTwo}</p>
            </div>
        </div>
    );
}
