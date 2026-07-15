import { createContext, useState } from "react";

export const FavouriteContext = createContext();

function FavouriteProvider({ children }) {
  const [favorites, setFavorites] = useState([]);

  function addToFavorites(repo){

setFavorites((previous)=>{


const alreadySaved = previous.find(

(item)=>item.id === repo.id

);



if(alreadySaved){

return previous;

}



return [
...previous,
repo
];


});


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