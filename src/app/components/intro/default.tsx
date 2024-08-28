"use client";
import React, { useState, useEffect } from "react";
import "./default.scss";

export default function Intro() {
  const [show, setShow] = useState(false);
  const [opacity, setOpacity] = useState("1");

  function scrollOpacity() {
    let num = 2 - (window.scrollY / window.innerHeight) * 0.6;
    return "" + num + "";
  }

  const controlIntro = () => {
    if (window.scrollY > 576 && window.scrollY < 1408) {
      setShow(true);
      setOpacity("1");
    } else if (window.scrollY > 1408) {
      setOpacity(scrollOpacity());
    } else {
      setShow(false);
      setOpacity("1");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlIntro);

    return () => {
      window.removeEventListener("scroll", controlIntro);
    };
  });

  return (
    <div
      id="intro"
      className={`${show && "fixed"}`}
      style={{ opacity: opacity }}
    >
      <h1>Brian G. Grieco</h1>
      <h2>UX Research | UI Design | Front-end Dev</h2>
    </div>
  );
}
