"use client";
import { useEffect, useState } from "react";
import MoonIcon from "./moon";
import SunIcon from "./sun";

const deviceTheme = window.matchMedia("(prefers-color-scheme: dark)").matches
  ? "dark"
  : "light";
function ThemeSwitch() {
  const [theme, setTheme] = useState("light");

  // Load saved theme from localStorage or default to light
  useEffect(() => {
    const savedTheme = localStorage.getItem("theme") || deviceTheme;
    setTheme(savedTheme);
    document.documentElement.classList.add(savedTheme);
  }, []);

  // Toggle theme
  const toggleTheme = () => {
    const newTheme = theme === "light" ? "dark" : "light";
    setTheme(newTheme);
    document.documentElement.classList.remove(theme);
    document.documentElement.classList.add(newTheme);
    localStorage.setItem("theme", newTheme);
  };

  return (
    <span onClick={toggleTheme}>
      {theme === "light" ? <SunIcon /> : <MoonIcon />}
    </span>
  );
}

export default ThemeSwitch;
