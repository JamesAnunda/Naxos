    import React, { Component } from 'react';
    import { Map, Marker, GoogleApiWrapper } from 'google-maps-react';
    
    const mapStyles = {
      width: '100%',
      height: '50%'
    };
  
    export class MapContainer extends Component {
      
      render() {
        
        const { lat, lng , odLat, odLng} = this.props;


        return (
          <Map
            google={this.props.google}
            zoom={12}
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
            position={{lat: odLat, lng: odLng}}
            icon="http://maps.google.com/mapfiles/ms/icons/yellow-dot.png"
            size={5}
            />
          <Marker />
          </Map>
        );
      }
    }
    
    export default GoogleApiWrapper({
      apiKey: 'AIzaSyA7-EGQyZ2kJdH0ldCzxt3-aTS5jpa8OY8'
    })(MapContainer);



    