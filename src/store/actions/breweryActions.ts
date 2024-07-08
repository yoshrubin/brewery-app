export const SET_BREWERIES = "SET_BREWERIES";
export const TOGGLE_FAVORITE = "TOGGLE_FAVORITE";

interface Brewery {
  id: string;
  name: string;
  type: string;
}

interface SetBreweriesAction {
  type: typeof SET_BREWERIES;
  breweries: Brewery[];
}

interface ToggleFavoriteAction {
  type: typeof TOGGLE_FAVORITE;
  brewery: Brewery;
}

export type BreweryActionTypes = SetBreweriesAction | ToggleFavoriteAction;

export const setBreweries = (breweries: Brewery[]): SetBreweriesAction => ({
  type: SET_BREWERIES,
  breweries,
});

export const toggleFavorite = (brewery: Brewery): ToggleFavoriteAction => ({
  type: TOGGLE_FAVORITE,
  brewery,
});
