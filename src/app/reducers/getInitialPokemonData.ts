import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { pokemonsRoutes } from "../../utils/Constants";

export const getInitialPokemonData = createAsyncThunk("pokemon/initialData", async () => {
    try {
        const { data } = await axios.get(pokemonsRoutes);
        return data.results;
    } catch (err) {
        console.log(err)
    }
})