import React, { Component } from 'react';
import { navigate } from '@reach/router';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Firebase from './Firebase';

class HelpWaiting extends Component {

  constructor() {
    super();
    this.state = {
    };
    
    this.navigate = this.navigate.bind(this)
    this.writeUserData = this.writeUserData.bind(this)

  }

  
  componentDidMount(){
    this.writeUserData(this.props.userID, this.props.lat, this.props.lng);
  }

  navigate(event){
    event.preventDefault();
    var buttonID = event.target.id;
    navigate('/' + buttonID);
  }

  writeUserData = (userId, lat, lng) =>{
    Firebase.database().ref('overdose/' + userId).set({
      lat: lat,
      lng: lng,
      od: 1
    });
  };

  render() {


    return (
      <div className="p-0 m-0 wrapper"> 
        <div className="d-flex  h-100 w-100 p-4 m-0">
            <div className="align-self-center mx-auto">
                <h2 className="text-center text-uppercase font-weight-bold mb-4">Help is on the way!</h2>
                <FontAwesomeIcon icon="ambulance" size="10x" className="text-danger text-center w-100 my-4"/>
                <button id="Role" className="btn btn-dark font-weight-bold text-uppercase w-100 p-4 mt-4" onClick={this.navigate}>Go Back</button>
            </div>
        </div>
      </div>
    
    );
  } 
}

export default HelpWaiting;