import React, { useState, useEffect } from 'react';
import './DarkThemeToggle.css';

const DarkThemeToggle = () => {
  const [darkTheme, setDarkTheme] = useState(getInitialTheme);

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', darkTheme ? 'dark' : 'light');
    localStorage.setItem('dark-theme', JSON.stringify(darkTheme));
  }, [darkTheme]);

  function getInitialTheme() {
    const savedTheme = JSON.parse(localStorage.getItem('dark-theme'));
    return savedTheme ?? false;
  }

  return (
    <div className="theme-toggle-container">
      <input
        type="checkbox"
        id="darkThemeToggle"
        checked={darkTheme}
        onChange={() => setDarkTheme((prevTheme) => !prevTheme)}
      />
      <label htmlFor="darkThemeToggle" className="theme-toggle-label">
        <span className="theme-toggle-slider"></span>
      </label>
    </div>
  );
};

export default DarkThemeToggle;
