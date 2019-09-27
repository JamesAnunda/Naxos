import React, {Component} from 'react';
import { Router, navigate } from '@reach/router';
import Firebase, {auth} from './Firebase';
import './App.css';

import Login from './Login';
import Home from './Home';
import Role from './Role';
import Helper from './Helper';
import HelpWaiting from './HelpWaiting';
import ShowLocation from './ShowLocation';


import { library } from '@fortawesome/fontawesome-svg-core';
import { faHeartbeat, faSpinner, faHeart, faAmbulance} from '@fortawesome/free-solid-svg-icons';

library.add(faHeartbeat, faSpinner, faHeart, faAmbulance);






class App extends Component {


  constructor() {
    super();
    this.state = {
      user: null,
      lat: null,
      lng: null,
      userID: null
    };


    this.authPhone = this.authPhone.bind(this);
  }
   

componentWillUnmount(){
  this.setState({ lat: null, lng: null })
}

componentDidMount () {


  // navigator.geolocation.getCurrentPosition(position => {
  //   this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
  // }, err => console.log(err)
  // );

  navigator.geolocation.watchPosition( position=> {
    this.setState({ lat: position.coords.latitude, lng: position.coords.longitude });
  }, err => console.log(err)
  );


    auth.onAuthStateChanged((user) => {
      if (user) {
         this.setState({
           user: user,
           userID: user.uid
          })
         console.log('logged in'); 
         console.log(user.uid);
         navigate('/Role');
      } else{
        console.log('logged out');
        navigate('/');
      }
  });
  



  auth.setPersistence(Firebase.auth.Auth.Persistence.LOCAL)
  .then(function() {
    // Existing and future Auth states are now persisted in the current
    // session only. Closing the window would clear any existing state even
    // if a user forgets to sign out.
    // ...
    // New sign-in will be persisted with session persistence.
    //return Firebase.auth().signInWithEmailAndPassword(email, password);
  })
  .catch(function(error) {
    // Handle Errors here.
    //var errorCode = error.code;
    //var errorMessage = error.message;
  });
  
}



authPhone() {
    const phoneNumber = this.state.phone;
    const appVerifier = window.recaptchaVerifier;
    Firebase
    .auth()
    .signInWithPhoneNumber(phoneNumber, appVerifier)
    .then(confirmResult => {
      console.log("success");
      console.log(confirmResult);
      // success

        //var code = getCodeFromUserInput();
        var code = "123463";
        confirmResult.confirm(code).then(function (result) {
          // User signed in successfully.
          var user = result.user;
          console.log(user);
          // ...
        }).catch(function (error) {
          // User couldn't sign in (bad verification code?)
          // ...
          console.log(error);
        });
    })
    .catch(error => {
      // error
      console.log('nope error');
      console.log(error);
    });
}

authAnon() { 
Firebase.auth().signInAnonymously().catch(function(error) {
  // Handle Errors here.
  //var errorCode = error.code;
  //var errorMessage = error.message;
  // ...
});
};



  writeUserData = (userId, name, email, imageUrl) =>{
    Firebase.database().ref('users/' + userId).set({
      username: name,
      email: email,
      profile_picture : imageUrl
    });
  };

  addMeeting = meetingName => {
    const ref = Firebase
      .database()
      .ref(`meetings/${this.state.user.uid}`);
    ref.push({ meetingName: meetingName });
  };

  


  render(){


  return (


<div>
<Router>
  <Login path='/' authAnon={this.authAnon} />
  <Home path='/Home' lat={this.state.lat} lng={this.state.lng}/>
  <Helper path='/Helper' lat={this.state.lat} lng={this.state.lng}/>
  <HelpWaiting path='/HelpWaiting' lat={this.state.lat} lng={this.state.lng} userID={this.state.userID}/>
  <ShowLocation path='/ShowLocation/:odLat/:odLng/:odUserID' lat={this.state.lat} lng={this.state.lng}/>
  <Role path='/Role'/>
</Router>


</div>
  );
}
}

export default App;
