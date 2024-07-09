import React from "react";
import { Brewery } from "../store/brewerySlice";
import star from "../assets/star.svg";
import { toggleFavorite, setBreweryRank } from "../store/brewerySlice";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../store";

// Define the props type
interface BreweryCardProps {
  brewery: Brewery;
  isFavorite: boolean;
  onClick: () => void;
  showRank?: boolean;
}

const BreweryCard: React.FC<BreweryCardProps> = ({
  brewery,
  isFavorite,
  onClick,
  showRank,
}) => {
  const dispatch: AppDispatch = useDispatch();

  const handleRankChange = (event: React.ChangeEvent<HTMLSelectElement>) => {
    const rank = event.target.value;
    dispatch(setBreweryRank({ ...brewery, rank: Number(rank) }));
  };

  function handleFavoriteClick() {
    dispatch(toggleFavorite(brewery));
  }
  return (
    <div
      className="bg-white shadow-md space-y-2 rounded-md p-4 text-center hover:bg-slate-200"
      onClick={onClick}
    >
      <div>
        <h5 className="text-lg font-semibold">{brewery.name}</h5>
        <p className="text-sm">
          {brewery.street}, {brewery.city}, {brewery.state}
        </p>
        <p>{brewery.brewery_type}</p>
      </div>
      <div
        className="flex justify-center items-center flex-col space-y-2"
        onClick={(e) => e.stopPropagation()}
      >
        <button
          className={`h-6 w-6 p-2 rounded-full hover:bg-yellow-500 ${
            isFavorite ? "bg-yellow-500" : "bg-white"
          }`}
          onClick={() => handleFavoriteClick()}
        >
          <img src={star} alt="Star" />
        </button>
        {showRank && (
          <select
            value={brewery?.rank}
            onChange={(e) => handleRankChange(e)}
            className="bg-white text-sm text-center p-2 rounded-md "
          >
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4</option>
            <option value="5">5</option>
          </select>
        )}
      </div>
    </div>
  );
};

export default BreweryCard;
