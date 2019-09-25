import React, { Component } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from './alert.mp3';
import { navigate } from '@reach/router';

const audio = new Audio(Alert);

class Helper extends Component {

  constructor() {
    super();
    this.state = {
      help: false,
      audio: 0
    };
    
    this.toggleSwitch = this.toggleSwitch.bind(this);
    this.updateAudio = this.updateAudio.bind(this);
    this.silence = this.silence.bind(this)


  }


  toggleSwitch(event){
    event.preventDefault();
    this.setState({
        help: !this.state.help
    })
    if(this.state.help === true){
        audio.play();
    }
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
        audio: 0
    });
    this.state.help = true;
}

navigate(event){
    event.preventDefault();
    var buttonID = event.target.id;
    navigate('/' + buttonID);
  }

  componentDidMount(){

    audio.addEventListener("ended", this.updateAudio);
    this.setState({help:true})
  }

  componentWillUnmount(){
    audio.removeEventListener("ended", this.updateAudio);
  }


  render() {
    const { lat, lng } = this.props;
    const {help} = this.state;


    return (
<div className={`p-0 m-0 wrapper bg-primary ${help === false ? 'bgFlash' : ''}`}>
{help === true ? 
<div className="d-flex  h-100 w-100 p-4 m-0">
    <div className="align-self-center">
    <button onClick={this.toggleSwitch} className="btn btn-secondary">Toggle</button>
    <p>{lat}{"  "}{lng}</p>
        <h4 className="text-center text-uppercase font-weight-bold mb-4">On standby for overdose victims</h4>
        <FontAwesomeIcon icon="heart" size="1x" className="heart text-danger text-center w-100 my-4"/>
        <button id="Role" className="btn btn-dark font-weight-bold text-uppercase w-100 p-2 mt-4" onClick={this.navigate}>Go Back</button>
    </div>
</div>
:
<div className="d-flex h-100 w-100 p-4 m-0">
    <div className="align-self-center">
        <h4 className="text-center text-uppercase font-weight-bold mb-4">A victim is in need of help nearby!</h4>
        <button id="ShowLocation" className="btn btn-danger font-weight-bold text-uppercase w-100 p-4 mt-2" onClick={this.navigate}>Assist Victim</button>
        <button className="btn btn-dark font-weight-bold text-uppercase w-100 p-2 mt-4" onClick={this.silence}>Silence Alert</button>
    </div>
</div>
}

</div>

    
    );
  } 
}

export default Helper;