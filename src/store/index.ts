import { configureStore } from "@reduxjs/toolkit";
import breweryReducer, { BreweryState } from "./brewerySlice";

const store = configureStore({
  reducer: {
    brewery: breweryReducer,
  },
});

export type RootState = {
  brewery: BreweryState;
};
export type AppDispatch = typeof store.dispatch;

export default store;
