import {
  SET_BREWERIES,
  TOGGLE_FAVORITE,
  BreweryActionTypes,
} from "../actions/breweryActions";

interface Brewery {
  id: string;
  name: string;
  type: string;
}

interface BreweryState {
  breweries: Brewery[];
  favorites: Brewery[];
}

const initialState: BreweryState = {
  breweries: [],
  favorites: [],
};

export const breweryReducer = (
  state = initialState,
  action: BreweryActionTypes
): BreweryState => {
  switch (action.type) {
    case SET_BREWERIES:
      return {
        ...state,
        breweries: action.breweries,
      };
    case TOGGLE_FAVORITE: {
      const isFavorite = state.favorites.some(
        (fav) => fav.id === action.brewery.id
      );

      return {
        ...state,
        favorites: isFavorite
          ? state.favorites.filter((fav) => fav.id !== action.brewery.id)
          : [...state.favorites, action.brewery],
      };
    }
    default:
      return state;
  }
};
