import { createContext, useState } from "react";

export const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(repo) {
    setFavorites((prevFavorites) => [...prevFavorites, repo]);
  }

  return (
    <FavouriteContext.Provider
      value={{
        favorites,
        addToFavorites,
      }}
    >
      {children}
    </FavouriteContext.Provider>
  );
}

export default FavouriteProvider;