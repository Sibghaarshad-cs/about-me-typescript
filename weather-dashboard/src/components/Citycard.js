function CityCard({ city }) {
  const weatherIcons = {
    Sunny: "☀️",
    Cloudy: "☁️",
    Rainy: "🌧️",
    Snowy: "❄️",
  };

  return (
    <div className={`city-card ${city.condition.toLowerCase()}`}>
      <div className="card-header">
        <div className="weather-icon">
          {weatherIcons[city.condition]}
        </div>

        <div>
          <h2>{city.name}</h2>
          <p className="condition">{city.condition}</p>
        </div>
      </div>

      <div className="temperature">
        {city.temperature}°C
      </div>

      <div className="details">
        <div>
          <span>💧</span>
          <p>Humidity</p>
          <strong>{city.humidity}%</strong>
        </div>

        <div>
          <span>💨</span>
          <p>Wind</p>
          <strong>{city.wind} km/h</strong>
        </div>

        <div>
          <span>🧭</span>
          <p>Pressure</p>
          <strong>{city.pressure} hPa</strong>
        </div>
      </div>
    </div>
  );
}

export default CityCard;