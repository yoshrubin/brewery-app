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
  const page = 1;
  const perPage = 12;

  const fetchedBreweries = await fetchBreweries(page, perPage);
  return fetchedBreweries;
};
