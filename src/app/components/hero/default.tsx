"use client";
import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import "./default.scss";

export default function Hero() {
  const headerImageRef = useRef(null);

  return (
    <div className="hero">
      <Image
        src="/duomo.jpg"
        alt="Hero Image"
        className="heroImage"
        width={1620}
        height={1080}
        priority={true}
        ref={headerImageRef}
      />
    </div>
  );
}
