import React from "react";
import { getBackgroundColor } from "./types";

const TypeChips = ({ type }) => {
  const {
    backgroundClass,
    textClass,
    gradientClass,
    borderClass,
  } = getBackgroundColor(type);

  return (
    <div
      className={`font-bit text-xs border rounded-lg px-2 p-1 uppercase ${
        type === "electric" ? "text-gray-800" : "text-white"
      } bg-gradient-to-tl ${borderClass} ${gradientClass}`}
    >
      {type}
    </div>
  );
};

export default TypeChips;
