import CityCard from "./CityCard";

function CityList({ cities }) {
  return (
    <div>
      {cities.map((city) => (
        <CityCard 
          key={city.id}
          city={city}
        />
      ))}
    </div>
  );
}

export default CityList;