import React from 'react';
import "../styles/main.css";
import adventureLogo from '../images/adventure.svg';

class Navbar extends React.Component {
  state = {

  }

  render() {
    return (
      <header class="flex items-center justify-between px-3 py-3 bg-transparent">
        <div>
          <img class="h-40" src={adventureLogo} alt="Adventure Is Out There" />
        </div>
        <div>
          <div class="text-center font-bold uppercase text-gray-800 text-4xl mb-2">Plan Your Escape</div>
        </div>
        <div>
          <button type="button" class="block align-top text-gray-600 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-10 w-10 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </header>
    );
  }

}

export default Navbar;
