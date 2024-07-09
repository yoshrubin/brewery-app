import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";

export default function Root() {
  return (
    <>
      <Navbar />
      <div className="max-w-screen-lg mx-auto flex flex-col items-center">
        <Outlet />
      </div>
    </>
  );
}
