import { useDispatch, useSelector } from "react-redux";
import BreweryCard from "../components/BreweryCard";
import { AppDispatch, RootState } from "../store";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { Brewery, removeAllFavorites } from "../store/brewerySlice";
import BreweryModal from "../components/BreweryModal";
import { Link } from "react-router-dom";

const BrowseFavorites: React.FC = () => {
  const favorites = useSelector((state: RootState) => state.brewery.favorites);
  const [page, setPage] = useState<number>(1);
  const favoritesArray = Object.values(favorites);
  const breweries = favoritesArray.slice(page * 12 - 12, page * 12);
  const totalPages = Math.ceil(favoritesArray.length / 12);

  const setCurrentPage = (value: number) => {
    setPage(value);
  };

  const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);

  const openModal = (brewery: Brewery) => {
    setSelectedBrewery(brewery);
  };

  const closeModal = () => {
    setSelectedBrewery(null);
  };
  const dispatch: AppDispatch = useDispatch();

  function clearFavorites() {
    if (window.confirm("Are you sure you want to clear all favorites?")) {
      dispatch(removeAllFavorites());
    }
  }

  return favoritesArray.length === 0 ? (
    <div className="flex flex-col justify-center space-y-4 items-center text-2xl mt-20">
      <Link className="text-blue-500 inline-block" to="/">
        Browse breweries
      </Link>
      <p>to find your favorites.</p>
    </div>
  ) : (
    <div className="flex flex-col space-y-4 items-center">
      <h1 className="text-2xl font-bold text-center mt-5">Browse Favorites</h1>
      {favoritesArray.length > 0 && (
        <button
          className="bg-blue-500 text-white py-2 px-4 rounded-md mt-4"
          onClick={clearFavorites}
        >
          Remove All Favorites
        </button>
      )}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {breweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            brewery={brewery}
            isFavorite={!!favorites[brewery.id]}
            onClick={() => openModal(brewery)}
            showRank={true}
          />
        ))}
      </div>

      <Pagination
        page={page}
        onClick={(value) => setCurrentPage(value)}
        totalPages={totalPages}
      />
      <BreweryModal
        isOpen={selectedBrewery !== null}
        onClose={closeModal}
        brewery={selectedBrewery}
      />
    </div>
  );
};

export default BrowseFavorites;
