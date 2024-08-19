"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "../intro/default";
import "./default.scss";

export default function Hero() {
  const [show, setShow] = useState(false);

  const controlHero = () => {
    if (window.scrollY > 576) {
      setShow(true);
    } else {
      setShow(false);
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHero);

    return () => {
      window.removeEventListener("scroll", controlHero);
    };
  });

  return (
    <div className="parallaxer">
      <Image
        src="/duomo.jpg"
        alt="Hero Image"
        className={`heroImage ${show && "fixed"}`}
        // className="heroImage"
        width={1620}
        height={1080}
        priority={true}
      />

      <Intro />
    </div>
  );
}
