"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function AuroraBackground() {
  const [show, setShow] = useState(false);

  const controlAurora = () => {
    if (window.scrollY > 2320) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlAurora);

    return () => {
      window.removeEventListener("scroll", controlAurora);
    };
  });

  return (
    <div className={`auroraBackground ${show && "fixed"}`}>
      <div className="blueOrb"></div>
      <div className="pinkOrb"></div>
    </div>
  );
}
