export const getBackgroundColor = (type) => {
  const typeStyles = {
    fire: {
      backgroundClass: "bg-red-300",
      textClass: "text-[#f5af19]",
      borderClass: "border-[#f5af19]",
      gradientClass: "from-[#f12711] to-[#f5af19]",
    },
    water: {
      backgroundClass: "bg-blue-300",
      textClass: "text-blue-700",
      borderClass: "border-blue-700",
      gradientClass: "from-[#3a7bd5] to-[#00d2ff]",
    },
    grass: {
      backgroundClass: "bg-green-300",
      textClass: "text-green-700",
      borderClass: "border-green-700",
      gradientClass: "from-[#ab2f] to-[#38ef7d]",
    },
    bug: {
      backgroundClass: "bg-lime-500",
      textClass: "text-lime-800",
      borderClass: "border-lime-800",
      gradientClass: "from-[#56ab2f] to-[#a8e063]",
    },
    electric: {
      backgroundClass: "bg-yellow-300",
      textClass: "text-yellow-700",
      borderClass: "border-yellow-700",
      gradientClass: "from-[#fffc00] to-[#fffea3]",
    },
    normal: {
      backgroundClass: "bg-gray-400",
      textClass: "text-[#9bc5c3]",
      borderClass: "border-gray-700",
      gradientClass: "from-[#616161] to-[#9bc5c3]",
    },
    fighting: {
      backgroundClass: "bg-red-400",
      textClass: "text-[#ef473a]",
      borderClass: "border-red-800",
      gradientClass: "from-[#cb2d3e] to-[#ef473a]",
    },
    flying: {
      backgroundClass: "bg-cyan-300",
      textClass: "text-[#CF8BF3]",
      borderClass: "border-[#CF8BF3]",
      gradientClass: "from-[#A770EF] to-[#CF8BF3]",
    },
    ground: {
      backgroundClass: "bg-[#E1C16E]",
      textClass: "text-[#F0C27B]",
      borderClass: "border-[#F0C27B]",
      gradientClass: "from-[#BA8B02] to-[#F0C27B]",
    },
    rock: {
      backgroundClass: "bg-[#C4A484]",
      textClass: "text-[#C2B280]",
      borderClass: "border-[#C2B280]",
      gradientClass: "from-[#988558] to-[#C2B280]",
    },
    steel: {
      backgroundClass: "bg-[#616161]",
      textClass: "text-[#9bc5c34E5E6]",
      borderClass: "border-[#9bc5c3]",
      gradientClass: "from-[#616161] to-[#9bc5c3]",
    },
    ice: {
      backgroundClass: "bg-[#bae6fd]",
      textClass: "text-[#b6fbff]",
      borderClass: "border-[#b6fbff]",
      gradientClass: "from-[#83a4d4] to-[#b6fbff]",
    },
    ghost: {
      backgroundClass: "bg-purple-200",
      textClass: "text-[#ab83a1]",
      borderClass: "border-[#ab83a1]",
      gradientClass: "from-[#6a0572] to-[#ab83a1]",
    },
    dragon: {
      backgroundClass: "bg-indigo-400",
      textClass: "text-[#a17fe0]",
      borderClass: "border-[#a17fe0]",
      gradientClass: "from-[#4A00E0] to-[#a17fe0]",
    },
    dark: {
      backgroundClass: "bg-gray-800",
      textClass: "text-[#6e7173]",
      borderClass: "border-[#6e7173]",
      gradientClass: "from-[#232526] to-[#414345]",
    },
    fairy: {
      backgroundClass: "bg-pink-100",
      textClass: "text-[#feb2a8]",
      borderClass: "border-[#feb2a8]",
      gradientClass: "from-[#f6788e] to-[#feb2a8]",
    },
    poison: {
      backgroundClass: "bg-purple-100",
      textClass: "text-[#6E48AA]",
      borderClass: "border-[#6E48AA]",
      gradientClass: "from-[#9D50BB] to-[#6E48AA]",
    },
    psychic: {
      backgroundClass: "bg-pink-100",
      textClass: "text-[#feb2a8]",
      borderClass: "border-[#feb2a8]",
      gradientClass: "from-[#f6788e] to-[#feb2a8]",
    },
  };

  return (
    typeStyles[type] || {
      backgroundClass: "bg-gray-600",
      textClass: "text-gray-500",
      borderClass: "border-gray-800",
      gradientClass: "from-[#616161] to-[#434343]",
    }
  );
};
