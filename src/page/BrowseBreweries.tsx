import React, { useState, useEffect, useMemo } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../store";
import { fetchBreweries } from "../api";
import { Brewery } from "../store/brewerySlice";
import BreweryCard from "../components/BreweryCard";
import { useSearchParams } from "react-router-dom";
import Pagination from "../components/Pagination";
import BreweryModal from "../components/BreweryModal";
import { debounce } from "lodash";

const BrowseBreweries: React.FC = () => {
  const [searchParams, setSearchParams] = useSearchParams();
  const favorites = useSelector((state: RootState) => state.brewery.favorites);
  const [breweries, setBreweries] = useState<Brewery[]>([]);
  const [page, setPage] = useState<number>(() => {
    const param = searchParams.get("page");
    return param ? Number(param) : 1;
  });
  const [query, setQuery] = useState<string>(() => {
    const param = searchParams.get("query");
    return param ? param : "";
  });
  const perPage = 12;
  const totalPages = breweries.length === 0 ? 0 : Math.ceil(100 / perPage);

  const debouncedFetchBreweriesData = useMemo(
    () =>
      debounce(async (page: number, query: string) => {
        try {
          const data = await fetchBreweries(page, perPage, query);
          setBreweries(data as Brewery[]);
        } catch (error) {
          console.error("Error fetching breweries:", error);
        }
      }, 300),
    []
  );

  useEffect(() => {
    debouncedFetchBreweriesData(page, query);
  }, [debouncedFetchBreweriesData, searchParams, page]);

  const handleSearch = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    setSearchParams({ ...searchParams, query, page: "1" });
  };

  const [selectedBrewery, setSelectedBrewery] = useState<Brewery | null>(null);

  const openModal = (brewery: Brewery) => {
    setSelectedBrewery(brewery);
  };

  const closeModal = () => {
    setSelectedBrewery(null);
  };

  return (
    <>
      <h1 className="text-2xl font-bold text-center mt-5">Browse Breweries</h1>
      <p className="text-sm text-center">
        Browse the list of breweries and find your favorites.
      </p>
      <form
        className="flex justify-center items-center space-x-2 my-4"
        onSubmit={(e) => handleSearch(e)}
      >
        <input
          type="text"
          id="search"
          placeholder="Search Breweries"
          className="border border-gray-300 p-2 rounded-md w-full max-w-80 mx-auto"
          value={query}
          onChange={(e) => setQuery((e.target as HTMLInputElement).value)}
        />
        <button
          type="submit"
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-md"
        >
          Search
        </button>
      </form>

      {breweries.length === 0 && query !== "" ? (
        <div className="text-center text-2xl">No breweries found</div>
      ) : (
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
      )}

      <Pagination
        page={page}
        onClick={(value) => setPage(value)}
        totalPages={totalPages}
      />

      <BreweryModal
        isOpen={selectedBrewery !== null}
        onClose={closeModal}
        brewery={selectedBrewery}
      />
    </>
  );
};

export default BrowseBreweries;
