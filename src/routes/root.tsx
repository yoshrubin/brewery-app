import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { fetchBreweries } from "../api";

export default function Root() {
  return (
    <>
      <Navbar />
      <Outlet />
    </>
  );
}

export const loader = async () => {
  const fetchedBreweries = await fetchBreweries(1, 10);
  return {
    breweries: fetchedBreweries.data,
  };
};
