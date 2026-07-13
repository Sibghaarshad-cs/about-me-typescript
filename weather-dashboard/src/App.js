import CityList from "./components/CityList";
import cities from "./data";
import SearchBar from "./components/SearchBar";

function App() {
  return (
    <div>
      <h1>Weather Dashboard</h1>

      <SearchBar />

      <CityList cities={cities} />
    </div>
  );
}

export default App;