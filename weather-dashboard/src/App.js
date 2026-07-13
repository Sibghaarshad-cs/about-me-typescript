import { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import CityList from "./components/CityList";
import cities from "./data";
import "./App.css";

function App() {
  // State
  const [search, setSearch] = useState("");
  const [loading, setLoading] = useState(true);

  // Fake loading for 2 seconds
  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 2000);

    return () => clearTimeout(timer);
  }, []);

  // Filter cities
  const filteredCities = cities.filter((city) =>
    city.name.toLowerCase().includes(search.toLowerCase())
  );

  // Loading Screen
  if (loading) {
    return (
      <div className="app">
        <h1>🌤 Weather Dashboard</h1>

        <p className="subtitle">
          Check the latest weather in your favorite cities
        </p>

        <div className="loading">
          ⏳ Loading weather...
        </div>
      </div>
    );
  }

  // Main UI
  return (
    <div className="app">
      <h1>🌤 Weather Dashboard</h1>

      <p className="subtitle">
        Check the latest weather in your favorite cities
      </p>

      <SearchBar
        search={search}
        setSearch={setSearch}
      />

      <CityList cities={filteredCities} />
    </div>
  );
}

export default App;