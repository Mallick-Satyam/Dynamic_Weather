import React from 'react';
import './DashboardPage.css';

import Tempapp from './Tempapp';
const DashboardPage = ({ onSignOut }) => {
  return (
   
<div>
      <nav className="navbar">
        
        <div className="navbar-right">
          <button onClick={onSignOut}>Sign Out</button>
        </div>
      </nav>
      
        <Tempapp/>
      
    </div>
    
    
  );
};

export default DashboardPage;
