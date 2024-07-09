import React from "react";
import { Brewery } from "../store/brewerySlice";
import star from "../assets/star.svg";
import { toggleFavorite } from "../store/brewerySlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

// Define the props type
interface BreweryCardProps {
  brewery: Brewery;
  isFavorite: boolean;
}

const BreweryCard: React.FC<BreweryCardProps> = ({ brewery, isFavorite }) => {
  const dispatch: AppDispatch = useDispatch();
  function handleFavoriteClick() {
    dispatch(toggleFavorite(brewery));
  }
  return (
    <div className="bg-white shadow-md rounded-md p-4 text-center hover:bg-slate-200">
      <div>
        <h5 className="text-lg font-semibold">{brewery.name}</h5>
        <p>{brewery.brewery_type}</p>
      </div>
      <button
        className={`h-6 w-6 p-2 rounded-full hover:bg-yellow-500 ${
          isFavorite ? "bg-yellow-500" : "bg-white"
        }`}
        onClick={(event) => {
          event?.stopPropagation();
          handleFavoriteClick();
        }}
      >
        <img src={star} alt="Star" />
      </button>
    </div>
  );
};

export default BreweryCard;
