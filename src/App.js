import React from "react";
import "./styles/main.css";
import backgroundPattern from './images/topography.svg';
import NatParksInfo from './Components/NatParksInfo';
import Navbar from './Components/Navbar';
import Card from './Components/Card';
import Fire from './Components/Fire';

function App() {
  return (
    <div>
      <Navbar />
      <NatParksInfo>
        <Card />
      </NatParksInfo>
    </div>
  );
}

export default App;
