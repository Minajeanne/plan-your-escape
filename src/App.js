import React from "react";
import "./styles/main.css";
import backgroundPattern from './images/topography.svg';
import NatParksInfo from './Components/NatParksInfo';
import Navbar from './Components/Navbar';

function App() {
  return (
    <div>
      <Navbar />
      <NatParksInfo />
    </div>
  );
}

export default App;
