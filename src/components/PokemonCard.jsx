import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import TypeChips from "../../TypeChips";

function PokemonCard({ data }) {
  const getBackgroundColor = (type) => {
    let backgroundClass;
    let textClass;
    let borderClass;
    let gradientClass;

    switch (type) {
      case "fire":
        backgroundClass = "bg-red-300";
        textClass = "text-red-700";
        borderClass = "border-red-700";
        gradientClass = "from-red-700 via-red-200 to-red-500";
        break;
      case "water":
        backgroundClass = "bg-blue-300";
        textClass = "text-blue-700";
        borderClass = "border-blue-700";
        gradientClass = "from-blue-700 via-blue-200 to-blue-500";
        break;
      case "grass":
        backgroundClass = "bg-green-300";
        textClass = "text-green-700";
        borderClass = "border-green-700";
        gradientClass = "from-green-700 via-green-200 to-green-500";
        break;
      case "bug":
        backgroundClass = "bg-lime-500";
        textClass = "text-lime-800";
        borderClass = "border-lime-800";
        gradientClass = "from-lime-800 via-lime-100 to-lime-700";
        break;
      case "electric":
        backgroundClass = "bg-yellow-300";
        textClass = "text-yellow-700";
        borderClass = "border-yellow-700";
        gradientClass = "from-yellow-700 via-yellow-200 to-yellow-500";
        break;
      case "normal":
        backgroundClass = "bg-gray-400";
        textClass = "text-gray-700";
        borderClass = "border-gray-700";
        gradientClass = "from-gray-700 via-gray-200 to-gray-500";
        break;
      default:
        backgroundClass = "bg-gray-600";
        textClass = "text-gray-800";
        borderClass = "border-gray-800";
        gradientClass = "from-gray-700 via-gray-200 to-gray-500";
    }

    return { backgroundClass, textClass, borderClass, gradientClass };
  };

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

  return (
    <motion.div
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className={`relative h-96 w-72 rounded-xl bg-gradient-to-br ${gradientClass}`}
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
              src={data.img}
              alt={data.name}
              className="w-[10rem] h-[10rem] p-6"
            />
          </div>
          <h3 className="text-xl">{data.name}</h3>
          <p>ID: {data.id}</p>
          <p>Weight: {data.weight} kg</p>
          <p>Height: {data.height} cm</p>
          <div>
            <TypeChips type={data.primaryType} />
          </div>
        </div>
      </div>
    </motion.div>
  );
}

export default PokemonCard;
