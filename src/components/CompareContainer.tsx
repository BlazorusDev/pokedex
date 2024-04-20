import React from "react";
import {
  pokemonStatType,
  pokemonTypesInterface,
  userPokemonsTypes,
} from "../utils/Types";
import { FaPlus } from "react-icons/fa";
import { pokemonTypes } from "../utils/getPokemonTypes";
import { useAppDispatch } from "../app/hooks";
import { removeFromCompare } from "../app/slices/PokemonSlice";
import { useNavigate } from "react-router-dom";
import { addPokemonToList } from "../app/reducers/addPokemonToList";

const CompareContainer = ({
  pokemon = undefined,
  isEmpty = false,
}: {
  pokemon?: userPokemonsTypes;
  isEmpty?: boolean;
}) => {
  const dispatch = useAppDispatch();
  const naviagte = useNavigate();
  const createStatsArray = (
    types: pokemonTypesInterface[],
    statType: pokemonStatType
  ) => {
    const statsArray: { name: string; image: string }[] = [];
    const statsSet = new Set<string>();
    types.forEach((type: pokemonTypesInterface) => {
      const key = Object.keys(type)[0];
      type[key][statType].forEach((stat: string) => {
        if (!statsSet.has(stat)) {
          // @ts-ignore
          statsArray.push({ name: stat, image: pokemonTypes[stat].image });
          statsSet.add(stat);
        }
      });
    });
    return statsArray;
  };

  const getStats = () => {
    return (
      <>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Strength</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "strength").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Resistance</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "resistance").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Vulnerable</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "vulnerable").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
        <div className="pokemon-types">
          <h4 className="pokemon-type-title">Weakness</h4>
          <div className="pokemon-type-icons">
            {createStatsArray(pokemon?.types!, "weakness").map(
              (stat: { image: string }) => (
                <div className="pokemon-type">
                  <img
                    src={stat.image}
                    alt="type"
                    className="pokemon-type-image"
                  />
                </div>
              )
            )}
          </div>
        </div>
      </>
    );
  };
  return (
    <div className="compare-container">
      {isEmpty && (
        <div className="empty">
          <button>
            <FaPlus />
          </button>
          <h3>Add Pokemon to Comparison</h3>
        </div>
      )}
      {pokemon && (
        <div className="compare-element">
          <div className="compare-info">
            <div className="compare-details">
              <h3>{pokemon.name}</h3>
              <img
                src={pokemon.image}
                alt="pokmeon"
                className="compare-image"
              />
            </div>
            <div className="pokemon-types-container">
              <div className="pokemon-types">
                <h4 className="pokemon-type-title">Type</h4>
                <div className="pokemon-type-icons">
                  {pokemon?.types.map((type: pokemonTypesInterface) => {
                    const keys = Object.keys(type);
                    return (
                      <div className="pokemon-type">
                        <img
                          src={type[keys[0]].image}
                          alt="type"
                          className="pokemon-type-image"
                        />
                      </div>
                    );
                  })}
                </div>
              </div>
              {getStats()}
            </div>
          </div>
          <div className="compare-action-button">
            <button
              className="compare-btn"
              onClick={() => dispatch(addPokemonToList(pokemon))}
            >
              Add
            </button>
            <button
              className="compare-btn"
              onClick={() => naviagte(`/pokemon/${pokemon.id}`)}
            >
              View
            </button>
            <button
              className="compare-btn"
              onClick={() => dispatch(removeFromCompare({ id: pokemon.id }))}
            >
              Remove
            </button>
          </div>
        </div>
      )}
    </div>
  );
};

export default CompareContainer;
