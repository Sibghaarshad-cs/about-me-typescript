import { BrowserRouter, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import Favorites from "./pages/Favorites";
import Navbar from "./components/Navbar";

import FavouriteProvider from "./Context/FavouriteContext";


function App() {
  return (

    <FavouriteProvider>

      <BrowserRouter>

        <Navbar />

        <Routes>

          <Route 
            path="/" 
            element={<Home />} 
          />

          <Route
            path="/favorites"
            element={<Favorites />}
          />

        </Routes>

      </BrowserRouter>

    </FavouriteProvider>

  );
}


export default App;