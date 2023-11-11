import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TypeChips from "./TypeChips";
import { getBackgroundColor } from "./types";

function PokemonCard({ data }) {
  const {
    backgroundClass,
    textClass,
    gradientClass,
    borderClass,
  } = getBackgroundColor(data.primaryType);

  if (!data) {
    return null;
  }

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-1, 1], ["17.5deg", "-17.5deg"]);
  const rotateY = useTransform(mouseXSpring, [-1, 1], ["-17.5deg", "17.5deg"]);

  const handleMouseMove = (e) => {
    const rect = e.target.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  const capitalizeFristLetter = (str) => {
    return str.replace(/\b\w/g, (char) => char.toUpperCase());
  };

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`h-96 w-72 rounded-xl bg-gradient-to-br shadow-lg shadow-black ${gradientClass}`}
    >
      <div
        style={{
          transform: "translateZ(75px)",
          transformStyle: "preserve-3d",
        }}
        className={`absolute border-2 inset-4 grid place-content-center rounded-xl shadow-lg bg-gray-900 bg-opacity-80 ${borderClass}`}
      >
        <div
          className={` flex flex-col items-center p-2 rounded-full ${textClass}`}
        >
          <div
            className={`${backgroundClass} ${borderClass} border-2 rounded-full`}
          >
            <img
              src={
                data.img ||
                `https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/${data.id}.png`
              }
              alt={data.name}
              className="w-[10rem] h-[10rem] p-6 "
            />
          </div>
          <div className="flex items-center my-1">
            <h3 className="text-xl font-poppins">
              {capitalizeFristLetter(data.name)}
            </h3>
            <p className="ml-1 p-1 bg-gray-900 rounded-lg bg-opacity-75">
              #{data.id}
            </p>
          </div>{" "}
          <p>Weight: {data.weight} kg</p>
          <p>Height: {data.height} cm</p>
          <div className="mt-4">
            <TypeChips type={data.primaryType} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PokemonCard;
