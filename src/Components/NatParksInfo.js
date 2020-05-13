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
    debugger
    return (
      <>
        <h1 className="font-sans font-bold">US National Parks</h1>
        {!isLoading ? (
          parks.map(park => {
            return (
              <ul key={park.id}>
                <li>{park.fullName}</li>
                <li>Designation: {park.designation}</li>
                <li>Location: {park.states}</li>
                <li>Description: {park.description}</li>
                <img className="max-w-sm" src={park.images[0].url} alt={park.images[0].altText} />
                <hr />
              </ul>
            );
          })
        ) : (
          <h3>Loading...</h3>
        )}
      </>
    );
  }
}

export default NatParksInfo;
