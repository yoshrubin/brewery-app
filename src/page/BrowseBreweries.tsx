import { useLoaderData } from "react-router-dom";
import { Brewery } from "../store/brewerySlice";
import BreweryCard from "../components/BreweryCard";
import { useSelector } from "react-redux";
import { RootState } from "../store";

const BrowseBreweries: React.FC = () => {
  const breweries = useLoaderData() as Brewery[];
  const favorites = useSelector((state: RootState) => state.brewery.favorites);
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4 p-4 ">
      {breweries.map((brewery) => (
        <BreweryCard
          brewery={brewery}
          isFavorite={!!favorites[brewery.id]}
          key={brewery.id}
        />
      ))}
    </div>
  );
};

export default BrowseBreweries;
