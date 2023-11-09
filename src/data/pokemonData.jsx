const fetchData = async (id) => {
  try {
    const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
    if (!response.ok) {
      throw new Error(`HTTP error! Status: ${response.status}`);
    }
    const data = await response.json();

    const pokemonData = {
      name: data.name,
      img: data.sprites.other.dream_world.front_default,
      weight: data.weight,
      height: data.height,
      types: data.types.map((type) => type.type.name),
      primaryType: data.types[0].type.name,
      id: data.id,
    };

    return pokemonData;
  } catch (error) {
    console.error("Fetch error:", error);
    return null; // Return null in case of an error
  }
};

export { fetchData };

// ${randomID}/
