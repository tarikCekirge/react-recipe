import React, { createContext } from "react";

export const ThemeContexts = createContext();

export const ThemeProvider = ({ children }) => {
  return <ThemeContexts.Provider value={{ color: "bg-white dark:bg-gray-800" }}>{children}</ThemeContexts.Provider>;
};
