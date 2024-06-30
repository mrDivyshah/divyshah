"use client";
import React from "react";
import { useState, useRef, useEffect } from "react";

function Round() {
  const cursorRef = useRef(null);
  const cursor2Ref = useRef(null);

  useEffect(() => {
    const handleMouseMove = (e) => {
      if (cursorRef.current && cursor2Ref.current) {
        cursorRef.current.style.left = `${e.clientX}px`;
        cursorRef.current.style.top = `${e.clientY}px`;
        cursor2Ref.current.style.left = `${e.clientX}px`;
        cursor2Ref.current.style.top = `${e.clientY}px`;
      }
    };

    const handleMouseEnter = () => {
      if (cursorRef.current) {
        cursor2Ref.current.style.transform = "translate(-50%, -50%) scale(10)";
        cursor2Ref.current.style.backgroundColor = "#000000";
        cursor2Ref.current.style.transition = "0.2s";
        cursorRef.current.style.border = "none";
        cursor2Ref.current.style.opacity = "0.5";
      }
    };

    const handleMouseLeave = () => {
      if (cursorRef.current) {
        cursor2Ref.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursor2Ref.current.style.opacity = "1";
        cursor2Ref.current.style.transition = "0s";
        cursorRef.current.style.border = "2px solid #000000";
      }
    };

    const handleButtonEnter = () => {
      if (cursorRef.current) {
        cursor2Ref.current.style.transform = "translate(-50%, -50%) scale(10)";
        cursor2Ref.current.style.backgroundColor = "#000000";
        cursor2Ref.current.style.opacity = "0.5";
        cursor2Ref.current.style.transition = "0.2s";
        cursorRef.current.style.border = "none";
      }
    };

    const handleButtonLeave = () => {
      if (cursorRef.current) {
        cursor2Ref.current.style.transform = "translate(-50%, -50%) scale(1)";
        cursor2Ref.current.style.transition = "0s";
        cursor2Ref.current.style.opacity = "1";
        cursorRef.current.style.border = "2px solid #000000";
      }
    };

    document.addEventListener("mousemove", handleMouseMove);

    const links = document.querySelectorAll("a");
    links.forEach((link) => {
      link.addEventListener("mouseenter", handleMouseEnter);
      link.addEventListener("mouseleave", handleMouseLeave);
    });

    const buttons = document.querySelectorAll("button");
    buttons.forEach((button) => {
      button.addEventListener("mouseenter", handleButtonEnter);
      button.addEventListener("mouseleave", handleButtonLeave);
    });
    const cursorPointer = document.querySelectorAll(".click");
    cursorPointer.forEach((cursorPointer) => {
      cursorPointer.addEventListener("mouseenter", handleButtonEnter);
      cursorPointer.addEventListener("mouseleave", handleButtonLeave);
    });

    return () => {
      document.removeEventListener("mousemove", handleMouseMove);
      links.forEach((link) => {
        link.removeEventListener("mouseenter", handleMouseEnter);
        link.removeEventListener("mouseleave", handleMouseLeave);
      });
      buttons.forEach((button) => {
        button.removeEventListener("mouseenter", handleButtonEnter);
        button.removeEventListener("mouseleave", handleButtonLeave);
      });
      cursorPointer.forEach((cursorPointer) => {
        cursorPointer.removeEventListener("mouseenter", handleButtonEnter);
        cursorPointer.removeEventListener("mouseleave", handleButtonLeave);
      });
    };
  }, []);
  return (
    <>
      <div
        ref={cursorRef}
        className="fixed w-7 h-7 border-2 border-black max-xl:hidden  rounded-full left-0 top-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 duration-75  z-50"
      ></div>
      <div
        ref={cursor2Ref}
        className="fixed w-2 h-2 bg-black rounded-full max-xl:hidden  left-0 top-0 pointer-events-none transform -translate-x-1/2 -translate-y-1/2 z-50"
      ></div>
    </>
  );
}

export default Round;
