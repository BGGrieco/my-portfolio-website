"use client";
import React, { useRef } from "react";
import Image from "next/image";
import Intro from "./intro/default";
import GlassBackground from "./glassBackground/default";
import "./default.scss";

export default function Hero() {
  return (
    <div className="parallaxer">
      <div className="hero">
        <Image
          src="/duomo.jpg"
          alt="Hero Image"
          className="heroImage"
          width={1620}
          height={1080}
          priority={true}
        />
        <div className="gradient"></div>
        <Intro />
      </div>
      <div className="spacerOne"></div>
      <GlassBackground />
      <div className="spacerTwo"></div>
    </div>
  );
}
