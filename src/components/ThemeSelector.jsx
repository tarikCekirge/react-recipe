import React, { useContext } from "react";
import { ThemeContexts } from "../contexts/ThemeContexts";

const ThemeSelector = () => {
  const { changeColor } = useContext(ThemeContexts);
  const colorList = ["#43a047", "#cddc39", "#ffb300", "#f4511e", "#e53935", "#37474f"];
  return (
    <>
      <div className="bg-white shadow-lg p-4 flex gap-3 ">
        {colorList.map((item, index) => (
          <button style={{ backgroundColor: item }} className="size-6 rounded-full " onClick={() => changeColor(item)} key={index}></button>
        ))}
      </div>
    </>
  );
};

export default ThemeSelector;
