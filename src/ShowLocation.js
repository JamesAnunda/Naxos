import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

class ShowLocation extends Component {

  componentDidMount(){

  }

  render() {

const { lat, lng } = this.props;

    return (
<div>
{lat && (
<GoogleMap lat={lat} lng={lng}/>
)}
</div>
    
    );
  } 
}

export default ShowLocation;