// CityTemperature.js

import React, { useEffect, useState } from "react";

const CityTemperature = ({ city, isFavorite, onAddToFavorites, onRemoveFromFavorites }) => {
  const [temperature, setTemperature] = useState(null);

  useEffect(() => {
    const fetchTemperatureData = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=f56f24967aaf51182d1d4df628297c6d`;
      const response = await fetch(url);
      const data = await response.json();

      if (data.main && data.main.temp) {
        setTemperature(data.main.temp);
      } else {
        setTemperature(null);
      }
    };

    fetchTemperatureData();
  }, [city]);

  return (
    <div>
      <h2>{city}</h2>
      {!temperature ? (
        <p>Temperature data not available</p>
      ) : (
        <>
          <p>Temperature: {temperature} °C</p>
          {isFavorite ? (
            <button onClick={() => onRemoveFromFavorites(city)}>Remove from Favorites</button>
          ) : (
            <button onClick={() => onAddToFavorites(city)}>Add to Favorites</button>
          )}
        </>
      )}
    </div>
  );
};

export default CityTemperature;

