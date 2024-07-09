import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import ErrorPage from "./error-page";
import Root, { loader as rootLoader } from "./routes/root";
import BrowseBreweries from "./page/BrowseBreweries";
import { Provider } from "react-redux";
import store from "./store";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    errorElement: <ErrorPage />,
    children: [
      {
        path: "/",
        element: <BrowseBreweries />,
        loader: rootLoader,
      },
      {
        path: "/favorites",
        element: <div>Favorites</div>,
      },
    ],
  },
]);

ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <Provider store={store}>
      <RouterProvider router={router} />
    </Provider>
  </React.StrictMode>
);
