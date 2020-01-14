import React from 'react';
import Alert from '../assets/audio/alert.mp3';


class OfferHelp extends React.Component {

    componentDidMount(){
        const audio = new Audio(Alert);
        audio.play();
      }

  
    render() {
      return (
        <div className="p-4">
          <button className="btn btn-danger font-weight-bold text-uppercase w-100">Assist Victim</button>
        </div>
      );
    }
  }
  
  export default OfferHelp;