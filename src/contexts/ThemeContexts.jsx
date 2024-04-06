import React, { createContext, useState, useEffect } from "react";

export const ThemeContexts = createContext();

export const ThemeProvider = ({ children }) => {
  const [color, setColor] = useState("#fffff");

  useEffect(() => {
    const savedColor = localStorage.getItem("themeColor");
    if (savedColor) {
      setColor(savedColor);
    }
  }, [color]);

  const changeColor = (value) => {
    setColor(value);
    localStorage.setItem("themeColor", value);
  };

  return <ThemeContexts.Provider value={{ color, changeColor }}>{children}</ThemeContexts.Provider>;
};
