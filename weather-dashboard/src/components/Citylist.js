import CityCard from "./CityCard";

function CityList({ cities }) {
  if (cities.length === 0) {
    return <p>No cities found.</p>;
  }

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
