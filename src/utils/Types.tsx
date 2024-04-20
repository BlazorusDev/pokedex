export interface AppTypeInitialState {
  toasts: string[];
  userInfo: { email: string } | undefined;
  currentPokemonTab: string;
  // userInfo: undefined | { emial: string };
}
export interface currentPokemonType {
  id: number;
  name: string;
  types: pokemonTypesInterface[];
  image: string;
  stats: pokemonStatsType[];
  encounters: string[];
  evolution: { level: number; pokemon: { name: string; url: string } }[];
  pokemonAbilities: { abilities: string[]; moves: string[] };
  evolutionLevel: number;
}

export interface PokemonTypeInitialState {
  allPokemon: undefined | genericPokemonType[];
  randomPokemons: undefined | generatedPokemonTypes[];
  compareQueue: generatedPokemonTypes[];
  userPokemons: userPokemonsTypes[];
  currentPokemon: currentPokemonType | undefined;
}
export interface genericPokemonType {
  name: string;
  url: string;
}

export interface generatedPokemonTypes {
  name: string;
  id: number;
  image: string;
  types: pokemonTypesInterface[];
}
export interface pokemonTypesInterface {
  [key: string]: {
    image: string;
    resistance: string[];
    strength: string[];
    weakness: string[];
    vulnerable: string[];
  };
}

export interface userPokemonsTypes extends generatedPokemonTypes {
  firebaseId?: string;
}

export type pokemonStatType =
  | "vulnerable"
  | "weakness"
  | "strength"
  | "resistance";

export interface pokemonStatsType {
  name: string;
  value: string;
}
