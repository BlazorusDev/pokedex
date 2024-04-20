import React from "react";
import { useAppSelector } from "../../app/hooks";
import PokemonContainer from "../../components/PokemonContainer";
import Info from "../../components/Info";

const Description = () => {
  const pokemonData = useAppSelector(
    ({ pokemon: { currentPokemon } }) => currentPokemon
  );
  return (
    <div>
      {pokemonData && (
        <>
          <Info data={pokemonData} />
          {pokemonData && <PokemonContainer image={pokemonData.image} />}
        </>
      )}
    </div>
  );
};

export default Description;
