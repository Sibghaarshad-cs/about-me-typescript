import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";

import FavouriteProvider from "./Context/FavouriteContext";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <FavouriteProvider>
      <App />
    </FavouriteProvider>
  </React.StrictMode>
);