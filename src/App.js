import React from 'react';
import './App.css';
import Header from './components/Header';
import SolarSystem from './components/SolarSystem';
import Missions from './components/Missions';

function App() {
  return (
    <div>
      <Header />
      <SolarSystem />
      <Missions />
    </div>
  );
}

export default App;
