    import React, { Component } from 'react';
    import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
    
    const mapStyles = {
      width: '100%',
      height: '100%'
    };
  
    export class MapContainer extends Component {
      
      render() {
        
        const { lat, lng } = this.props;


        return (
          <Map
            google={this.props.google}
            zoom={22}
            style={mapStyles}
            initialCenter={{
             lat: lat,
             lng: lng
            }}
            >
           <Marker
            name={'Your Location'}
            position={{lat: lat, lng: lng}}       
            />
          <Marker />

          <Marker
            name={'Overdose Location'}
            position={{lat: "39.803935", lng: "-84.883993"}}
            icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            size={5}
            />
          <Marker />
          </Map>
        );
      }
    }
    
    export default GoogleApiWrapper({
      apiKey: 'AIzaSyDJIxxLlZRRmTm28V7FW5Sm5BOIiZ3nt9s'
    })(MapContainer);



    