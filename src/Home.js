import React, { Component } from 'react';
import GoogleMap from './GoogleMap';

class Home extends Component {

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

export default Home;