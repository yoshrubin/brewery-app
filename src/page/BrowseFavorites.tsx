import { useSelector } from "react-redux";
import BreweryCard from "../components/BreweryCard";
import { RootState } from "../store";
import { useState } from "react";
import Pagination from "../components/Pagination";
import { Brewery } from "../store/brewerySlice";
import BreweryModal from "../components/BreweryModal";

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
  return (
    <div>
      <h1 className="text-2xl font-bold text-center mt-5">Browse Favorites</h1>
      <p className="text-sm text-center">
        Your favorite breweries will be listed here.
      </p>
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4">
        {breweries.map((brewery) => (
          <BreweryCard
            key={brewery.id}
            brewery={brewery}
            isFavorite={!!favorites[brewery.id]}
            onClick={() => openModal(brewery)}
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
