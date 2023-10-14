"use client"
import React, { useEffect, useState } from 'react'


export default function Theme() {
    const [theme, setTheme] = useState("black");

    const toggleTheme = () => {
        setTheme(theme === "black" ? "lofi" : "black");
      };


      useEffect(() => {
        const body = document.body;
        body.setAttribute("data-theme", theme);
      }, [theme]);
  return (
    <button className="btn btn-circle" onClick={toggleTheme}>
      {theme === "black" ? (
        <span> moon </span>
      ) : (
        <span> sun </span>
      )}
    </button>
  )
}
