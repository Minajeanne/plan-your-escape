import React from 'react';

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
        parks: response.data,
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
        <h1>US National Parks</h1>
        {!isLoading ? (
          parks.data.map(park => {
            return (
              <div key={park.id}>
                <p>Name: {park.name}</p>
                <p>Location: {park.states}</p>
                <p>Description: {park.description}</p>
                <hr />
              </div>
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
