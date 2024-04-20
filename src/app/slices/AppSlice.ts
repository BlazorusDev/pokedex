import { createSlice } from "@reduxjs/toolkit";
import { AppTypeInitialState } from "../../utils/Types";
import { pokemonTabs } from "../../utils/Constants";

const initialState: AppTypeInitialState = {
    toasts: [],
    userInfo: undefined,
    currentPokemonTab: pokemonTabs.description,
}

export const AppSlice = createSlice({
    name: 'app',
    initialState,
    reducers: {
        setToast: (state, action) => {
            const toasts = [...state.toasts];
            toasts.push(action.payload);
            state.toasts = toasts;
        },
        cleartoasts: (state) => {
            state.toasts = [];
        },
        setUserStatus: (state, action) => {
            state.userInfo = action.payload
        },
        setPokemonTab: (state, action) => {
            state.currentPokemonTab = action.payload
        }
    },
})
export const { setToast, cleartoasts, setUserStatus, setPokemonTab } = AppSlice.actions;