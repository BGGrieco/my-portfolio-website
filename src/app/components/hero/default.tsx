"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Intro from "../intro/default";
import "./default.scss";

export default function Hero() {
  const [show, setShow] = useState(false);
  const [blur, setBlur] = useState("blur(0)");
  const scrollNumber = window.innerHeight - 282;

  function scrollBlur() {
    let num = -1 + (window.scrollY / window.innerHeight) * 2;
    let result: string;
    if (num > 4) {
      result = "blur(4px)";
    } else {
      result = "blur(" + num + "px)";
    }
    return result;
  }

  const controlHero = () => {
    if (window.scrollY > scrollNumber) {
      setShow(true);
      setBlur(scrollBlur());
    } else {
      setShow(false);
      setBlur("blur(0)");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", controlHero);
    return () => {
      window.removeEventListener("scroll", controlHero);
    };
  });

  return (
    <div className="hero">
      <Image
        src="/duomo.jpg"
        alt="Hero Image"
        className={`heroImage ${show && "fixed"}`}
        style={{ filter: blur }}
        width={1620}
        height={1080}
        priority={true}
      />

      <Intro />
    </div>
  );
}
