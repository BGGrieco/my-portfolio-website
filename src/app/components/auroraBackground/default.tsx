"use client";
import React, { useState, useEffect, useRef } from "react";
import "./default.scss";

export default function AuroraBackground() {
  const [show, setShow] = useState(false);
  const [filter, setFilter] = useState("blur(80px)");

  function scrollBlur() {
    let num = 80 - (window.scrollY / window.innerHeight) * 10;
    return "blur(" + num + "px)";
  }

  const controlAurora = () => {
    if (window.scrollY > 2320) {
      setShow(true);
      setFilter(scrollBlur());
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlAurora);
    console.log(filter);

    return () => {
      window.removeEventListener("scroll", controlAurora);
    };
  });

  const blur = useRef(null);

  return (
    <div className={`auroraBackground ${show && "fixed"}`}>
      <div className="blueOrb"></div>
      <div className="pinkOrb"></div>
      <div className="blur" ref={blur} style={{backdropFilter: filter}}></div>
    </div>
  );
}