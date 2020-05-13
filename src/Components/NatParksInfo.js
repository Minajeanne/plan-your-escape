import React from 'react';
import "../styles/main.css";

const axios = require('axios');

class NatParksInfo extends React.Component {
  state = {
    isLoading: true,
    parks: [],
    error: null
  }

  getParks() {
    axios.get("https://developer.nps.gov/api/v1/parks?limit=2&api_key=bIgHnNja5cMSdPCuz62UsRG93RfyYXSGAdlp0fgX")
    .then(response => {
      this.setState({
        parks: response.data.data,
        isLoading: false
      });
    })
    .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getParks();
  }

  render () {
    const { isLoading, parks } = this.state;
    // debugger
    return (
      <div className="container bg-transparent border rounded-lg overflow-hidden shadow-md">
        <h1 className="font-sans font-semibold text-center text-green-900 text-3xl py-8">US National Parks</h1>
        {!isLoading ? (
          parks.map(park => {
            return (
              <>
                <ul key={park.id} className="p-6 ">
                  <li className="text-left text-xl uppercase tracking-wide">{park.fullName}</li>
                  <li className="text-left text-lg p-1">Designation: {park.designation}</li>
                  <li className="text-left text-lg p-1">Location: {park.states}</li>
                  <li className="text-left text-lg p-2">{park.description}</li>
                </ul>
                {park.images.map(image =>
                  <figure className="object-center p-3 m-2">
                    <img className="flex flex-wrap" src={image.url} alt={image.altText} />
                    <figcaption className="text-center tracking-tighter ">{image.caption}</figcaption>
                  </figure>
                )}
                <hr />
              </>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </div>
    );
  }
}

export default NatParksInfo;
