import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from './alert.mp3';
import { navigate } from '@reach/router';
import Firebase from './Firebase';
import Geodist from 'geodist';

const audio = new Audio(Alert);

const ref = Firebase
.database()
.ref('overdose');

class Helper extends Component {

  constructor() {
    super();
    this.state = {
      help: false,
      audio: 0,
      odObj: ""
    };
    
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.silence = this.silence.bind(this)
    this.getData = this.getData.bind(this)
    this.navigate = this.navigate.bind(this)

  }


  toggleSwitch(event){
    event.preventDefault();
    this.setState({
        help: !this.state.help
    })
    if(!this.state.help){
        audio.play();
    }
  }


  getData(){
    ref.orderByChild('od').limitToLast(1).equalTo(1).on("child_added", (snapshot, prevChildKey) => {
      var od = snapshot.val();
      var id = snapshot.key;
      var odLat = od.lat;
      var odLng = od.lng;

      var dist = Geodist({lat: this.props.lat, lon: this.props.lng}, {lat: odLat, lon: odLng})
      
      
      var odObj = {
        "userID": id,
        "odLat": odLat,
        "odLng":odLng,
        "dist": dist
      }
      if(dist <= 100){
      this.setState({
        odObj: odObj,
        help: true
        });
        audio.play();
      }
    });
  }

  updateAudio(event){
    event.preventDefault();
    audio.play();
    // this.setState({
    //    audio: this.state.audio + 1
    // })
    // Put a timer on the audio
    // if(this.state.audio === 6){
    //     audio.pause();
    //     audio.currentTime = 0;
    //     this.setState({
    //         audio: 0
    //      })
    // }
    }

silence(){
    audio.pause();
    audio.currentTime = 0;
    this.setState({
        audio: 0,
        help: false
    });
}

   navigate(event){
    event.preventDefault();
    var buttonID = event.target.id;
    if(buttonID === "ShowLocation"){
      console.log(this.state.odObj.lat);
      navigate(`/ShowLocation/${this.state.odObj.odLat}/${this.state.odObj.odLng}/${this.state.odObj.userID}`);

    }else {
      navigate('/' + buttonID);
    }
  }

  componentDidMount(){
  if(this.props.lat){
    audio.addEventListener("ended", this.updateAudio);
    this.getData();
  }
  }
  componentWillUnmount(){
    audio.removeEventListener("ended", this.updateAudio);
    this.setState({
      help:false,
      odObj: "",
      mounted: false
    })

  }


  render() {
        const {help} = this.state;


    return (
<div className={`p-0 m-0 wrapper ${help === true ? 'bgFlash' : ''}`}>
{help === true ? 
<div className="d-flex h-100 w-100 p-4 m-0">
    <div className="align-self-center mx-auto">
        <h4 className="text-center text-uppercase font-weight-bold mb-4">A victim is in need of help {this.state.odObj.dist} miles away!</h4>
        <button id="ShowLocation" className="btn btn-danger font-weight-bold text-uppercase w-100 p-4 mt-2" onClick={this.navigate}>Assist Victim</button>
        <button className="btn btn-dark font-weight-bold text-uppercase w-100 p-3 mt-4" onClick={this.silence}>Silence Alert</button>
    </div>
</div>
:
<div className="d-flex  h-100 w-100 p-4 m-0">
    <div className="align-self-center mx-auto">
        <h3 className="text-center text-uppercase font-weight-bold mb-4">On standby for overdose victims</h3>
        <FontAwesomeIcon icon="heart" size="1x" className="heart text-danger text-center w-100 my-4"/>
        <button id="Role" className="btn btn-dark font-weight-bold text-uppercase w-100 p-4 mt-4" onClick={this.navigate}>Go Back</button>
    </div>
</div>
}

</div>

    
    );
  } 
}

export default Helper;