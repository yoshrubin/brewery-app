import { createSlice, PayloadAction } from "@reduxjs/toolkit";

type BreweryTypes =
  | "micro"
  | "nano"
  | "regional"
  | "brewpub"
  | "large"
  | "planning"
  | "bar"
  | "contract"
  | "proprietor"
  | "closed";

export interface Brewery {
  id: string;
  name: string;
  brewery_type: BreweryTypes;
  address_1: string;
  address_2: string | null;
  address_3: string | null;
  city: string;
  state_province: string;
  postal_code: string | null;
  country: string;
  longitude: string | null;
  latitude: string | null;
  phone: string;
  website_url: string;
  state: string;
  street: string;
}

export interface BreweryState {
  favorites: { [key: string]: Brewery };
}

const initialState: BreweryState = {
  favorites: {},
};

const brewerySlice = createSlice({
  name: "brewery",
  initialState,
  reducers: {
    toggleFavorite: (state, action: PayloadAction<Brewery>) => {
      const id = action.payload.id;
      if (state.favorites[id]) {
        delete state.favorites[id];
      } else {
        state.favorites[id] = action.payload;
      }
    },
    removeAllFavorites: (state) => {
      state.favorites = {};
    },
  },
});

export const { toggleFavorite, removeAllFavorites } = brewerySlice.actions;

export default brewerySlice.reducer;
