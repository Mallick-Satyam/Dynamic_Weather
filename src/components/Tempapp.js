import React, { useEffect, useState } from 'react';
import './Tempapp.css';

const Tempapp = () => {
  const [city, setCity] = useState(null);
  const [search, setSearch] = useState('Jaipur');
  const [unit, setUnit] = useState('metric');
  const [favorites, setFavorites] = useState([]);
  const [darkMode, setDarkMode] = useState(false); 

  useEffect(() => {
    const fetchApi = async () => {
      const url = `http://api.openweathermap.org/data/2.5/weather?q=${search}&units=${unit}&appid=f56f24967aaf51182d1d4df628297c6d`;
      const response = await fetch(url);
      const resJson = await response.json();
      setCity(resJson.main);
    };
    fetchApi();
  }, [search, unit]);

  const handleUnitChange = () => {
    setUnit((prevUnit) => (prevUnit === 'metric' ? 'imperial' : 'metric'));
  };

  const handleAddFavorite = () => {
    if (city) {
      const newFavorite = {
        city: search,
        temperature: city.temp,
      };
      setFavorites((prevFavorites) => [...prevFavorites, newFavorite]);
      alert('City and its temperature added');
    }
  };

  const handleRemoveFavorite = (cityToRemove) => {
    setFavorites((prevFavorites) =>
      prevFavorites.filter((favorite) => favorite.city !== cityToRemove)
    );
  };

  const handleDarkModeToggle = () => {
    setDarkMode((prevDarkMode) => !prevDarkMode);
  };

  return (
    <>
      <div className={`main-bg ${darkMode ? 'dark-mode' : ''}`}>
      <div className={`box ${darkMode ? 'dark-mode' : ''}`}>
          <div className="inputData">
            <input
              type="search"
              placeholder="City Name"
              value={search}
              className="inputField"
              onChange={(event) => {
                setSearch(event.target.value);
              }}
            />
          </div>

          {!city ? (
            <p>No data found</p>
          ) : (
            <div>
              <div className="info">
                <h2 className="location">
                  <i>{search}</i>
                </h2>
                <h1 className="temp">
                  {city.temp}
                  {unit === 'metric' ? '°C' : '°F'}
                </h1>
                <h3 className="humid"> Humidity {city.humidity}%</h3>
              </div>
              <div className="convert-but">
                <button className="but" onClick={handleUnitChange}>
                  Convert to {unit === 'metric' ? 'Fahrenheit' : 'Celsius'}
                </button>
              </div>
              <div className="add-favorite">
                <button className="but" onClick={handleAddFavorite}>
                  Add to Favorites
                </button>
              </div>
            </div>
          )}

          <div className="header-main">
            <h2 className="header-title">Favorites:</h2>
            <ul>
              {favorites.map((favorite, index) => (
                <li key={index}>
                  {favorite.city}: {favorite.temperature} °C
                  <button
                    className="delete-but"
                    onClick={() => handleRemoveFavorite(favorite.city)}
                  >
                    Delete
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      <div className="dark-mode-toggle">
        <button className='darkbut' onClick={handleDarkModeToggle}>
          {darkMode ? 'Light Mode' : 'Dark Mode'}
        </button>
      </div>
    </>
  );
};

export default Tempapp;


