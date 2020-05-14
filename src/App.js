import React from "react";
import "./styles/main.css";
import backgroundPattern from './images/topography.svg';
import NatParksInfo from './Components/NatParksInfo';
import Navbar from './Components/Navbar';
import Card from './Components/Card';

function App() {
  return (
    <div className="container backgroundPattern">
      <Navbar />
      <NatParksInfo>
        <Card />
      </NatParksInfo>
    </div>
  );
}

export default App;
