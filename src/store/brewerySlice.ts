import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Brewery {
  id: string;
  name: string;
  type: string;
}

export interface BreweryState {
  breweries: Brewery[];
  favorites: Brewery[];
}

const initialState: BreweryState = {
  breweries: [],
  favorites: [],
};

const brewerySlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {
    setBreweries: (state, action: PayloadAction<Brewery[]>) => {
      state.breweries = action.payload;
    },
    toggleFavorite: (state, action: PayloadAction<Brewery>) => {
      const existingIndex = state.favorites.findIndex(
        (brewery) => brewery.id === action.payload.id
      );
      if (existingIndex !== -1) {
        state.favorites.splice(existingIndex, 1);
      } else {
        state.favorites.push(action.payload);
      }
    },
  },
});

export const { setBreweries, toggleFavorite } = brewerySlice.actions;

export default brewerySlice.reducer;
