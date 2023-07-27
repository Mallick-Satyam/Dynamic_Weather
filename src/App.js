import React from 'react';
import './App.css';
import SignInpage from './components/SignInPage';
function App() {
  return (
    <div className='main-back'>
<div className="weather-app">
      <h1>Weather App</h1>
      {/* Other components and weather data will be displayed here */}
    </div>
 <div className='index'>
      <div>
      
      <SignInpage/>
      </div>
  </div>
    </div>
    
    
      
   
  );
}

export default App;
