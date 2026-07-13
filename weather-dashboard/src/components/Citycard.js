function CityCard({ city }) {
  return (
    <div className="city-card">
      <h2>{city.name}</h2>
      <p>Temperature: {city.temperature}°C</p>
      <p>Condition: {city.condition}</p>
    </div>
  );
}

export default CityCard;