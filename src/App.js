import React from "react";
import "./styles/main.css";
// import background from './images/ivana-cajina-unsplash.jpg';
import backgroundPattern from './images/topography.svg';

function App() {
  return (
    <div className="max-w-md rounded overflow-hidden shadow-lg">
      <img className="w-full" src={ backgroundPattern } alt="topography map"/>
      <div className="bg-gray-100">
        <div class="px-6 py-4">
          <div class="font-bold text-orange-800 text-center text-xl mb-2">Plan Your Escape</div>
          <p class="text-gray-700 text-base">
            I don't know about you, but I need to get out of here.
          </p>
        </div>
        <div class="px-6 py-4">
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#usnationalparks</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2">#travel</span>
          <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700">#escape</span>
        </div>
      </div>
    </div>
  );
}

export default App;
