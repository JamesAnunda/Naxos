import React, { Component } from 'react';
import GoogleMap from './GoogleMap';
import { navigate } from '@reach/router';
import Firebase from './Firebase';

class ShowLocation extends Component {

    constructor() {
      super();
      this.state = {
      };
      
      this.navigate = this.navigate.bind(this)
      this.mapsSelector = this.mapsSelector.bind(this)
      this.writeUserData = this.writeUserData.bind(this)

    }
  componentDidMount(){
    this.writeUserData(this.props.odUserID);
  }

  writeUserData = (userId) =>{
    Firebase.database().ref('overdose/' + userId).update({
      od: 0
    });
  };

  navigate(event){
    event.preventDefault();
    var buttonID = event.target.id;
    navigate('/' + buttonID);
  }

  mapsSelector() {
    if /* if we're on iOS, open in Apple Maps */
      ((navigator.platform.indexOf("iPhone") !== -1) || 
       (navigator.platform.indexOf("iPad") !== -1) || 
       (navigator.platform.indexOf("iPod") !== -1))
      window.open(`maps://maps.google.com/maps?daddr=${this.props.odLat},${this.props.odLng}>&amp;ll=`);
  else /* else use Google */
      window.open(`https://maps.google.com/maps?daddr=${this.props.odLat},${this.props.odLng}&amp;ll=`);
  }

  render() {

const { lat, lng, odLat, odLng } = this.props;

    return (

<div className='wrapper'>

<div className='container-fluid h-100 d-flex flex-column align-items-center m-0 p-0 bg-warning'>      

<div className="d-flex bg-light h-50 w-100 p-0 m-0">
{lat && (
  <GoogleMap lat={lat} lng={lng} odLat={odLat} odLng={odLng}/>
  )}
</div>


<div className="d-flex bg-light h-50 w-100 p-4 border-top">
    <div className="align-self-center  mx-auto">
      <h4 className="text-center text-uppercase font-weight-bold mb-2">The yellow marker is the overdose victim</h4>
        <button id="Helper" className="btn btn-warning font-weight-bold text-uppercase w-100 p-4 mt-2 above" onClick={this.mapsSelector}>Get Directions</button>
        <button id="Role" className="btn btn-dark font-weight-bold text-uppercase w-100 p-4 mt-4 above" onClick={this.navigate}>Go Back</button>
    </div>
</div>

</div>
</div>
    
    );
  } 
}

export default ShowLocation;