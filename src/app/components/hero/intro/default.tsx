"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function Intro() {
  const [show, setShow] = useState(false);

  const controlIntro = () => {
    if (window.scrollY > 49) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlIntro);

    return () => {
      window.removeEventListener("scroll", controlIntro);
    };
  });

  return (
    <div id="intro" className={`${show && "fixed"}`}>
      <h1>Brian G. Grieco</h1>
      <h2>UX Research | UI Design | Front-end Dev</h2>
    </div>
  );
}
