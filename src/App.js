import React from "react";
import "./styles/main.css";
// import camping from './images/undraw_camping_noc8.svg';
import backgroundPattern from './images/topography.svg';
import NatParksInfo from './Components/NatParksInfo';

function App() {
  return (
    <div>
      <div class="px-6 py-4">
        {/* <img className="" src={ camping } alt="camping tent" /> */}
        <div class="align-middle text-center font-sans font-bold text-green-900 text-5xl mb-2">Plan Your Escape</div>
        <p class="text-white text-center text-3xl text-base p-2">
          I don't know about you, but I need to get out of here.
        </p>
      </div>
      <NatParksInfo />
    </div>
  );
}

export default App;
