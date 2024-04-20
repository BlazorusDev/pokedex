import { createAsyncThunk } from "@reduxjs/toolkit";
import { pokemonStatsType, pokemonTypesInterface, userPokemonsTypes } from "../../utils/Types";
import { RootState } from "../store";
import { setToast } from "../slices/AppSlice";
import { addDoc } from "firebase/firestore";
import { pokemonListRef } from "../../utils/FirebaseConfig";
import { getUserPokemons } from "./getUserPokemons";


export const addPokemonToList = createAsyncThunk(
    "pokemon/addPokemon",
    async (pokemon: {
        id: number;
        name: string;
        types: pokemonTypesInterface[] | string[];
        stats?: pokemonStatsType[];
    }, { getState, dispatch }) => {
        try {
            const { app: { userInfo }, pokemon: { userPokemons } } = getState() as RootState;
            if (!userInfo || !userInfo.email) {
                dispatch(setToast("Please Login in order to add pokemon to your collection"));
                return;
            }
            const index = userPokemons.findIndex((userPokemon: userPokemonsTypes) => {
                return userPokemon.name === pokemon.name;
            });
            if (index === -1) {
                let types: string[] = [];
                if (!pokemon.stats) {
                    pokemon.types.forEach((type: any) => types.push(Object.keys(type).toString()))
                } else {
                    types = pokemon.types as string[]
                }
                await addDoc(pokemonListRef, {
                    pokemon: { id: pokemon.id, name: pokemon.name, types },
                    email: userInfo.email
                });
                await dispatch(getUserPokemons());
                dispatch(setToast(`${pokemon.name} added to your collection`));
            }
            else {
                dispatch(setToast(`${pokemon.name} already part of your collection`));
            }
        } catch (err) {
            console.log(err);
        }
    }
);
