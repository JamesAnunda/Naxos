import React, { Component } from 'react';
//import GoogleMap from './GoogleMap';
import OfferHelp from './help/OfferHelp';

class Home extends Component {

  constructor() {
    super();
    this.state = {
      help: null
    };
    

  }

  
  componentDidMount(){
    this.setState({help:1})

  }



  render() {

const { lat, lng } = this.props;

    return (
<div className="p-4">

{lat}{"  "}{lng}

{this.state.help && (<OfferHelp />)}

</div>
    
    );
  } 
}

export default Home;