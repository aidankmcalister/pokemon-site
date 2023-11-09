import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);

// logic/pokeAPI.js

// const fetchData = async (randomID) => {
//   try {
//     const response = await fetch(
//       `https://pokeapi.co/api/v2/pokemon/${randomID}/`
//     );
//     if (!response.ok) {
//       throw new Error(`HTTP error! Status: ${response.status}`);
//     }
//     const data = await response.json();

//     const pokemonData = {
//       name: data.name,
//       imgFront: data.sprites.front_default,
//       imgBack: data.sprites.back_default,
//       weight: data.weight,
//       height: data.height,
//       types: data.types.map((type) => type.type.name),
//       primaryType: data.types[0].type.name,
//       id: randomID,
//     };

//     return pokemonData;
//   } catch (error) {
//     console.error("Fetch error:", error);
//     return null; // Return null in case of an error
//   }
// };

// export { fetchData };
