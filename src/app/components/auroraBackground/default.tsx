"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function AuroraBackground() {
  const [opacity, setOpacity] = useState("0");

  function scrollOpacity() {
    let num = -0.4 + (window.scrollY / window.innerHeight);
    let result: string;
    if (num > 0.5) {
      result = "0.5";
    } else {
      result = "" + num + "";
    }
    return result;
  }

  const controlAurora = () => {
    if (window.scrollY > 1) {
      setOpacity(scrollOpacity());
    } else {
      setOpacity("0");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlAurora);

    return () => {
      window.removeEventListener("scroll", controlAurora);
    };
  });

  return (
    <div className="auroraBackground" style={{opacity: opacity}}>
      <div className="blueOrb"></div>
      <div className="pinkOrb"></div>
      <div className="blur" ></div>
    </div>
  );
}