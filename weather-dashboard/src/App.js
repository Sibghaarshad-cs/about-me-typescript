import CityList from "./components/CityList";
import cities from "./data";
import SearchBar from "./components/SearchBar";
import { useState, useEffect } from "react";

function App() {
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  }, []);
if (loading) {
  return (
    <div>
      <h1>Weather Dashboard</h1>
      <p>Loading weather...</p>
    </div>
  );
}
  const filteredCities = cities.filter((city) =>
  city.name.toLowerCase().includes(search.toLowerCase())


  
);
  return (
    <div>
      <h1>Weather Dashboard</h1>

      <SearchBar
  search={search}
  setSearch={setSearch}
/>


      <CityList cities={filteredCities} />
    </div>
  );
}

export default App;