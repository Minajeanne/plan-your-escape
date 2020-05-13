import React from 'react';
import "../styles/main.css";
import camping from '../images/undraw_camping_noc8.svg';

class Navbar extends React.Component {
  state = {

  }

  render() {
    return (
      <header class="flex items-center justify-between px-4 py-3 bg-gray-800">
        <div>
          <img class="h-12" src={camping} alt="camping tent" />
        </div>
        <div>
          <div class="align-middle font-bold uppercase text-white text-4xl mb-2">Plan Your Escape</div>
        </div>
        <div>
          <button type="button" class="block text-gray-500 hover:text-white focus:text-white focus:outline-none">
            <svg class="h-6 w-6 fill-current" viewBox="0 0 24 24">
              <path fill-rule="evenodd" d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"/>
            </svg>
          </button>
        </div>
      </header>
    );
  }

}

export default Navbar;
