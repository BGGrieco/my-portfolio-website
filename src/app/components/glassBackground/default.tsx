"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function GlassBackground() {
  const [show, setShow] = useState(false);

  const controlScreen = () => {
    if (window.scrollY > 1408) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlScreen);

    return () => {
      window.removeEventListener("scroll", controlScreen);
    };
  });

  return (
    <div className={`heroScreen ${show && "fixed"}`}>
      <div className="brokenText">
        <h1>Design</h1>
        <h1>Portfolio</h1>
      </div>
    </div>
  );
}
