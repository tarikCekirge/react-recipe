import React, { createContext, useReducer } from "react";
import { themeReducer, CHANGE_COLOR } from "../reducers/themeReducer";

export const ThemeContexts = createContext();

export const ThemeProvider = ({ children }) => {
  const theme = JSON.parse(localStorage.getItem("theme")) || { color: "#37474f" };
  const [state, dispatch] = useReducer(themeReducer, { color: theme.color });

  const changeColor = (value) => {
    dispatch({ type: CHANGE_COLOR, payload: value });
  };

  return <ThemeContexts.Provider value={{ ...state, changeColor }}>{children}</ThemeContexts.Provider>;
};
