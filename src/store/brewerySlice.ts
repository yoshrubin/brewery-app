import { createSlice, PayloadAction } from "@reduxjs/toolkit";

export interface Brewery {
  id: string;
  name: string;
  type: string;
}

export interface BreweryState {
  favorites: Map<string, Brewery>; // Store favorite breweries with ID as key
}

const initialState: BreweryState = {
  favorites: new Map<string, Brewery>(),
};

const brewerySlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Brewery>) => {
      if (state.favorites.has(action.payload.id)) {
        state.favorites.delete(action.payload.id);
      } else {
        state.favorites.set(action.payload.id, action.payload);
      }
    },
    removeAllFavorites: (state) => {
      state.favorites.clear();
    },
  },
});

export const { toggleFavorite, removeAllFavorites } = brewerySlice.actions;

export default brewerySlice.reducer;
