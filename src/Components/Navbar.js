import React from 'react';
import "../styles/main.css";
import adventureLogo from '../images/adventure.svg';

class Navbar extends React.Component {
  state = {
    isOpen: true,
  }

  handleClick = () => {
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  findMe = () => {
    const status = document.querySelector('#status');
    const mapLink = document.querySelector('#map-link');

    mapLink.href = '';
    mapLink.textContent = '';

    function success(position) {
      const latitude  = position.coords.latitude;
      const longitude = position.coords.longitude;

      status.textContent = '';
      mapLink.href = `https://www.openstreetmap.org/#map=18/${latitude}/${longitude}`;
      mapLink.textContent = `Latitude: ${latitude} °, Longitude: ${longitude} °`;
    }

    function error() {
      status.textContent = 'Unable to retrieve your location';
    }

    if(!navigator.geolocation) {
      status.textContent = 'Geolocation is not supported by your browser';
    } else {
      status.textContent = 'Locating…';
      navigator.geolocation.getCurrentPosition(success, error);
    }
  }


  render() {
    return (
      <header class="flex items-center justify-between px-2 py-3 bg-transparent">
        <div class="flex items-center justify-between px-4 py-3">
          <div>
            <img class="h-40" src={adventureLogo} alt="Adventure Is Out There" />
          </div>
          <div>
            <div class="text-center font-bold uppercase text-gray-800 text-4xl mb-2">Plan Your Escape</div>
          </div>
          <div>
            <div>
              <button onClick={this.findMe} type="button" class="block align-middle text-red-700 uppercase font-semibold hover:text-red-300 text-lg focus:text-white focus:outline-none">
                Find Me
              </button>
              <p id="status"></p>
              <a id="map-link" target="_blank"></a>
            </div>
            <button onClick={this.handleClick} type="button" class="block text-gray-700 hover:text-gray-400 focus:text-gray-500 focus:outline-none">
              <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
                {this.state.isOpen ?
                  <path fill-rule="evenodd" d="M18.278 16.864a1 1 0 0 1-1.414 1.414l-4.829-4.828-4.828 4.828a1 1 0 0 1-1.414-1.414l4.828-4.829-4.828-4.828a1 1 0 0 1 1.414-1.414l4.829 4.828 4.828-4.828a1 1 0 1 1 1.414 1.414l-4.828 4.829 4.828 4.828z"/>
                :
                <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
                }
              </svg>
            </button>
          </div>
        </div>
        {this.state.isOpen ?
          <div className="px-2 pt-2 pb-4">
            <a href="#" class="block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-500">List your property</a>
            <a href="#" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-500">Trips</a>
            <a href="#" class="mt-1 block px-2 py-1 text-gray-900 font-semibold rounded hover:bg-gray-500">Messages</a>
          </div>
        : null }
      </header>
    );
  }

}

export default Navbar;
